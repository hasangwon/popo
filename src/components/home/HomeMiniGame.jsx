import { useEffect, useRef, useState } from "react";

const MOVE_KEY_MAP = {
  KeyW: "w",
  KeyA: "a",
  KeyS: "s",
  KeyD: "d",
};

const WORLD_SIZE = 520;
const PLAYER_SPEED = 225;
const PLAYER_RADIUS = 15;
const ENEMY_LIMIT = 22;
const ITEM_LIMIT = 4;
const BULLET_LIMIT = 18;
const ITEM_LIFETIME = 10;
const MINI_GAME_NAME = "hasangwon-mini-game";
const DIFFICULTIES = [
  {
    id: "normal",
    label: "Normal",
    healthMultiplier: 1,
    speedMultiplier: 1,
  },
  {
    id: "hard",
    label: "Hard",
    healthMultiplier: 1.5,
    speedMultiplier: 1.5,
  },
  {
    id: "hell",
    label: "Hell",
    healthMultiplier: 2,
    speedMultiplier: 2,
  },
];

const WEAPONS = [
  { id: "rifle", name: "Rifle", color: "#38bdf8" },
  { id: "shotgun", name: "Shotgun", color: "#fb923c" },
  { id: "laser", name: "Laser", color: "#d946ef" },
  { id: "fire", name: "Fire", color: "#f97316" },
];

const BOSS_STAGES = [
  { score: 1000, id: "pink", color: "#ff4d6d" },
  { score: 2000, id: "sky", color: "#22d3ee" },
  { score: 3000, id: "yellow", color: "#facc15" },
  { score: 4000, id: "lime", color: "#bef264" },
];
const FINAL_BOSS_SCORE = 5000;

const weaponMap = WEAPONS.reduce((acc, weapon) => {
  acc[weapon.id] = weapon;
  return acc;
}, {});

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const getRandomWeapon = () =>
  WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
const getClearStorageKey = (modeId) => `${MINI_GAME_NAME}-clear:${modeId}`;
const getInitialClears = () => {
  if (typeof window === "undefined") {
    return {};
  }

  return DIFFICULTIES.reduce((acc, difficulty) => {
    acc[difficulty.id] =
      localStorage.getItem(getClearStorageKey(difficulty.id)) === "clear";
    return acc;
  }, {});
};

const createEdgePosition = (margin = 18) => {
  const side = Math.floor(Math.random() * 4);
  const point = Math.random() * WORLD_SIZE;

  if (side === 0) return { x: point, y: margin };
  if (side === 1) return { x: WORLD_SIZE - margin, y: point };
  if (side === 2) return { x: point, y: WORLD_SIZE - margin };
  return { x: margin, y: point };
};

const createEnemy = (modeConfig) => {
  const position = createEdgePosition(12);
  const hp = modeConfig.healthMultiplier;

  return {
    ...position,
    radius: 12 + Math.random() * 5,
    speed: (54 + Math.random() * 34) * modeConfig.speedMultiplier,
    wobble: Math.random() * Math.PI * 2,
    hp,
    maxHp: hp,
  };
};

const createBoss = (stage, modeConfig, speedMultiplier = 1) => {
  const side = Math.floor(Math.random() * 4);
  const point = 80 + Math.random() * (WORLD_SIZE - 160);
  let position = { x: point, y: -38 };

  if (side === 1) position = { x: WORLD_SIZE + 38, y: point };
  if (side === 2) position = { x: point, y: WORLD_SIZE + 38 };
  if (side === 3) position = { x: -38, y: point };

  const bossHp = (18 + stage.score / 250) * 10 * modeConfig.healthMultiplier;

  return {
    ...position,
    radius: 32,
    speed: 34 * modeConfig.speedMultiplier * speedMultiplier,
    wobble: Math.random() * Math.PI * 2,
    color: stage.color,
    isBoss: true,
    bossId: stage.id,
    hp: bossHp,
    maxHp: bossHp,
  };
};

const createWeaponItem = (gameTime, position, weapon = getRandomWeapon()) => ({
  x: position.x,
  y: position.y,
  type: "weapon",
  weaponId: weapon.id,
  radius: 10,
  pulse: Math.random() * Math.PI * 2,
  createdAt: gameTime,
});

const createHealItem = (gameTime, position) => ({
  x: position.x,
  y: position.y,
  type: "heal",
  radius: 9,
  pulse: Math.random() * Math.PI * 2,
  createdAt: gameTime,
});

const createInitialWeaponLevels = () =>
  WEAPONS.reduce((acc, weapon) => {
    acc[weapon.id] = 0;
    return acc;
  }, {});

const HomeMiniGame = ({ onBossEnter, onGameReset }) => {
  const canvasRef = useRef(null);
  const keysRef = useRef(new Set());
  const frameRef = useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedMode, setSelectedMode] = useState("normal");
  const [clearedModes, setClearedModes] = useState(getInitialClears);
  const [gameResult, setGameResult] = useState("");
  const stateRef = useRef({
    player: {
      x: WORLD_SIZE / 2,
      y: WORLD_SIZE / 2,
      hp: 100,
    },
    enemies: [],
    items: [],
    bullets: [],
    beams: [],
    score: 0,
    gameTime: 0,
    lastTime: 0,
    enemyTimer: 0,
    shotTimer: 0,
    hitTimer: 0,
    damageFlashTimer: 0,
    guaranteedWeaponSpawned: false,
    spawnedBossIds: [],
    activeWeapon: null,
    weaponLevels: createInitialWeaponLevels(),
    defeatedFinalBosses: 0,
    isCleared: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: false });

    if (!context) {
      return undefined;
    }

    const modeConfig =
      DIFFICULTIES.find((difficulty) => difficulty.id === selectedMode) ||
      DIFFICULTIES[0];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resetGame = () => {
      stateRef.current = {
        player: {
          x: WORLD_SIZE / 2,
          y: WORLD_SIZE / 2,
          hp: 100,
        },
        enemies: [createEnemy(modeConfig), createEnemy(modeConfig)],
        items: [],
        bullets: [],
        beams: [],
        score: 0,
        gameTime: 0,
        lastTime: performance.now(),
        enemyTimer: 0,
        shotTimer: 0,
        hitTimer: 0,
        damageFlashTimer: 0,
        guaranteedWeaponSpawned: false,
        spawnedBossIds: [],
        activeWeapon: null,
        weaponLevels: createInitialWeaponLevels(),
        defeatedFinalBosses: 0,
        isCleared: false,
      };
    };

    const drawCircle = (x, y, radius, fill, stroke = "#0f172a") => {
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = fill;
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = stroke;
      context.stroke();
    };

    const drawGame = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = rect.width / WORLD_SIZE;
      const state = stateRef.current;
      const activeWeapon = state.activeWeapon
        ? weaponMap[state.activeWeapon]
        : { name: "Basic", color: "#64748b" };
      const activeLevel = state.weaponLevels[state.activeWeapon] || 0;

      context.save();
      context.clearRect(0, 0, rect.width, rect.height);
      context.fillStyle = "#fffdf4";
      context.fillRect(0, 0, rect.width, rect.height);
      context.scale(scale, scale);

      context.strokeStyle = "rgba(15, 23, 42, 0.14)";
      context.lineWidth = 1;

      for (let line = 40; line < WORLD_SIZE; line += 40) {
        context.beginPath();
        context.moveTo(line, 0);
        context.lineTo(line, WORLD_SIZE);
        context.moveTo(0, line);
        context.lineTo(WORLD_SIZE, line);
        context.stroke();
      }

      state.items.forEach((item) => {
        const pulse = Math.sin(item.pulse) * 2;

        if (item.type === "heal") {
          drawCircle(item.x, item.y, item.radius + pulse, "#22c55e");
          context.fillStyle = "#ffffff";
          context.fillRect(item.x - 2, item.y - 8, 4, 16);
          context.fillRect(item.x - 8, item.y - 2, 16, 4);
          return;
        }

        const weapon = weaponMap[item.weaponId];
        const weaponInitial = weapon.name.slice(0, 1).toUpperCase();

        drawCircle(item.x, item.y, item.radius + pulse, weapon.color);
        context.fillStyle = "#0f172a";
        context.font = "900 16px Pretendard, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(weaponInitial, item.x, item.y + 1);
        context.textAlign = "start";
        context.textBaseline = "alphabetic";
      });

      state.beams.forEach((beam) => {
        context.beginPath();
        context.moveTo(beam.x1, beam.y1);
        context.lineTo(beam.x2, beam.y2);
        context.lineWidth = 7;
        context.strokeStyle = beam.color;
        context.stroke();
        context.lineWidth = 2;
        context.strokeStyle = "#ffffff";
        context.stroke();
      });

      state.bullets.forEach((bullet) => {
        drawCircle(bullet.x, bullet.y, bullet.radius, bullet.color);
      });

      state.enemies.forEach((enemy) => {
        drawCircle(enemy.x, enemy.y, enemy.radius, enemy.color || "#fb7185");

        if (enemy.isBoss) {
          const barWidth = enemy.radius * 2;
          const barX = enemy.x - enemy.radius;
          const barY = enemy.y - enemy.radius - 12;

          context.fillStyle = "#e2e8f0";
          context.fillRect(barX, barY, barWidth, 6);
          context.fillStyle = "#ef4444";
          context.fillRect(barX, barY, barWidth * (enemy.hp / enemy.maxHp), 6);
          context.strokeStyle = "#0f172a";
          context.lineWidth = 2;
          context.strokeRect(barX, barY, barWidth, 6);
        }
      });

      const playerColor = state.damageFlashTimer > 0 ? "#ef4444" : "#111827";

      drawCircle(state.player.x, state.player.y, PLAYER_RADIUS, playerColor);
      drawCircle(
        state.player.x + 6,
        state.player.y - 6,
        4,
        "#ffffff",
        "#ffffff",
      );

      context.fillStyle = "#0f172a";
      context.font = "900 15px Pretendard, sans-serif";
      context.fillText("WASD", 16, 28);
      context.fillText(`SCORE ${state.score}`, 16, 50);
      context.fillText(`${activeWeapon.name} LV.${activeLevel}`, 16, 72);

      context.fillStyle = "#e2e8f0";
      context.fillRect(WORLD_SIZE - 124, 18, 104, 13);
      context.fillStyle = state.player.hp < 35 ? "#ef4444" : "#22c55e";
      context.fillRect(WORLD_SIZE - 124, 18, 104 * (state.player.hp / 100), 13);
      context.strokeStyle = "#0f172a";
      context.lineWidth = 3;
      context.strokeRect(WORLD_SIZE - 124, 18, 104, 13);

      if (state.damageFlashTimer > 0) {
        context.fillStyle = `rgba(239, 68, 68, ${Math.min(state.damageFlashTimer * 2.3, 0.3)})`;
        context.fillRect(0, 0, WORLD_SIZE, WORLD_SIZE);
        context.strokeStyle = "#ef4444";
        context.lineWidth = 10;
        context.strokeRect(5, 5, WORLD_SIZE - 10, WORLD_SIZE - 10);
      }

      context.restore();
    };

    resizeCanvas();

    if (!isStarted) {
      drawGame();
      window.addEventListener("resize", resizeCanvas);

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    const getNearestEnemy = () => {
      const { player, enemies } = stateRef.current;

      if (enemies.length === 0) {
        return null;
      }

      let target = enemies[0];
      let targetDistance = distance(player, target);

      enemies.forEach((enemy) => {
        const nextDistance = distance(player, enemy);

        if (nextDistance < targetDistance) {
          target = enemy;
          targetDistance = nextDistance;
        }
      });

      return target;
    };

    const addBullet = ({
      angle,
      color,
      radius = 5,
      speed = 330,
      life = 0.82,
      kind = "normal",
      damage = 1,
    }) => {
      const state = stateRef.current;

      if (state.bullets.length >= BULLET_LIMIT) {
        return;
      }

      state.bullets.push({
        x: state.player.x,
        y: state.player.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        color,
        life,
        kind,
        damage,
      });
    };

    const fireWeapon = () => {
      const state = stateRef.current;
      const target = getNearestEnemy();

      if (!target) {
        return;
      }

      const weapon = state.activeWeapon ? weaponMap[state.activeWeapon] : null;
      const level = state.weaponLevels[state.activeWeapon] || 1;
      const angle = Math.atan2(
        target.y - state.player.y,
        target.x - state.player.x,
      );

      if (!weapon) {
        addBullet({
          angle,
          color: "#94a3b8",
          radius: 3,
          speed: 285,
          life: 0.62,
          damage: 0.55,
        });

        return;
      }

      if (state.activeWeapon === "shotgun") {
        const pelletCount = Math.min(3 + level, 8);

        for (let index = 0; index < pelletCount; index += 1) {
          const offset = (index - (pelletCount - 1) / 2) * 0.13;
          addBullet({
            angle: angle + offset,
            color: weapon.color,
            radius: 4,
            speed: 315,
            life: 0.48,
          });
        }

        return;
      }

      const finishEnemy = (enemy, score) => {
        const enemyIndex = state.enemies.indexOf(enemy);

        if (enemyIndex < 0) {
          return;
        }

        dropItemFromEnemy(enemy, enemy.isBoss);
        state.enemies.splice(enemyIndex, 1);
        addScore(score);

        if (enemy.isFinalBoss) {
          state.defeatedFinalBosses += 1;

          if (state.defeatedFinalBosses >= BOSS_STAGES.length) {
            clearGame();
          }
        }
      };

      if (state.activeWeapon === "laser") {
        const beamCount = Math.min(1 + Math.floor(level / 2), 3);
        const targets = [...state.enemies]
          .sort((a, b) => distance(state.player, a) - distance(state.player, b))
          .slice(0, beamCount);

        targets.forEach((enemy) => {
          state.beams.push({
            x1: state.player.x,
            y1: state.player.y,
            x2: enemy.x,
            y2: enemy.y,
            color: weapon.color,
            life: 0.09,
          });

          enemy.hp -= 3 + level;

          if (enemy.hp > 0) {
            return;
          }

          finishEnemy(enemy, enemy.isBoss ? 300 : 10);
        });

        return;
      }

      if (state.activeWeapon === "fire") {
        const flameCount = Math.min(5 + level * 2, 13);

        for (let index = 0; index < flameCount; index += 1) {
          const offset = (index - (flameCount - 1) / 2) * 0.13;
          addBullet({
            angle: angle + offset + (Math.random() - 0.5) * 0.08,
            color: weapon.color,
            radius: 7,
            speed: 285 + level * 12,
            life: 0.52,
            kind: "fire",
            damage: 3,
          });
        }

        return;
      }

      addBullet({
        angle,
        color: weapon.color,
        radius: 5,
        speed: 360 + level * 10,
        life: 0.9,
        damage: 1,
      });
    };

    const getShotDelay = () => {
      const state = stateRef.current;
      const level = state.weaponLevels[state.activeWeapon] || 1;

      if (state.activeWeapon === "shotgun")
        return Math.max(0.58, 0.9 - level * 0.04);
      if (state.activeWeapon === "laser")
        return Math.max(0.46, 0.72 - level * 0.035);
      if (state.activeWeapon === "fire")
        return Math.max(0.24, 0.46 - level * 0.035);
      if (!state.activeWeapon) return 0.72;
      return Math.max(0.28, 0.48 - level * 0.028);
    };

    const addScore = (score) => {
      const state = stateRef.current;
      state.score = Math.min(state.score + score, FINAL_BOSS_SCORE);
    };

    const dropItemFromEnemy = (enemy, forceWeapon = false) => {
      const state = stateRef.current;

      if (state.items.length >= ITEM_LIMIT) {
        return;
      }

      const dropChance = enemy.isBoss ? 1 : 0.26;

      if (!forceWeapon && Math.random() > dropChance) {
        return;
      }

      const shouldSpawnWeapon =
        forceWeapon || Math.random() < (state.player.hp < 58 ? 0.42 : 0.7);
      const dropPosition = {
        x: clamp(enemy.x, 32, WORLD_SIZE - 32),
        y: clamp(enemy.y, 32, WORLD_SIZE - 32),
      };

      state.items.push(
        shouldSpawnWeapon
          ? createWeaponItem(state.gameTime, dropPosition)
          : createHealItem(state.gameTime, dropPosition),
      );
    };

    const finishGame = (result = "") => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      keysRef.current.clear();
      setGameResult(result);
      setIsStarted(false);
    };

    const clearGame = () => {
      stateRef.current.isCleared = true;
      localStorage.setItem(getClearStorageKey(selectedMode), "clear");
      setClearedModes((prev) => ({
        ...prev,
        [selectedMode]: true,
      }));
      finishGame("CLEAR");
    };

    const updateGame = (time) => {
      const state = stateRef.current;
      const delta = Math.min((time - state.lastTime) / 1000, 0.033);
      const activeKeys = keysRef.current;
      let xVector = 0;
      let yVector = 0;

      if (activeKeys.has("w")) yVector -= 1;
      if (activeKeys.has("s")) yVector += 1;
      if (activeKeys.has("a")) xVector -= 1;
      if (activeKeys.has("d")) xVector += 1;

      if (xVector !== 0 && yVector !== 0) {
        xVector *= Math.SQRT1_2;
        yVector *= Math.SQRT1_2;
      }

      state.player.x = clamp(
        state.player.x + xVector * PLAYER_SPEED * delta,
        PLAYER_RADIUS,
        WORLD_SIZE - PLAYER_RADIUS,
      );
      state.player.y = clamp(
        state.player.y + yVector * PLAYER_SPEED * delta,
        PLAYER_RADIUS,
        WORLD_SIZE - PLAYER_RADIUS,
      );

      state.gameTime += delta;
      state.enemyTimer += delta;
      state.shotTimer += delta;
      state.hitTimer = Math.max(state.hitTimer - delta, 0);
      state.damageFlashTimer = Math.max(state.damageFlashTimer - delta, 0);

      const difficulty = Math.min(
        1 + state.gameTime / 55 + state.score / 520,
        2.45,
      );
      const enemySpawnDelay = Math.max(0.38, 1.1 - state.gameTime * 0.013);

      BOSS_STAGES.forEach((stage) => {
        if (
          state.score < stage.score ||
          state.spawnedBossIds.includes(stage.id)
        ) {
          return;
        }

        state.enemies.push(createBoss(stage, modeConfig));
        state.spawnedBossIds.push(stage.id);
        onBossEnter?.(stage.id);
      });

      if (
        state.score >= FINAL_BOSS_SCORE &&
        !state.spawnedBossIds.includes("final-boss")
      ) {
        BOSS_STAGES.forEach((stage) => {
          state.enemies.push({
            ...createBoss(stage, modeConfig, 2),
            isFinalBoss: true,
          });
          onBossEnter?.(stage.id);
        });
        state.spawnedBossIds.push("final-boss");
      }

      if (
        state.enemyTimer > enemySpawnDelay &&
        state.enemies.length < ENEMY_LIMIT
      ) {
        state.enemies.push(createEnemy(modeConfig));
        state.enemyTimer = 0;
      }

      if (
        !state.guaranteedWeaponSpawned &&
        state.gameTime > 5 &&
        !state.items.some((item) => item.type === "weapon")
      ) {
        dropItemFromEnemy(state.enemies[0] || state.player, true);
        state.guaranteedWeaponSpawned = true;
      }

      if (state.shotTimer > getShotDelay()) {
        fireWeapon();
        state.shotTimer = 0;

        if (state.isCleared) {
          drawGame();
          return;
        }
      }

      state.items = state.items.filter(
        (item) => state.gameTime - item.createdAt <= ITEM_LIFETIME,
      );

      state.items.forEach((item) => {
        item.pulse += delta * 5;
      });

      state.beams = state.beams
        .map((beam) => ({
          ...beam,
          life: beam.life - delta,
        }))
        .filter((beam) => beam.life > 0);

      state.enemies.forEach((enemy) => {
        const angle = Math.atan2(
          state.player.y - enemy.y,
          state.player.x - enemy.x,
        );
        const speedMultiplier = enemy.isBoss ? 0.65 : difficulty;

        enemy.wobble += delta * 4;
        enemy.x +=
          Math.cos(angle) * enemy.speed * speedMultiplier * delta +
          Math.sin(enemy.wobble) * 5 * delta;
        enemy.y +=
          Math.sin(angle) * enemy.speed * speedMultiplier * delta +
          Math.cos(enemy.wobble) * 5 * delta;
      });

      state.bullets = state.bullets
        .map((bullet) => ({
          ...bullet,
          x: bullet.x + bullet.vx * delta,
          y: bullet.y + bullet.vy * delta,
          life: bullet.life - delta,
        }))
        .filter(
          (bullet) =>
            bullet.life > 0 &&
            bullet.x > -20 &&
            bullet.x < WORLD_SIZE + 20 &&
            bullet.y > -20 &&
            bullet.y < WORLD_SIZE + 20,
        );

      state.bullets = state.bullets.filter((bullet) => {
        const hitIndex = state.enemies.findIndex(
          (enemy) => distance(bullet, enemy) < enemy.radius + bullet.radius,
        );

        if (hitIndex < 0) {
          return true;
        }

        const hitEnemy = state.enemies[hitIndex];

        hitEnemy.hp -= bullet.damage;

        if (hitEnemy.hp > 0) {
          return false;
        }

        if (hitEnemy.isBoss) {
          dropItemFromEnemy(hitEnemy, true);
          state.enemies.splice(hitIndex, 1);
          addScore(300);

          if (hitEnemy.isFinalBoss) {
            state.defeatedFinalBosses += 1;

            if (state.defeatedFinalBosses >= BOSS_STAGES.length) {
              clearGame();
            }
          }

          return false;
        }

        dropItemFromEnemy(hitEnemy);
        state.enemies.splice(hitIndex, 1);
        addScore(10);
        return false;
      });

      if (state.isCleared) {
        drawGame();
        return;
      }

      state.items = state.items.filter((item) => {
        if (distance(state.player, item) > PLAYER_RADIUS + item.radius + 5) {
          return true;
        }

        if (item.type === "heal") {
          if (state.player.hp >= 100) {
            addScore(30);
            return false;
          }

          state.player.hp = Math.min(state.player.hp + 18, 100);
          return false;
        }

        state.activeWeapon = item.weaponId;
        state.weaponLevels[item.weaponId] = Math.min(
          (state.weaponLevels[item.weaponId] || 0) + 1,
          10,
        );
        addScore(5);
        return false;
      });

      if (state.hitTimer <= 0) {
        const enemyHit = state.enemies.some(
          (enemy) =>
            distance(state.player, enemy) < PLAYER_RADIUS + enemy.radius,
        );

        if (enemyHit) {
          state.player.hp -= 14;
          state.hitTimer = 0.5;
          state.damageFlashTimer = 0.22;
        }
      }

      if (state.player.hp <= 0) {
        drawGame();
        finishGame("");
        return;
      }

      state.lastTime = time;
      drawGame();
      frameRef.current = requestAnimationFrame(updateGame);
    };

    const handleKeyDown = (event) => {
      const key = MOVE_KEY_MAP[event.code];

      if (!key) {
        return;
      }

      event.preventDefault();
      keysRef.current.add(key);
    };

    const handleKeyUp = (event) => {
      const key = MOVE_KEY_MAP[event.code];

      if (!key) {
        return;
      }

      event.preventDefault();
      keysRef.current.delete(key);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
        return;
      }

      if (!frameRef.current) {
        stateRef.current.lastTime = performance.now();
        frameRef.current = requestAnimationFrame(updateGame);
      }
    };

    resetGame();
    drawGame();
    frameRef.current = requestAnimationFrame(updateGame);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isStarted, onBossEnter, selectedMode]);

  const isDifficultyUnlocked = (difficultyId) => {
    if (difficultyId === "normal") return true;
    if (difficultyId === "hard") return Boolean(clearedModes.normal);
    if (difficultyId === "hell") return Boolean(clearedModes.hard);
    return false;
  };

  const selectedDifficulty = DIFFICULTIES.find(
    (difficulty) => difficulty.id === selectedMode,
  );
  const canStart = isDifficultyUnlocked(selectedMode);

  return (
    <div className="mb-10 relative aspect-square w-full overflow-hidden border-[3px] border-slate-950 bg-white shadow-[8px_8px_0_#0f172a]">
      <canvas
        ref={canvasRef}
        aria-label="WASD로 캐릭터를 움직이는 미니게임"
        className="block h-full w-full"
      />
      {!isStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/75 px-5">
          <div className="flex w-full max-w-[280px] flex-col items-center gap-3">
            {gameResult && (
              <div className="border-[3px] border-slate-950 bg-[#bef264] px-4 py-2 text-lg font-black text-slate-950 shadow-[5px_5px_0_#0f172a]">
                {gameResult}
              </div>
            )}
            <button
              type="button"
              disabled={!canStart}
              className="border-[3px] border-slate-950 bg-[#facc15] px-7 py-4 text-xl font-black text-slate-950 shadow-[7px_7px_0_#0f172a] transition-transform hover:-translate-x-1 hover:-translate-y-1 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-[4px_4px_0_#94a3b8] disabled:hover:translate-x-0 disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
              onClick={() => {
                if (!canStart) {
                  return;
                }

                onGameReset?.();
                setGameResult("");
                setIsStarted(true);
              }}
            >
              START
            </button>
            <div className="flex w-full gap-2">
              {DIFFICULTIES.map((difficulty) => {
                const isUnlocked = isDifficultyUnlocked(difficulty.id);
                const isSelected = selectedMode === difficulty.id;

                return (
                  <button
                    key={difficulty.id}
                    type="button"
                    disabled={!isUnlocked}
                    className={[
                      "min-h-10 flex-1 border-2 border-slate-950 px-2 text-xs font-black uppercase transition",
                      isSelected
                        ? "bg-slate-950 text-white"
                        : "bg-white text-slate-950",
                      !isUnlocked
                        ? "cursor-not-allowed opacity-45"
                        : "hover:bg-[#facc15]",
                    ].join(" ")}
                    onClick={() => {
                      if (isUnlocked) {
                        setSelectedMode(difficulty.id);
                      }
                    }}
                  >
                    {difficulty.label}
                  </button>
                );
              })}
            </div>
            {/* <p className="text-center text-xs font-black uppercase tracking-[0.12em] text-slate-600">
              {selectedDifficulty.label} HP x{selectedDifficulty.healthMultiplier} SPD x{selectedDifficulty.speedMultiplier}
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMiniGame;
