import { useEffect, useState } from "react";

const SEOUL = { latitude: 37.5665, longitude: 126.978, label: "서울" };
const WEATHER_CACHE_KEY = "home-weather-cache";
const WEATHER_CACHE_TTL = 10 * 60 * 1000;

// WMO weather code → 아이콘/라벨
const WEATHER_CODES = [
  { codes: [0], icon: "☀️", label: "맑음" },
  { codes: [1], icon: "🌤️", label: "대체로 맑음" },
  { codes: [2], icon: "⛅", label: "구름 조금" },
  { codes: [3], icon: "☁️", label: "흐림" },
  { codes: [45, 48], icon: "🌫️", label: "안개" },
  { codes: [51, 53, 55, 56, 57], icon: "🌦️", label: "이슬비" },
  { codes: [61, 63, 65, 66, 67], icon: "🌧️", label: "비" },
  { codes: [71, 73, 75, 77], icon: "🌨️", label: "눈" },
  { codes: [80, 81, 82], icon: "🌧️", label: "소나기" },
  { codes: [85, 86], icon: "🌨️", label: "소낙눈" },
  { codes: [95, 96, 99], icon: "⛈️", label: "뇌우" },
];

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

const getWeatherMeta = (code) =>
  WEATHER_CODES.find((entry) => entry.codes.includes(code)) || {
    icon: "🌡️",
    label: "날씨",
  };

const readWeatherCache = () => {
  try {
    const raw = sessionStorage.getItem(WEATHER_CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw);
    if (Date.now() - cached.savedAt > WEATHER_CACHE_TTL) return null;

    return cached.data;
  } catch {
    return null;
  }
};

const writeWeatherCache = (data) => {
  try {
    sessionStorage.setItem(
      WEATHER_CACHE_KEY,
      JSON.stringify({ savedAt: Date.now(), data }),
    );
  } catch {
    /* noop */
  }
};

const getPosition = () =>
  new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(SEOUL);
      return;
    }

    const fallbackTimer = setTimeout(() => resolve(SEOUL), 3500);

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        clearTimeout(fallbackTimer);
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
          label: "현재 위치",
        });
      },
      () => {
        clearTimeout(fallbackTimer);
        resolve(SEOUL);
      },
      { timeout: 3000, maximumAge: 10 * 60 * 1000 },
    );
  });

const fetchWeather = async () => {
  const cached = readWeatherCache();
  if (cached) return cached;

  const position = await getPosition();
  const params = new URLSearchParams({
    latitude: position.latitude.toFixed(4),
    longitude: position.longitude.toFixed(4),
    current: "temperature_2m,weather_code",
    daily: "temperature_2m_max,temperature_2m_min",
    forecast_days: "1",
    timezone: "auto",
  });
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`,
  );

  if (!response.ok) {
    throw new Error(`weather ${response.status}`);
  }

  const json = await response.json();
  const data = {
    label: position.label,
    temperature: Math.round(json.current.temperature_2m),
    code: json.current.weather_code,
    high: Math.round(json.daily.temperature_2m_max[0]),
    low: Math.round(json.daily.temperature_2m_min[0]),
  };

  writeWeatherCache(data);
  return data;
};

// CTA 카드와 구분되는 은은한 pill 스타일 (섀도우 없음, 반투명)
const pillClass =
  "flex h-9 items-center gap-1.5 rounded-full border border-slate-950/15 bg-white/70 px-3 text-xs font-bold text-slate-700 backdrop-blur-sm dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-300";

const ClockPill = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (value) => String(value).padStart(2, "0");

  return (
    <div className={pillClass}>
      <span className="font-mono text-sm font-black tabular-nums text-slate-950 dark:text-slate-100">
        {pad(now.getHours())}:{pad(now.getMinutes())}
      </span>
      <span className="hidden text-slate-500 dark:text-slate-400 sm:inline">
        {now.getMonth() + 1}.{now.getDate()} ({WEEKDAYS[now.getDay()]})
      </span>
    </div>
  );
};

const WeatherPill = () => {
  const [weather, setWeather] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchWeather()
      .then((data) => {
        if (!cancelled) setWeather(data);
      })
      .catch(() => {
        if (!cancelled) setHasError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (hasError) return null;

  if (!weather) {
    return (
      <div className={pillClass}>
        <span aria-hidden>⏳</span>
      </div>
    );
  }

  const meta = getWeatherMeta(weather.code);

  return (
    <div
      className={pillClass}
      title={`${weather.label} · ${meta.label} · 최고 ${weather.high}° / 최저 ${weather.low}°`}
    >
      <span aria-hidden>{meta.icon}</span>
      <span className="text-sm font-black text-slate-950 dark:text-slate-100">
        {weather.temperature}°
      </span>
      <span className="hidden text-slate-500 dark:text-slate-400 sm:inline">
        {weather.label}
      </span>
    </div>
  );
};

const HomeStatusBar = ({ isDark, onToggleDark }) => (
  <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between gap-2 px-4 py-3 sm:px-6">
    <div className="pointer-events-auto">
      <ClockPill />
    </div>
    <div className="pointer-events-auto flex items-center gap-2">
      <WeatherPill />
      <button
        type="button"
        onClick={onToggleDark}
        aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-950/15 bg-white/70 text-base backdrop-blur-sm transition-transform hover:scale-105 dark:border-white/15 dark:bg-slate-900/70"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  </header>
);

export default HomeStatusBar;
