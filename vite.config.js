import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { SALES_URL, salesJsonLd, salesSeo } from "./src/constants/salesSeo.js";

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// /sales 전용 HTML. 모든 경로가 같은 index.html(포트폴리오 제목·설명)을 받으면 자바스크립트를 안 돌리는 검색 로봇은
// /sales 를 포트폴리오로 읽는다. Vercel 은 실제 파일을 rewrites 보다 먼저 주므로 dist/sales/index.html 이 그대로 나간다.
const salesHtml = () => ({
  name: "sales-html",
  apply: "build",
  closeBundle() {
    const dist = fileURLToPath(new URL("./dist", import.meta.url));
    let html = readFileSync(resolve(dist, "index.html"), "utf8");
    const setMeta = (attr, key, value) => {
      const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
      if (!re.test(html)) throw new Error(`sales-html: meta ${attr}=${key} 없음`);
      html = html.replace(re, `$1${escapeAttr(value)}$2`);
    };
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(salesSeo.title)}</title>`);
    setMeta("name", "description", salesSeo.description);
    setMeta("name", "keywords", salesSeo.keywords);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", salesSeo.title);
    setMeta("property", "og:description", salesSeo.description);
    setMeta("property", "og:url", SALES_URL);
    setMeta("name", "twitter:title", salesSeo.title);
    setMeta("name", "twitter:description", salesSeo.description);
    html = html.replace(/href="https:\/\/hasangwon\.com\/"( hreflang| \/>)/g, `href="${SALES_URL}"$1`);
    html = html.replace("</head>", `  <script type="application/ld+json">${JSON.stringify(salesJsonLd)}</script>\n</head>`);
    for (const dir of ["sales", "sails"]) {
      mkdirSync(resolve(dist, dir), { recursive: true });
      writeFileSync(resolve(dist, dir, "index.html"), html);
    }
  },
});

export default defineConfig(() => ({
  base: "/",
  plugins: [react(), tailwindcss(), salesHtml()],
}));
