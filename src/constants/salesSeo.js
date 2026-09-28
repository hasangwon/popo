// hasangwon.com/sales 의 검색 노출 정보. 페이지(SalesPage)와 빌드(vite.config.js 의 salesHtml)가 같이 쓴다.
// 빌드는 이 값으로 dist/sales/index.html 의 <head> 를 채운다 — 자바스크립트를 실행하지 않는 검색 로봇도 이 페이지 정보를 읽게.

export const SALES_URL = "https://hasangwon.com/sales";
export const SALES_EMAIL = "305243@naver.com";

export const salesSeo = {
  title: "개발 견적 문의 | 하상원",
  description:
    "5년 이상 현직 개발자 하상원의 개발 견적 문의 페이지입니다. 웹사이트, 관리자 페이지, Android·iOS 앱, 챗봇, 구글 시트 업무 도구 개발과 바이브 코딩 세팅 등 개발 컨설팅을 받습니다.",
  keywords:
    "개발 견적, 개발 외주, 외주 개발, 앱 개발 견적, 앱 개발 외주, 프리랜서 개발자, 개발 컨설팅, 바이브 코딩, 바이브코딩, 클로드 코딩, 클로드코딩, 챗봇 개발, 앱 개발, Android 앱 개발, iOS 앱 개발, 구글 시트 앱",
};

export const salesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "하상원 개발 견적 문의",
  url: SALES_URL,
  email: SALES_EMAIL,
  description: salesSeo.description,
  areaServed: "KR",
  founder: { "@type": "Person", name: "하상원", url: "https://hasangwon.com/" },
  knowsAbout: ["개발 견적", "개발 외주", "웹 개발", "Android 앱 개발", "iOS 앱 개발", "챗봇 개발", "Google Sheets 연동", "개발 컨설팅", "바이브 코딩"],
};
