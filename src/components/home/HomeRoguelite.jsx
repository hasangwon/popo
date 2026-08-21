import { useCallback, useEffect, useRef, useState } from "react";
import {
  isMuted,
  playSound,
  setMuted,
  unlockAudio,
} from "../../lib/gameAudio";

const WORLD_SIZE = 520;
const PLAYER_RADIUS = 14;
const ENEMY_LIMIT = 46;
const PARTICLE_LIMIT = 140;
const GEM_LIMIT = 90;
const JOYSTICK_RADIUS = 46;
const BEST_RECORD_KEY = "debug-survivor-best";
const RUN_END_TIME = 999;

const MOVE_KEY_MAP = {
  KeyW: "up",
  ArrowUp: "up",
  KeyS: "down",
  ArrowDown: "down",
  KeyA: "left",
  ArrowLeft: "left",
  KeyD: "right",
  ArrowRight: "right",
};

// 배경 도형과 1:1 대응하는 보스 스테이지
const BOSS_STAGES = [
  { time: 45, shapeId: "pink", color: "#ff4d6d", shape: "rounded", hp: 320, name: "Memory Leak" },
  { time: 95, shapeId: "sky", color: "#22d3ee", shape: "circle", hp: 620, name: "Infinite Loop" },
  { time: 145, shapeId: "yellow", color: "#facc15", shape: "square", hp: 980, name: "Race Condition" },
  { time: 200, shapeId: "lime", color: "#bef264", shape: "rounded", hp: 1500, name: "Legacy Code", isFinal: true },
];

const RARITIES = {
  common: { label: "COMMON", color: "#64748b", weight: 62 },
  rare: { label: "RARE", color: "#0ea5e9", weight: 28 },
  epic: { label: "EPIC", color: "#a855f7", weight: 10 },
};

const UPGRADES = [
  {
    id: "refactor",
    name: "Refactoring",
    icon: "🔨",
    desc: "공격력 +25%",
    rarity: "common",
    apply: (stats) => {
      stats.damage *= 1.25;
    },
  },
  {
    id: "cache-hit",
    name: "Cache Hit",
    icon: "⚡",
    desc: "공격 속도 +16%",
    rarity: "common",
    maxStacks: 6,
    apply: (stats) => {
      stats.fireDelay *= 0.84;
    },
  },
  {
    id: "optimizer",
    name: "Optimizer",
    icon: "👟",
    desc: "이동 속도 +10%",
    rarity: "common",
    maxStacks: 5,
    apply: (stats) => {
      stats.moveSpeed *= 1.1;
    },
  },
  {
    id: "garbage-collector",
    name: "Garbage Collector",
    icon: "🧲",
    desc: "커밋 자석 범위 +45%",
    rarity: "common",
    maxStacks: 4,
    apply: (stats) => {
      stats.magnet *= 1.45;
    },
  },
  {
    id: "scale-up",
    name: "Scale Up",
    icon: "❤️",
    desc: "최대 체력 +25, 즉시 25 회복",
    rarity: "common",
    apply: (stats, player) => {
      stats.maxHp += 25;
      player.hp = Math.min(player.hp + 25, stats.maxHp);
    },
  },
  {
    id: "hotfix",
    name: "Hotfix",
    icon: "🩹",
    desc: "체력 50% 즉시 회복",
    rarity: "common",
    onlyWhenHurt: true,
    apply: (stats, player) => {
      player.hp = Math.min(player.hp + stats.maxHp * 0.5, stats.maxHp);
    },
  },
  {
    id: "multithread",
    name: "Multithread",
    icon: "🔱",
    desc: "투사체 +1",
    rarity: "rare",
    maxStacks: 3,
    apply: (stats) => {
      stats.projectiles += 1;
    },
  },
  {
    id: "deep-query",
    name: "Piercing Query",
    icon: "🎯",
    desc: "투사체 관통 +1",
    rarity: "rare",
    maxStacks: 3,
    apply: (stats) => {
      stats.pierce += 1;
    },
  },
  {
    id: "critical-patch",
    name: "Critical Patch",
    icon: "💥",
    desc: "치명타 확률 +12% (2.2배 피해)",
    rarity: "rare",
    maxStacks: 4,
    apply: (stats) => {
      stats.critChance += 0.12;
    },
  },
  {
    id: "auto-healer",
    name: "Auto Healer",
    icon: "💚",
    desc: "초당 체력 재생 +1.2",
    rarity: "rare",
    maxStacks: 3,
    apply: (stats) => {
      stats.regen += 1.2;
    },
  },
  {
    id: "satellite",
    name: "Satellite",
    icon: "🛰️",
    desc: "주위를 도는 방어 위성 +1",
    rarity: "epic",
    maxStacks: 3,
    apply: (stats) => {
      stats.orbitCount += 1;
    },
  },
  {
    id: "overclock",
    name: "Overclock",
    icon: "🚀",
    desc: "공격력 +15%, 공격 속도 +10%",
    rarity: "epic",
    apply: (stats) => {
      stats.damage *= 1.15;
      stats.fireDelay *= 0.9;
    },
  },
];

const ENEMY_TYPES = {
  bug: { radius: 12, speed: 62, hp: 18, dmg: 10, xp: 2, color: "#fb7185" },
  fastbug: { radius: 9, speed: 118, hp: 10, dmg: 7, xp: 2, color: "#fb923c" },
  tankbug: { radius: 19, speed: 40, hp: 70, dmg: 18, xp: 6, color: "#818cf8" },
  shooter: { radius: 12, speed: 55, hp: 26, dmg: 8, xp: 5, color: "#2dd4bf" },
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

const createInitialStats = () => ({
  damage: 11,
  fireDelay: 0.52,
  projectiles: 1,
  projSpeed: 350,
  pierce: 0,
  critChance: 0.05,
  moveSpeed: 215,
  magnet: 60,
  maxHp: 100,
  regen: 0,
  orbitCount: 0,
});

const createEdgePosition = (margin = 16) => {
  const side = Math.floor(Math.random() * 4);
  const point = Math.random() * WORLD_SIZE;

  if (side === 0) return { x: point, y: -margin };
  if (side === 1) return { x: WORLD_SIZE + margin, y: point };
  if (side === 2) return { x: point, y: WORLD_SIZE + margin };
  return { x: -margin, y: point };
};

const pickEnemyType = (gameTime) => {
  const pool = ["bug", "bug"];

  if (gameTime > 25) pool.push("fastbug");
  if (gameTime > 55) pool.push("tankbug", "fastbug");
  if (gameTime > 85) pool.push("shooter");
  if (gameTime > 130) pool.push("tankbug", "shooter");

  return pool[Math.floor(Math.random() * pool.length)];
};

const createEnemy = (gameTime, { elite = false } = {}) => {
  const typeId = pickEnemyType(gameTime);
  const base = ENEMY_TYPES[typeId];
  const scale = 1 + gameTime / 110;
  const eliteScale = elite ? 5 : 1;
  const hp = base.hp * scale * eliteScale;

  return {
    ...createEdgePosition(),
    typeId,
    radius: base.radius * (elite ? 1.6 : 1),
    speed: base.speed * (1 + gameTime / 400) * (elite ? 0.85 : 1),
    hp,
    maxHp: hp,
    dmg: base.dmg * (elite ? 1.6 : 1),
    xp: elite ? 14 : base.xp,
    color: base.color,
    elite,
    wobble: Math.random() * Math.PI * 2,
    hitFlash: 0,
    shotTimer: 1.4 + Math.random(),
    knockX: 0,
    knockY: 0,
    moveAngle: 0,
    lastOrbitHit: 0,
  };
};

const createBoss = (stage) => ({
  ...createEdgePosition(40),
  typeId: "boss",
  radius: 34,
  speed: 40,
  hp: stage.hp,
  maxHp: stage.hp,
  dmg: 25,
  xp: 40,
  color: stage.color,
  shape: stage.shape,
  name: stage.name,
  isBoss: true,
  isFinal: Boolean(stage.isFinal),
  shapeId: stage.shapeId,
  wobble: Math.random() * Math.PI * 2,
  hitFlash: 0,
  burstTimer: 3,
  knockX: 0,
  knockY: 0,
  moveAngle: 0,
  lastOrbitHit: 0,
});

const xpForLevel = (level) => 10 + (level - 1) * 7;

const readBestRecord = () => {
  try {
    const raw = localStorage.getItem(BEST_RECORD_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const formatTime = (seconds) => {
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  return `${String(minutes).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
};

const rollUpgradeChoices = (stats, player, acquired) => {
  const available = UPGRADES.filter((upgrade) => {
    if (upgrade.onlyWhenHurt && player.hp > stats.maxHp * 0.65) return false;
    if (
      upgrade.maxStacks &&
      (acquired[upgrade.id] || 0) >= upgrade.maxStacks
    ) {
      return false;
    }
    return true;
  });

  const choices = [];
  const pool = [...available];

  while (choices.length < 3 && pool.length > 0) {
    const totalWeight = pool.reduce(
      (sum, upgrade) => sum + RARITIES[upgrade.rarity].weight,
      0,
    );
    let roll = Math.random() * totalWeight;
    let pickedIndex = 0;

    for (let index = 0; index < pool.length; index += 1) {
      roll -= RARITIES[pool[index].rarity].weight;
      if (roll <= 0) {
        pickedIndex = index;
        break;
      }
    }

    choices.push(pool[pickedIndex]);
    pool.splice(pickedIndex, 1);
  }

  return choices;
};

const createRunState = () => ({
  player: {
    x: WORLD_SIZE / 2,
    y: WORLD_SIZE / 2,
    hp: 100,
    iframe: 0,
    aimAngle: -Math.PI / 2,
  },
  stats: createInitialStats(),
  acquired: {},
  enemies: [],
  bullets: [],
  enemyBullets: [],
  gems: [],
  particles: [],
  damageTexts: [],
  orbitAngle: 0,
  level: 1,
  xp: 0,
  kills: 0,
  gameTime: 0,
  lastTime: 0,
  spawnTimer: 0,
  eliteTimer: 18,
  shotTimer: 0,
  shake: 0,
  hitStop: 0,
  combo: 0,
  comboTimer: 0,
  trailTimer: 0,
  spawnedBossIds: [],
  bossAlertTimer: 0,
  bossAlertName: "",
  finalBossDefeated: false,
});

const HomeRoguelite = ({ isDark = false, onBossEnter, onGameReset }) => {
  const canvasRef = useRef(null);
  const joystickKnobRef = useRef(null);
  const frameRef = useRef(null);
  const keysRef = useRef(new Set());
  const touchVectorRef = useRef({ x: 0, y: 0 });
  const activePointerIdRef = useRef(null);
  const runRef = useRef(createRunState());
  const screenRef = useRef("idle");
  const isDarkRef = useRef(isDark);
  const [screen, setScreenState] = useState("idle");
  const [levelChoices, setLevelChoices] = useState([]);
  const [bestRecord, setBestRecord] = useState(readBestRecord);
  const [lastResult, setLastResult] = useState(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [muted, setMutedState] = useState(isMuted);

  const toggleMute = useCallback(() => {
    setMutedState((prev) => {
      setMuted(!prev);
      return !prev;
    });
  }, []);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  const setScreen = useCallback((next) => {
    screenRef.current = next;
    setScreenState(next);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)");
    const sync = () => setIsCoarsePointer(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const finishRun = useCallback(
    (outcome) => {
      const run = runRef.current;
      const result = {
        outcome,
        time: run.gameTime,
        level: run.level,
        kills: run.kills,
      };

      setLastResult(result);

      const previous = readBestRecord();
      if (!previous || run.gameTime > previous.time) {
        const nextBest = {
          time: run.gameTime,
          level: run.level,
          kills: run.kills,
        };

        try {
          localStorage.setItem(BEST_RECORD_KEY, JSON.stringify(nextBest));
        } catch {
          /* noop */
        }
        setBestRecord(nextBest);
      }

      playSound(outcome === "victory" ? "victory" : "over");
      setScreen(outcome === "victory" ? "victory" : "over");
    },
    [setScreen],
  );

  const startRun = useCallback(() => {
    unlockAudio();
    runRef.current = createRunState();
    runRef.current.lastTime = performance.now();
    onGameReset?.();
    setLevelChoices([]);
    setScreen("running");
  }, [onGameReset, setScreen]);

  const chooseUpgrade = useCallback(
    (upgrade) => {
      const run = runRef.current;

      run.acquired[upgrade.id] = (run.acquired[upgrade.id] || 0) + 1;
      upgrade.apply(run.stats, run.player);
      setLevelChoices([]);
      run.lastTime = performance.now();
      setScreen("running");
    },
    [setScreen],
  );

  const togglePause = useCallback(() => {
    if (screenRef.current === "running") {
      setScreen("paused");
      return;
    }

    if (screenRef.current === "paused") {
      runRef.current.lastTime = performance.now();
      setScreen("running");
    }
  }, [setScreen]);

  // ------- 메인 루프 -------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return undefined;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnParticles = (x, y, color, count, speed = 90) => {
      const run = runRef.current;

      for (let index = 0; index < count; index += 1) {
        if (run.particles.length >= PARTICLE_LIMIT) break;

        const angle = Math.random() * Math.PI * 2;
        const velocity = speed * (0.4 + Math.random() * 0.8);

        run.particles.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 0.35 + Math.random() * 0.3,
          maxLife: 0.6,
          size: 2 + Math.random() * 3,
          color,
        });
      }
    };

    const spawnDamageText = (x, y, amount, isCrit) => {
      const run = runRef.current;

      if (run.damageTexts.length > 40) run.damageTexts.shift();

      run.damageTexts.push({
        x: x + (Math.random() - 0.5) * 14,
        y: y - 8,
        life: 0.7,
        text: String(Math.round(amount)),
        isCrit,
      });
    };

    const dropGem = (enemy) => {
      const run = runRef.current;

      if (run.gems.length >= GEM_LIMIT) {
        // 가장 오래된 잼에 가치 합산 (누락 방지)
        run.gems[0].value += enemy.xp;
        return;
      }

      run.gems.push({
        x: enemy.x,
        y: enemy.y,
        value: enemy.xp,
        radius: enemy.isBoss || enemy.elite ? 7 : 5,
        pulse: Math.random() * Math.PI * 2,
        vx: 0,
        vy: 0,
      });
    };

    const damageEnemy = (enemy, rawDamage, knockX = 0, knockY = 0) => {
      const run = runRef.current;
      const isCrit = Math.random() < run.stats.critChance;
      const amount = isCrit ? rawDamage * 2.2 : rawDamage;

      enemy.hp -= amount;
      enemy.hitFlash = 0.12;

      // 넉백 (보스는 거의 안 밀림)
      const knockScale = enemy.isBoss ? 8 : enemy.radius > 16 ? 40 : 95;
      enemy.knockX += knockX * knockScale;
      enemy.knockY += knockY * knockScale;

      spawnDamageText(enemy.x, enemy.y - enemy.radius, amount, isCrit);
      spawnParticles(enemy.x, enemy.y, enemy.color, 2, 60);
      playSound("hit");

      if (enemy.hp <= 0 && !enemy.dead) {
        enemy.dead = true;
        run.kills += 1;
        run.combo += 1;
        run.comboTimer = 1.7;
        dropGem(enemy);
        spawnParticles(enemy.x, enemy.y, enemy.color, enemy.isBoss ? 30 : 8, enemy.isBoss ? 200 : 120);
        playSound("kill");

        if (enemy.isBoss) {
          run.shake = Math.max(run.shake, 12);
          run.hitStop = Math.max(run.hitStop, 0.16);

          if (enemy.isFinal) {
            run.finalBossDefeated = true;
          }
        }
      }
    };

    const fireBullets = () => {
      const run = runRef.current;
      const { player, stats, enemies } = run;
      const alive = enemies.filter((enemy) => !enemy.dead);

      if (alive.length === 0) return false;

      let nearest = alive[0];
      let nearestDist = distance(player, nearest);

      alive.forEach((enemy) => {
        const dist = distance(player, enemy);
        if (dist < nearestDist) {
          nearest = enemy;
          nearestDist = dist;
        }
      });

      const baseAngle = Math.atan2(nearest.y - player.y, nearest.x - player.x);
      player.aimAngle = baseAngle;
      const spread = 0.16;

      for (let index = 0; index < stats.projectiles; index += 1) {
        const offset = (index - (stats.projectiles - 1) / 2) * spread;
        const angle = baseAngle + offset;

        const startX = player.x + Math.cos(angle) * (PLAYER_RADIUS + 4);
        const startY = player.y + Math.sin(angle) * (PLAYER_RADIUS + 4);

        run.bullets.push({
          x: startX,
          y: startY,
          prevX: startX,
          prevY: startY,
          vx: Math.cos(angle) * stats.projSpeed,
          vy: Math.sin(angle) * stats.projSpeed,
          radius: 4.5,
          pierceLeft: stats.pierce,
          hitIds: new Set(),
        });
      }

      // 머즐 플래시
      spawnParticles(
        player.x + Math.cos(baseAngle) * (PLAYER_RADIUS + 7),
        player.y + Math.sin(baseAngle) * (PLAYER_RADIUS + 7),
        "#fbbf24",
        2,
        45,
      );
      playSound("shoot");

      return true;
    };

    const hurtPlayer = (amount) => {
      const run = runRef.current;
      const { player } = run;

      if (player.iframe > 0) return;

      player.hp -= amount;
      player.iframe = 0.55;
      run.shake = Math.max(run.shake, 7);
      run.hitStop = Math.max(run.hitStop, 0.05);
      spawnParticles(player.x, player.y, "#ef4444", 8, 130);
      playSound("hurt");

      if (player.hp <= 0) {
        player.hp = 0;
        finishRun("over");
      }
    };

    const stepGame = (delta) => {
      const run = runRef.current;
      const { player, stats } = run;

      // 히트스톱: 큰 타격 순간 짧은 슬로모
      if (run.hitStop > 0) {
        run.hitStop = Math.max(run.hitStop - delta, 0);
        delta *= 0.12;
      }

      run.comboTimer = Math.max(run.comboTimer - delta, 0);
      if (run.comboTimer === 0) run.combo = 0;

      run.gameTime += delta;
      run.shotTimer += delta;
      run.spawnTimer += delta;
      run.eliteTimer -= delta;
      run.shake = Math.max(run.shake - delta * 26, 0);
      run.bossAlertTimer = Math.max(run.bossAlertTimer - delta, 0);
      player.iframe = Math.max(player.iframe - delta, 0);

      if (stats.regen > 0) {
        player.hp = Math.min(player.hp + stats.regen * delta, stats.maxHp);
      }

      // ---- 이동 ----
      let xVector = 0;
      let yVector = 0;
      const keys = keysRef.current;

      if (keys.has("up")) yVector -= 1;
      if (keys.has("down")) yVector += 1;
      if (keys.has("left")) xVector -= 1;
      if (keys.has("right")) xVector += 1;

      xVector += touchVectorRef.current.x;
      yVector += touchVectorRef.current.y;

      const magnitude = Math.hypot(xVector, yVector);
      if (magnitude > 1) {
        xVector /= magnitude;
        yVector /= magnitude;
      }

      player.x = clamp(
        player.x + xVector * stats.moveSpeed * delta,
        PLAYER_RADIUS,
        WORLD_SIZE - PLAYER_RADIUS,
      );
      player.y = clamp(
        player.y + yVector * stats.moveSpeed * delta,
        PLAYER_RADIUS,
        WORLD_SIZE - PLAYER_RADIUS,
      );

      // 이동 잔상
      run.trailTimer -= delta;
      if (magnitude > 0.15 && run.trailTimer <= 0) {
        run.trailTimer = 0.055;
        run.particles.push({
          x: player.x,
          y: player.y,
          vx: 0,
          vy: 0,
          life: 0.22,
          maxLife: 0.22,
          size: 7,
          color: isDarkRef.current ? "rgba(248,250,252,0.5)" : "rgba(17,24,39,0.35)",
        });
      }

      // ---- 스폰 ----
      const spawnDelay = Math.max(0.26, 0.92 - run.gameTime * 0.0034);

      if (run.spawnTimer >= spawnDelay) {
        run.spawnTimer = 0;

        const aliveCount = run.enemies.filter((enemy) => !enemy.dead).length;
        if (aliveCount < ENEMY_LIMIT) {
          run.enemies.push(createEnemy(run.gameTime));
        }
      }

      if (run.eliteTimer <= 0 && run.gameTime > 35) {
        run.eliteTimer = 24;
        run.enemies.push(createEnemy(run.gameTime, { elite: true }));
      }

      BOSS_STAGES.forEach((stage) => {
        if (
          run.gameTime < stage.time ||
          run.spawnedBossIds.includes(stage.shapeId)
        ) {
          return;
        }

        run.spawnedBossIds.push(stage.shapeId);
        run.enemies.push(createBoss(stage));
        run.bossAlertTimer = 2.2;
        run.bossAlertName = stage.name;
        playSound("boss");
        onBossEnter?.(stage.shapeId);
      });

      // ---- 공격 ----
      if (run.shotTimer >= stats.fireDelay) {
        if (fireBullets()) {
          run.shotTimer = 0;
        }
      }

      // ---- 플레이어 탄환 ----
      run.bullets = run.bullets.filter((bullet) => {
        bullet.prevX = bullet.x;
        bullet.prevY = bullet.y;
        bullet.x += bullet.vx * delta;
        bullet.y += bullet.vy * delta;

        if (
          bullet.x < -20 ||
          bullet.x > WORLD_SIZE + 20 ||
          bullet.y < -20 ||
          bullet.y > WORLD_SIZE + 20
        ) {
          return false;
        }

        for (const enemy of run.enemies) {
          if (enemy.dead || bullet.hitIds.has(enemy)) continue;

          if (distance(bullet, enemy) < bullet.radius + enemy.radius) {
            bullet.hitIds.add(enemy);

            const speed = Math.hypot(bullet.vx, bullet.vy) || 1;
            damageEnemy(
              enemy,
              stats.damage,
              bullet.vx / speed,
              bullet.vy / speed,
            );

            if (bullet.pierceLeft <= 0) {
              return false;
            }

            bullet.pierceLeft -= 1;
          }
        }

        return true;
      });

      // ---- 위성 ----
      if (stats.orbitCount > 0) {
        run.orbitAngle += delta * 2.7;
        const orbitRadius = 52;

        for (let index = 0; index < stats.orbitCount; index += 1) {
          const angle =
            run.orbitAngle + (index / stats.orbitCount) * Math.PI * 2;
          const orbX = player.x + Math.cos(angle) * orbitRadius;
          const orbY = player.y + Math.sin(angle) * orbitRadius;

          run.enemies.forEach((enemy) => {
            if (enemy.dead) return;
            if (run.gameTime - enemy.lastOrbitHit < 0.45) return;

            if (
              Math.hypot(orbX - enemy.x, orbY - enemy.y) <
              8 + enemy.radius
            ) {
              enemy.lastOrbitHit = run.gameTime;

              const pushDist = Math.hypot(enemy.x - player.x, enemy.y - player.y) || 1;
              damageEnemy(
                enemy,
                stats.damage * 0.8,
                (enemy.x - player.x) / pushDist,
                (enemy.y - player.y) / pushDist,
              );
            }
          });
        }
      }

      // ---- 적 ----
      run.enemies = run.enemies.filter((enemy) => !enemy.dead);
      run.enemies.forEach((enemy) => {
        enemy.hitFlash = Math.max(enemy.hitFlash - delta, 0);
        enemy.wobble += delta * 4;

        const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
        const dist = distance(player, enemy);

        // 넉백 적용 + 감쇠
        enemy.x += enemy.knockX * delta;
        enemy.y += enemy.knockY * delta;
        const knockDecay = Math.max(1 - delta * 9, 0);
        enemy.knockX *= knockDecay;
        enemy.knockY *= knockDecay;
        enemy.moveAngle = angle;

        if (enemy.typeId === "shooter") {
          // 거리 유지 + 사격
          const targetDist = 165;
          const direction = dist > targetDist ? 1 : -0.7;

          enemy.x += Math.cos(angle) * enemy.speed * direction * delta;
          enemy.y += Math.sin(angle) * enemy.speed * direction * delta;
          enemy.x = clamp(enemy.x, -30, WORLD_SIZE + 30);
          enemy.y = clamp(enemy.y, -30, WORLD_SIZE + 30);
          enemy.shotTimer -= delta;

          if (enemy.shotTimer <= 0 && dist < 260) {
            enemy.shotTimer = 2.6;
            run.enemyBullets.push({
              x: enemy.x,
              y: enemy.y,
              vx: Math.cos(angle) * 135,
              vy: Math.sin(angle) * 135,
              radius: 5,
              dmg: enemy.dmg,
              color: enemy.color,
            });
          }
        } else {
          const wobbleX = Math.sin(enemy.wobble) * 6;
          const wobbleY = Math.cos(enemy.wobble) * 6;

          enemy.x += (Math.cos(angle) * enemy.speed + wobbleX) * delta;
          enemy.y += (Math.sin(angle) * enemy.speed + wobbleY) * delta;
        }

        if (enemy.isBoss) {
          enemy.burstTimer -= delta;

          if (enemy.burstTimer <= 0) {
            enemy.burstTimer = enemy.isFinal ? 2.6 : 3.8;
            const bulletCount = enemy.isFinal ? 12 : 8;

            for (let index = 0; index < bulletCount; index += 1) {
              const burstAngle = (index / bulletCount) * Math.PI * 2;

              run.enemyBullets.push({
                x: enemy.x,
                y: enemy.y,
                vx: Math.cos(burstAngle) * 105,
                vy: Math.sin(burstAngle) * 105,
                radius: 5,
                dmg: 14,
                color: enemy.color,
              });
            }
          }
        }

        if (dist < enemy.radius + PLAYER_RADIUS) {
          hurtPlayer(enemy.dmg);
        }
      });

      // ---- 적 탄환 ----
      run.enemyBullets = run.enemyBullets.filter((bullet) => {
        bullet.x += bullet.vx * delta;
        bullet.y += bullet.vy * delta;

        if (
          bullet.x < -20 ||
          bullet.x > WORLD_SIZE + 20 ||
          bullet.y < -20 ||
          bullet.y > WORLD_SIZE + 20
        ) {
          return false;
        }

        if (distance(bullet, player) < bullet.radius + PLAYER_RADIUS) {
          hurtPlayer(bullet.dmg);
          return false;
        }

        return true;
      });

      // ---- 커밋(경험치 잼) ----
      run.gems = run.gems.filter((gem) => {
        gem.pulse += delta * 5;
        const dist = distance(gem, player);

        if (dist < stats.magnet) {
          const pull = 1 - dist / stats.magnet;
          const angle = Math.atan2(player.y - gem.y, player.x - gem.x);

          gem.vx = Math.cos(angle) * (140 + pull * 420);
          gem.vy = Math.sin(angle) * (140 + pull * 420);
        } else {
          gem.vx *= 0.9;
          gem.vy *= 0.9;
        }

        gem.x += gem.vx * delta;
        gem.y += gem.vy * delta;

        if (dist < PLAYER_RADIUS + gem.radius + 2) {
          run.xp += gem.value;
          spawnParticles(gem.x, gem.y, "#38bdf8", 3, 70);
          playSound("gem");
          return false;
        }

        return true;
      });

      // ---- 레벨업 ----
      if (run.xp >= xpForLevel(run.level)) {
        run.xp -= xpForLevel(run.level);
        run.level += 1;

        const choices = rollUpgradeChoices(run.stats, player, run.acquired);
        if (choices.length > 0) {
          playSound("levelup");
          setLevelChoices(choices);
          setScreen("levelup");
        }
      }

      // ---- 파티클/데미지 숫자 ----
      run.particles = run.particles.filter((particle) => {
        particle.life -= delta;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vx *= 0.94;
        particle.vy *= 0.94;
        return particle.life > 0;
      });

      run.damageTexts = run.damageTexts.filter((text) => {
        text.life -= delta;
        text.y -= 34 * delta;
        return text.life > 0;
      });

      if (run.finalBossDefeated) {
        finishRun("victory");
      }

      if (run.gameTime >= RUN_END_TIME) {
        finishRun("victory");
      }
    };

    const drawShape = (x, y, radius, shape, fill, ink, lineWidth = 3) => {
      context.fillStyle = fill;
      context.strokeStyle = ink;
      context.lineWidth = lineWidth;
      context.beginPath();

      if (shape === "square") {
        context.rect(x - radius, y - radius, radius * 2, radius * 2);
      } else if (shape === "rounded") {
        context.roundRect(x - radius, y - radius, radius * 2, radius * 2, radius * 0.45);
      } else {
        context.arc(x, y, radius, 0, Math.PI * 2);
      }

      context.fill();
      context.stroke();
    };

    const drawPolygon = (x, y, radius, sides, rotation, fill, ink) => {
      context.beginPath();

      for (let index = 0; index < sides; index += 1) {
        const angle = rotation + (index / sides) * Math.PI * 2;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        if (index === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }

      context.closePath();
      context.fillStyle = fill;
      context.fill();
      context.strokeStyle = ink;
      context.lineWidth = 2.5;
      context.stroke();
    };

    const drawGame = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = rect.width / WORLD_SIZE;
      const run = runRef.current;
      const { player, stats } = run;
      const dark = isDarkRef.current;

      const palette = dark
        ? {
            bgInner: "#16213e",
            bgOuter: "#0b1020",
            grid: "rgba(148, 163, 184, 0.09)",
            ink: "#0b1020",
            outline: "#e2e8f0",
            text: "#e2e8f0",
            subText: "#94a3b8",
            playerBody: "#f8fafc",
            playerEye: "#0f172a",
            barBg: "rgba(30, 41, 59, 0.9)",
            vignette: "rgba(2, 6, 23, 0.55)",
          }
        : {
            bgInner: "#fffdf4",
            bgOuter: "#f5ecd7",
            grid: "rgba(15, 23, 42, 0.1)",
            ink: "#0f172a",
            outline: "#0f172a",
            text: "#0f172a",
            subText: "#64748b",
            playerBody: "#111827",
            playerEye: "#ffffff",
            barBg: "#e2e8f0",
            vignette: "rgba(120, 90, 30, 0.16)",
          };

      context.save();

      // 방사형 그라데이션 배경
      const bgGradient = context.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        rect.width * 0.1,
        rect.width / 2,
        rect.height / 2,
        rect.width * 0.75,
      );
      bgGradient.addColorStop(0, palette.bgInner);
      bgGradient.addColorStop(1, palette.bgOuter);
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, rect.width, rect.height);

      context.scale(scale, scale);

      // 셰이크
      if (run.shake > 0) {
        context.translate(
          (Math.random() - 0.5) * run.shake,
          (Math.random() - 0.5) * run.shake,
        );
      }

      // 그리드
      context.strokeStyle = palette.grid;
      context.lineWidth = 1;
      for (let line = 40; line < WORLD_SIZE; line += 40) {
        context.beginPath();
        context.moveTo(line, 0);
        context.lineTo(line, WORLD_SIZE);
        context.moveTo(0, line);
        context.lineTo(WORLD_SIZE, line);
        context.stroke();
      }

      // 커밋 잼 — 2겹 다이아 (저렴한 글로우)
      run.gems.forEach((gem) => {
        const size = gem.radius + Math.sin(gem.pulse) * 1.2;

        context.save();
        context.translate(gem.x, gem.y);
        context.rotate(Math.PI / 4);
        context.fillStyle = "rgba(56, 189, 248, 0.25)";
        context.fillRect(-size * 1.9, -size * 1.9, size * 3.8, size * 3.8);
        context.fillStyle = "#38bdf8";
        context.strokeStyle = "#e0f2fe";
        context.lineWidth = 1.5;
        context.fillRect(-size, -size, size * 2, size * 2);
        context.strokeRect(-size * 0.45, -size * 0.45, size * 0.9, size * 0.9);
        context.restore();
      });

      // 위성 + 궤도 링
      if (stats.orbitCount > 0) {
        const orbitRadius = 52;

        context.beginPath();
        context.arc(player.x, player.y, orbitRadius, 0, Math.PI * 2);
        context.strokeStyle = "rgba(168, 85, 247, 0.3)";
        context.lineWidth = 1.5;
        context.stroke();

        context.save();
        context.shadowColor = "#a855f7";
        context.shadowBlur = 12;

        for (let index = 0; index < stats.orbitCount; index += 1) {
          const angle =
            run.orbitAngle + (index / stats.orbitCount) * Math.PI * 2;
          const orbX = player.x + Math.cos(angle) * orbitRadius;
          const orbY = player.y + Math.sin(angle) * orbitRadius;

          context.beginPath();
          context.arc(orbX, orbY, 8, 0, Math.PI * 2);
          context.fillStyle = "#c084fc";
          context.fill();
          context.strokeStyle = "#f3e8ff";
          context.lineWidth = 2;
          context.stroke();
        }

        context.restore();
      }

      // 플레이어 탄환 — 글로우 + 트레일
      context.save();
      context.shadowColor = "#f59e0b";
      context.shadowBlur = 9;
      run.bullets.forEach((bullet) => {
        const speed = Math.hypot(bullet.vx, bullet.vy) || 1;
        const tailX = bullet.x - (bullet.vx / speed) * 16;
        const tailY = bullet.y - (bullet.vy / speed) * 16;
        const trail = context.createLinearGradient(tailX, tailY, bullet.x, bullet.y);

        trail.addColorStop(0, "rgba(245, 158, 11, 0)");
        trail.addColorStop(1, "rgba(245, 158, 11, 0.85)");
        context.strokeStyle = trail;
        context.lineWidth = 4;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(tailX, tailY);
        context.lineTo(bullet.x, bullet.y);
        context.stroke();

        context.beginPath();
        context.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
        context.fillStyle = "#fde68a";
        context.fill();
      });
      context.restore();

      // 적 탄환 — 글로우
      context.save();
      run.enemyBullets.forEach((bullet) => {
        context.shadowColor = bullet.color;
        context.shadowBlur = 8;
        context.beginPath();
        context.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
        context.fillStyle = bullet.color;
        context.fill();
        context.shadowBlur = 0;
        context.beginPath();
        context.arc(bullet.x, bullet.y, bullet.radius * 0.45, 0, Math.PI * 2);
        context.fillStyle = "#ffffff";
        context.fill();
      });
      context.restore();

      // 적 — 타입별 실루엣
      run.enemies.forEach((enemy) => {
        const fill = enemy.hitFlash > 0 ? "#ffffff" : enemy.color;

        if (enemy.elite) {
          const pulse = 4 + Math.sin(enemy.wobble * 2) * 2;

          context.beginPath();
          context.arc(enemy.x, enemy.y, enemy.radius + pulse, 0, Math.PI * 2);
          context.strokeStyle = "rgba(245, 158, 11, 0.85)";
          context.lineWidth = 3;
          context.stroke();
        }

        if (enemy.isBoss) {
          const pulse = 1 + Math.sin(enemy.wobble * 1.6) * 0.04;

          context.save();
          context.shadowColor = enemy.color;
          context.shadowBlur = 22;
          drawShape(
            enemy.x,
            enemy.y,
            enemy.radius * pulse,
            enemy.shape,
            fill,
            palette.outline,
            3.5,
          );
          context.restore();

          // 보스 눈
          context.fillStyle = palette.ink;
          context.beginPath();
          context.arc(enemy.x - 10, enemy.y - 4, 4.5, 0, Math.PI * 2);
          context.arc(enemy.x + 10, enemy.y - 4, 4.5, 0, Math.PI * 2);
          context.fill();

          // HP 바 + 이름
          const barWidth = enemy.radius * 2.4;
          const barX = enemy.x - barWidth / 2;
          const barY = enemy.y - enemy.radius - 18;

          context.fillStyle = palette.barBg;
          context.fillRect(barX, barY, barWidth, 7);
          context.fillStyle = "#ef4444";
          context.fillRect(barX, barY, barWidth * (enemy.hp / enemy.maxHp), 7);
          context.strokeStyle = palette.outline;
          context.lineWidth = 2;
          context.strokeRect(barX, barY, barWidth, 7);
          context.font = "900 11px Pretendard, sans-serif";
          context.fillStyle = palette.text;
          context.textAlign = "center";
          context.fillText(enemy.name, enemy.x, barY - 5);
          context.textAlign = "start";
          return;
        }

        if (enemy.typeId === "fastbug") {
          // 진행 방향으로 회전하는 삼각형
          drawPolygon(
            enemy.x,
            enemy.y,
            enemy.radius + 2,
            3,
            enemy.moveAngle,
            fill,
            palette.outline,
          );
          return;
        }

        if (enemy.typeId === "tankbug") {
          drawPolygon(
            enemy.x,
            enemy.y,
            enemy.radius,
            6,
            enemy.wobble * 0.3,
            fill,
            palette.outline,
          );
          context.fillStyle = palette.ink;
          context.beginPath();
          context.arc(enemy.x - 5, enemy.y - 2, 2.5, 0, Math.PI * 2);
          context.arc(enemy.x + 5, enemy.y - 2, 2.5, 0, Math.PI * 2);
          context.fill();
          return;
        }

        if (enemy.typeId === "shooter") {
          // 사격 직전 조준선
          if (enemy.shotTimer < 0.55) {
            context.beginPath();
            context.moveTo(enemy.x, enemy.y);
            context.lineTo(player.x, player.y);
            context.strokeStyle = "rgba(45, 212, 191, 0.35)";
            context.lineWidth = 1.5;
            context.stroke();
          }

          drawPolygon(
            enemy.x,
            enemy.y,
            enemy.radius + 2,
            4,
            enemy.wobble * 0.4,
            fill,
            palette.outline,
          );
          context.fillStyle = palette.ink;
          context.beginPath();
          context.arc(enemy.x, enemy.y, 3, 0, Math.PI * 2);
          context.fill();
          return;
        }

        // 기본 버그: 원 + 더듬이 + 눈
        context.strokeStyle = palette.outline;
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(enemy.x - 4, enemy.y - enemy.radius + 2);
        context.lineTo(enemy.x - 8, enemy.y - enemy.radius - 5);
        context.moveTo(enemy.x + 4, enemy.y - enemy.radius + 2);
        context.lineTo(enemy.x + 8, enemy.y - enemy.radius - 5);
        context.stroke();

        drawShape(enemy.x, enemy.y, enemy.radius, "circle", fill, palette.outline, 2.5);

        const eyeOffset = enemy.radius * 0.35;

        context.fillStyle = palette.ink;
        context.beginPath();
        context.arc(enemy.x - eyeOffset, enemy.y - 2, 2, 0, Math.PI * 2);
        context.arc(enemy.x + eyeOffset, enemy.y - 2, 2, 0, Math.PI * 2);
        context.fill();
      });

      // 플레이어 (iframe 중 깜빡임)
      const blinking =
        player.iframe > 0 && Math.floor(player.iframe * 14) % 2 === 0;

      if (!blinking) {
        // 포신
        context.strokeStyle = palette.playerBody;
        context.lineWidth = 6;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(
          player.x + Math.cos(player.aimAngle) * 6,
          player.y + Math.sin(player.aimAngle) * 6,
        );
        context.lineTo(
          player.x + Math.cos(player.aimAngle) * (PLAYER_RADIUS + 7),
          player.y + Math.sin(player.aimAngle) * (PLAYER_RADIUS + 7),
        );
        context.stroke();

        context.beginPath();
        context.arc(player.x, player.y, PLAYER_RADIUS, 0, Math.PI * 2);
        context.fillStyle = palette.playerBody;
        context.fill();
        context.strokeStyle = dark ? "#0b1020" : "#fffdf4";
        context.lineWidth = 2.5;
        context.stroke();

        // 눈 (조준 방향)
        context.beginPath();
        context.arc(
          player.x + Math.cos(player.aimAngle) * 5,
          player.y + Math.sin(player.aimAngle) * 5,
          4,
          0,
          Math.PI * 2,
        );
        context.fillStyle = palette.playerEye;
        context.fill();
      }

      // 파티클
      run.particles.forEach((particle) => {
        context.globalAlpha = Math.max(particle.life / particle.maxLife, 0);
        context.fillStyle = particle.color;
        context.fillRect(
          particle.x - particle.size / 2,
          particle.y - particle.size / 2,
          particle.size,
          particle.size,
        );
      });
      context.globalAlpha = 1;

      // 데미지 숫자
      run.damageTexts.forEach((text) => {
        context.globalAlpha = Math.min(text.life / 0.35, 1);
        context.font = text.isCrit
          ? "900 17px Pretendard, sans-serif"
          : "800 13px Pretendard, sans-serif";
        context.fillStyle = text.isCrit ? "#f59e0b" : palette.text;
        context.textAlign = "center";
        context.fillText(text.text, text.x, text.y);
      });
      context.globalAlpha = 1;
      context.textAlign = "start";

      // 비네트 (가장자리 어둡게)
      const vignette = context.createRadialGradient(
        WORLD_SIZE / 2,
        WORLD_SIZE / 2,
        WORLD_SIZE * 0.42,
        WORLD_SIZE / 2,
        WORLD_SIZE / 2,
        WORLD_SIZE * 0.78,
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, palette.vignette);
      context.fillStyle = vignette;
      context.fillRect(0, 0, WORLD_SIZE, WORLD_SIZE);

      // ---- HUD ----
      // XP 바
      const xpRatio = clamp(run.xp / xpForLevel(run.level), 0, 1);
      const xpGradient = context.createLinearGradient(14, 0, WORLD_SIZE - 14, 0);

      xpGradient.addColorStop(0, "#38bdf8");
      xpGradient.addColorStop(1, "#818cf8");
      context.fillStyle = palette.barBg;
      context.fillRect(14, 12, WORLD_SIZE - 28, 9);
      context.fillStyle = xpGradient;
      context.fillRect(14, 12, (WORLD_SIZE - 28) * xpRatio, 9);
      context.strokeStyle = palette.outline;
      context.lineWidth = 2;
      context.strokeRect(14, 12, WORLD_SIZE - 28, 9);

      context.fillStyle = palette.text;
      context.font = "900 14px Pretendard, sans-serif";
      context.fillText(`Lv.${run.level}`, 14, 40);
      context.textAlign = "center";
      context.fillText(formatTime(run.gameTime), WORLD_SIZE / 2, 40);
      context.textAlign = "start";
      context.fillText(`🐛 ${run.kills}`, WORLD_SIZE - 74, 40);

      // 콤보
      if (run.combo >= 3 && screenRef.current === "running") {
        const comboAlpha = clamp(run.comboTimer / 0.8, 0, 1);

        context.globalAlpha = comboAlpha;
        context.textAlign = "center";
        context.font = "900 26px Pretendard, sans-serif";
        context.fillStyle = "#f59e0b";
        context.fillText(`${run.combo} COMBO!`, WORLD_SIZE / 2, 72);
        context.textAlign = "start";
        context.globalAlpha = 1;
      }

      // HP 바
      const hpRatio = clamp(player.hp / stats.maxHp, 0, 1);

      context.fillStyle = palette.barBg;
      context.fillRect(14, WORLD_SIZE - 26, 130, 12);
      context.fillStyle = hpRatio < 0.35 ? "#ef4444" : "#22c55e";
      context.fillRect(14, WORLD_SIZE - 26, 130 * hpRatio, 12);
      context.strokeStyle = palette.outline;
      context.lineWidth = 2;
      context.strokeRect(14, WORLD_SIZE - 26, 130, 12);
      context.font = "800 11px Pretendard, sans-serif";
      context.fillStyle = palette.subText;
      context.fillText(
        `${Math.ceil(player.hp)}/${Math.round(stats.maxHp)}`,
        150,
        WORLD_SIZE - 16,
      );

      // 저체력 경고 테두리
      if (hpRatio < 0.3 && screenRef.current === "running") {
        context.strokeStyle = `rgba(239, 68, 68, ${0.5 - hpRatio})`;
        context.lineWidth = 14;
        context.strokeRect(7, 7, WORLD_SIZE - 14, WORLD_SIZE - 14);
      }

      context.restore();
    };

    const loop = (time) => {
      frameRef.current = requestAnimationFrame(loop);
      const run = runRef.current;

      if (screenRef.current === "running") {
        const delta = Math.min((time - run.lastTime) / 1000, 0.033);
        run.lastTime = time;
        stepGame(delta);
      }

      drawGame();
    };

    const handleKeyDown = (event) => {
      const direction = MOVE_KEY_MAP[event.code];

      if (direction) {
        keysRef.current.add(direction);
        if (screenRef.current === "running") event.preventDefault();
        return;
      }

      if (event.code === "Escape" || event.code === "KeyP") {
        togglePause();
      }
    };

    const handleKeyUp = (event) => {
      const direction = MOVE_KEY_MAP[event.code];
      if (direction) keysRef.current.delete(direction);
    };

    const handleVisibility = () => {
      if (document.hidden && screenRef.current === "running") {
        setScreen("paused");
      }
    };

    resizeCanvas();
    frameRef.current = requestAnimationFrame(loop);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [finishRun, onBossEnter, setScreen, togglePause]);

  // 레벨업 단축키 (1/2/3)
  useEffect(() => {
    if (screen !== "levelup" || levelChoices.length === 0) return undefined;

    const handleKey = (event) => {
      const index = ["Digit1", "Digit2", "Digit3"].indexOf(event.code);

      if (index >= 0 && levelChoices[index]) {
        chooseUpgrade(levelChoices[index]);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [screen, levelChoices, chooseUpgrade]);

  // ------- 조이스틱 -------
  const updateJoystick = (event) => {
    const pad = event.currentTarget.getBoundingClientRect();
    const centerX = pad.left + pad.width / 2;
    const centerY = pad.top + pad.height / 2;
    let x = event.clientX - centerX;
    let y = event.clientY - centerY;
    const length = Math.hypot(x, y);

    if (length > JOYSTICK_RADIUS) {
      x = (x / length) * JOYSTICK_RADIUS;
      y = (y / length) * JOYSTICK_RADIUS;
    }

    touchVectorRef.current = {
      x: x / JOYSTICK_RADIUS,
      y: y / JOYSTICK_RADIUS,
    };

    if (joystickKnobRef.current) {
      joystickKnobRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  const resetJoystick = () => {
    activePointerIdRef.current = null;
    touchVectorRef.current = { x: 0, y: 0 };

    if (joystickKnobRef.current) {
      joystickKnobRef.current.style.transform = "translate3d(0, 0, 0)";
    }
  };

  const handleJoystickPointerDown = (event) => {
    activePointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateJoystick(event);
  };

  const handleJoystickPointerMove = (event) => {
    if (activePointerIdRef.current !== event.pointerId) return;
    updateJoystick(event);
  };

  const overlayClass =
    "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#fffdf4]/95 p-6 text-center dark:bg-slate-950/95";
  const primaryButtonClass =
    "border-[3px] border-slate-950 bg-[#facc15] px-8 py-3 text-lg font-black text-slate-950 shadow-[6px_6px_0_#0f172a] transition-transform hover:-translate-y-0.5 dark:border-slate-100 dark:shadow-[6px_6px_0_rgba(241,245,249,0.9)]";

  const statLine = (result) =>
    `TIME ${formatTime(result.time)} · Lv.${result.level} · 🐛 ${result.kills} KILLS`;

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden border-[3px] border-slate-950 bg-[#fffdf4] shadow-[8px_8px_0_#0f172a] dark:border-slate-100 dark:bg-slate-900 dark:shadow-[8px_8px_0_rgba(241,245,249,0.9)]">
        <canvas
          ref={canvasRef}
          className="block aspect-square w-full touch-none"
          aria-label="DEBUG SURVIVOR 미니게임"
        />

        {/* 보스 경고 배너 */}
        {screen === "running" && (
          <BossAlert runRef={runRef} />
        )}

        {/* 일시정지 / 음소거 버튼 */}
        {(screen === "running" || screen === "paused") && (
          <div className="absolute right-2.5 top-8 z-20 flex flex-col gap-2">
            <button
              type="button"
              onClick={togglePause}
              className="flex h-9 w-9 items-center justify-center border-2 border-slate-950 bg-white text-sm font-black text-slate-950 shadow-[3px_3px_0_#0f172a] dark:border-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:shadow-[3px_3px_0_rgba(241,245,249,0.8)]"
              aria-label={screen === "paused" ? "계속하기" : "일시정지"}
            >
              {screen === "paused" ? "▶" : "II"}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-9 w-9 items-center justify-center border-2 border-slate-950 bg-white text-sm shadow-[3px_3px_0_#0f172a] dark:border-slate-100 dark:bg-slate-800 dark:shadow-[3px_3px_0_rgba(241,245,249,0.8)]"
              aria-label={muted ? "소리 켜기" : "소리 끄기"}
            >
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
        )}

        {/* 시작 화면 */}
        {screen === "idle" && (
          <div className={overlayClass}>
            <p className="text-xs font-black tracking-[0.3em] text-rose-500">
              MINI GAME
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-slate-100 sm:text-4xl">
              DEBUG SURVIVOR
            </h2>
            <p className="max-w-[380px] text-sm font-bold leading-6 text-slate-600 dark:text-slate-400">
              몰려오는 버그 🐛 를 자동 공격으로 잡고, 커밋 💎 을 모아
              레벨업하세요. 레벨업마다 강화 3택 1! 배경의 도형들이 보스로
              쳐들어옵니다.
            </p>
            {bestRecord && (
              <p className="text-xs font-black text-slate-500 dark:text-slate-400">
                🏆 BEST — {statLine(bestRecord)}
              </p>
            )}
            <button type="button" onClick={startRun} className={primaryButtonClass}>
              START
            </button>
            <p className="text-[0.7rem] font-bold text-slate-400 dark:text-slate-500">
              {isCoarsePointer ? "조이스틱으로 이동" : "WASD / 방향키 이동 · P 일시정지"}
            </p>
          </div>
        )}

        {/* 레벨업 선택 */}
        {screen === "levelup" && levelChoices.length > 0 && (
          <div className={overlayClass}>
            <p className="text-sm font-black tracking-[0.25em] text-sky-500">
              LEVEL UP!
            </p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              강화를 선택하세요 {isCoarsePointer ? "" : "(1 / 2 / 3)"}
            </p>
            <div className="flex w-full max-w-[440px] flex-col gap-2.5 sm:flex-row">
              {levelChoices.map((upgrade, index) => {
                const rarity = RARITIES[upgrade.rarity];

                return (
                  <button
                    key={upgrade.id}
                    type="button"
                    onClick={() => chooseUpgrade(upgrade)}
                    className="card-pop-in flex flex-1 flex-col items-center gap-1.5 border-[3px] border-slate-950 bg-white p-4 text-center shadow-[5px_5px_0_#0f172a] transition-transform hover:-translate-y-1 dark:border-slate-100 dark:bg-slate-900 dark:shadow-[5px_5px_0_rgba(241,245,249,0.9)]"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    <span
                      className="text-[0.6rem] font-black tracking-[0.2em]"
                      style={{ color: rarity.color }}
                    >
                      {rarity.label}
                    </span>
                    <span className="text-3xl" aria-hidden>
                      {upgrade.icon}
                    </span>
                    <span className="text-base font-black text-slate-950 dark:text-slate-100">
                      {upgrade.name}
                    </span>
                    <span className="text-xs font-bold leading-5 text-slate-500 dark:text-slate-400">
                      {upgrade.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 일시정지 */}
        {screen === "paused" && (
          <div className={overlayClass}>
            <h2 className="text-2xl font-black tracking-wide text-slate-950 dark:text-slate-100">
              PAUSED
            </h2>
            <button type="button" onClick={togglePause} className={primaryButtonClass}>
              RESUME
            </button>
          </div>
        )}

        {/* 게임 오버 / 클리어 */}
        {(screen === "over" || screen === "victory") && lastResult && (
          <div className={overlayClass}>
            <h2 className="text-3xl font-black text-slate-950 dark:text-slate-100">
              {screen === "victory" ? "🎉 DEPLOY SUCCESS!" : "💀 GAME OVER"}
            </h2>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
              {screen === "victory"
                ? "Legacy Code를 물리치고 무사히 배포했습니다."
                : "버그에게 잡혔습니다…"}
            </p>
            <p className="border-2 border-slate-950 bg-white px-4 py-2 text-sm font-black text-slate-950 dark:border-slate-100 dark:bg-slate-900 dark:text-slate-100">
              {statLine(lastResult)}
            </p>
            {bestRecord && (
              <p className="text-xs font-black text-slate-500 dark:text-slate-400">
                🏆 BEST — {statLine(bestRecord)}
              </p>
            )}
            <button type="button" onClick={startRun} className={primaryButtonClass}>
              RETRY
            </button>
          </div>
        )}
      </div>

      {/* 모바일 조이스틱 */}
      {isCoarsePointer && screen === "running" && (
        <div className="mt-4 flex justify-center">
          <div
            className="relative flex h-28 w-28 touch-none items-center justify-center rounded-full border-[3px] border-slate-950 bg-white/80 shadow-[5px_5px_0_#0f172a] dark:border-slate-100 dark:bg-slate-800/80 dark:shadow-[5px_5px_0_rgba(241,245,249,0.8)]"
            onPointerDown={handleJoystickPointerDown}
            onPointerMove={handleJoystickPointerMove}
            onPointerUp={resetJoystick}
            onPointerCancel={resetJoystick}
            onPointerLeave={resetJoystick}
          >
            <span
              ref={joystickKnobRef}
              className="pointer-events-none h-12 w-12 rounded-full border-[3px] border-slate-950 bg-[#facc15] dark:border-slate-100"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// 보스 경고 배너 — 캔버스 상태를 읽어 표시 (짧은 주기 폴링)
const BossAlert = ({ runRef }) => {
  const [alertName, setAlertName] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const run = runRef.current;
      setAlertName(run.bossAlertTimer > 0 ? run.bossAlertName : "");
    }, 200);

    return () => clearInterval(timer);
  }, [runRef]);

  if (!alertName) return null;

  return (
    <p className="banner-slide pointer-events-none absolute left-1/2 top-14 z-20 -translate-x-1/2 border-2 border-slate-950 bg-rose-500 px-4 py-1.5 text-sm font-black text-white shadow-[4px_4px_0_#0f172a] dark:border-slate-100">
      ⚠️ BOSS — {alertName}
    </p>
  );
};

export default HomeRoguelite;
