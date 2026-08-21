// 오디오 파일 없이 WebAudio로 합성하는 게임 사운드
const MUTE_KEY = "debug-survivor-muted";

let audioContext = null;
let lastShotAt = 0;

const readMuted = () => {
  try {
    return localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
};

let muted = readMuted();

const ensureContext = () => {
  if (typeof window === "undefined") return null;

  if (!audioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioContext = new Ctx();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
};

// 사용자 제스처(게임 시작 등) 시점에 호출해 자동재생 제한 해제
export const unlockAudio = () => {
  ensureContext();
};

export const isMuted = () => muted;

export const setMuted = (next) => {
  muted = next;

  try {
    localStorage.setItem(MUTE_KEY, next ? "1" : "0");
  } catch {
    /* noop */
  }
};

const tone = (
  startFreq,
  endFreq,
  duration,
  type = "square",
  volume = 0.08,
  delay = 0,
) => {
  const ctx = ensureContext();
  if (!ctx) return;

  const start = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(startFreq, start);
  osc.frequency.exponentialRampToValueAtTime(
    Math.max(endFreq, 1),
    start + duration,
  );
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
};

const noise = (duration, volume = 0.08, delay = 0) => {
  const ctx = ensureContext();
  if (!ctx) return;

  const start = ctx.currentTime + delay;
  const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < bufferSize; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }

  const source = ctx.createBufferSource();
  const gain = ctx.createGain();

  source.buffer = buffer;
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start(start);
};

export const playSound = (name) => {
  if (muted) return;

  switch (name) {
    case "shoot": {
      const now = performance.now();
      if (now - lastShotAt < 80) return;
      lastShotAt = now;
      tone(760, 320, 0.07, "square", 0.04);
      break;
    }
    case "hit":
      noise(0.04, 0.05);
      break;
    case "kill":
      tone(340, 90, 0.16, "sawtooth", 0.09);
      noise(0.05, 0.04);
      break;
    case "gem":
      tone(660, 990, 0.07, "sine", 0.06);
      break;
    case "levelup":
      tone(523, 523, 0.1, "square", 0.08);
      tone(659, 659, 0.1, "square", 0.08, 0.09);
      tone(784, 784, 0.1, "square", 0.08, 0.18);
      tone(1047, 1047, 0.16, "square", 0.08, 0.27);
      break;
    case "hurt":
      tone(180, 60, 0.22, "square", 0.13);
      break;
    case "boss":
      tone(98, 98, 0.3, "sawtooth", 0.13);
      tone(98, 98, 0.3, "sawtooth", 0.13, 0.35);
      break;
    case "victory":
      [523, 659, 784, 1047, 1319].forEach((freq, index) => {
        tone(freq, freq, 0.18, "triangle", 0.09, index * 0.12);
      });
      break;
    case "over":
      tone(220, 55, 0.6, "sawtooth", 0.11);
      break;
    default:
      break;
  }
};
