import { useEffect, useRef } from "react";

// .env 파일에 아래 값을 넣으면 자동으로 활성화됩니다.
//   VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
//   VITE_ADSENSE_SLOT_HOME=1234567890
const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;

let scriptLoaded = false;

const loadAdSenseScript = () => {
  if (scriptLoaded || !ADSENSE_CLIENT) return;

  scriptLoaded = true;
  const script = document.createElement("script");

  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};

const AdSlot = ({ slot, className = "" }) => {
  const insRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!ADSENSE_CLIENT || !slot || pushedRef.current) return;

    loadAdSenseScript();
    pushedRef.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* noop */
    }
  }, [slot]);

  if (!ADSENSE_CLIENT || !slot) {
    return null;
  }

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle block ${className}`}
      style={{ display: "block", minHeight: 90 }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSlot;
