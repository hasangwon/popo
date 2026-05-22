export const resumeProfile = {
  name: "하상원",
  role: "Frontend Developer",
  experience: "약 4년 3개월",
  portfolio: "https://hasangwon.com/",
  email: "305243@naver.com",
  blog: "https://bitcoins.tistory.com/",
  github: "https://github.com/hasangwon",
  photo: "/profile/hasangwon.jpg",
};

export const resumeIntro = [
  "스타트업 서비스와 여러 외부 프로젝트를 경험하며, 관리자용 웹 서비스와 대화형 UI 프론트엔드 개발을 지속해 왔습니다.",
  "초기부터 참여한 프로젝트에서는 기능 흐름을 함께 정리하고, 변경되는 요구사항에 맞춰 화면과 구조를 조정하며 개발했습니다.",
  "프로젝트 구조와 화면의 작은 디테일을 함께 살피며 구현하는 데 강점이 있고, 작업 과정에서 필요한 내용을 명확히 정리해 공유하는 편입니다.",
];

export const resumeSkillGroups = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Redux Toolkit",
  "Recoil",
  "Jotai",
  "Firebase",
  "Nest.js",
  "Recharts",
];

export const resumeCompanies = [
  {
    name: "젠틀파이",
    period: "2024.06 ~ 현재",
    role: "챗봇 빌더/SDK 및 고객사 챗봇 프론트엔드",
    summary:
      "챗봇 빌더와 고객사 챗봇 프론트엔드를 개발했습니다. 버블잇 Admin/SDK, 통계, 지식 업로드 기능을 유지보수했고, 키움증권, 식약처, LG HVAC, 애터미, 설해원 등 고객사 챗봇 UI를 구현했습니다.",
    bullets: [
      "SSE/WebSocket 기반 스트리밍 답변, 타이핑 상태, 피드백, 캐러셀/테이블형 메시지 구현",
      "앱 WebView 환경에서 입력창 포커스, 키보드, 스크롤, 네이티브 함수 연동 이슈 대응",
      "챗봇 SDK, 통계 페이지, 지식 업로드 페이지, 고객사별 커스텀 메시지 UI 개발",
      "모노레포 구조 관리, 중복 컴포넌트 분리, 이미지 최적화, 미사용 라이브러리 제거",
    ],
  },
  {
    name: "벳플럭스",
    period: "2022.08 ~ 2024.01",
    role: "동물병원 웹 솔루션 늘펫 프론트엔드 전담",
    summary:
      "동물병원 웹 솔루션 늘펫의 프론트엔드를 전담했습니다. 메신저, 예약, 고객 관리, 설문, CTI, 알림톡/웹푸시 등 병원 데스크 운영에 필요한 SaaS 기능을 개발했고, Firebase와 Nest.js 일부 백엔드 기능도 함께 다뤘습니다.",
    bullets: [
      "Firestore Snapshot 기반 실시간 메신저와 자동 응답/예약/알림 연동 기능 개발",
      "예약 캘린더, 고객 정보 관리, 엑셀 업로드/파싱, 설문 생성 및 응답 조회 기능 개발",
      "Firebase Functions 기반 예약, 방문, 전화 이벤트 처리, 알림톡/웹푸시/로그 기록 구현",
      "세종텔레콤 CTI 연동과 저사양 병원 데스크 PC 환경의 리스트 렌더링 최적화",
    ],
  },
  {
    name: "농업회사법인이에프시",
    period: "2021.04 ~ 2022.01",
    role: "쇼핑몰 웹 서비스 프론트엔드 / 스크래핑 자동화",
    summary:
      "쇼핑몰 웹 서비스 초기 화면을 React 기반으로 개발하고, 웹 스크래핑 프로그램 및 배치 자동화 유지보수에 참여했습니다.",
    bullets: [
      "쇼핑몰 웹 서비스 초기 프론트엔드 UI 설계 및 React 화면 개발",
      "BeautifulSoup 기반 웹 스크래핑 프로그램 개발 및 배치 자동화 유지보수",
    ],
  },
];

export const resumeProjects = [
  {
    title: "애터미 에이케어 챗봇",
    period: "2025.09 ~ 2025.12",
    company: "젠틀파이",
    role: "프론트엔드 개발",
    tech: "React, React Native, TailwindCSS, Recoil, WebSocket",
    summary:
      "애터미 에이케어 앱 내 건강관리 챗봇 개발. WebSocket 기반 실시간 채팅, STT 음성 입력, 습관 추천/추가/인증 액션형 메시지 구현",
    bullets: [
      "WebSocket 기반 메시지 송수신, 토큰 발급/재시도, heartbeat, 재연결 처리 구현",
      "채팅 히스토리 조회, 상단 스크롤 이전 대화 로드, 푸시 알림 진입 플로우 개발",
      "STT 음성 전송/텍스트 반환, Web Audio API 기반 음파 UI, 앱 권한 브릿지 연동",
    ],
  },
  {
    title: "키움증권 영웅문 챗봇",
    period: "2025.01 ~ 2025.07",
    company: "젠틀파이",
    role: "레거시 파악 및 프론트엔드 개발",
    tech: "React, TailwindCSS, Redux Toolkit, Context API, Recharts",
    summary:
      "영웅문 앱 WebView 챗봇 개발. 커스텀 메시지, 앱 연동 UX, 차트/캐러셀 등 메시지 UI 구현",
    bullets: [
      "기본 답변 템플릿 9종, 커스텀 챗봇 답변 11종, RAG/RAG fallback 답변 UI 개발",
      "Redux Toolkit과 Context API를 목적별로 분리해 전역 비즈니스 상태와 UI 상태 관리",
      "WebView iOS/Android 입력창 포커스, 키패드, 스크롤, 앱 함수 기반 화면 이동 대응",
    ],
  },
  {
    title: "늘펫",
    period: "2022.08 ~ 2024.01",
    company: "벳플럭스",
    role: "프론트엔드 유지보수/기능 개발, 백엔드 일부 기능 개발",
    tech: "React, Next.js, Firebase, Firebase Functions, Nest.js, TailwindCSS",
    summary:
      "동물병원 데스크 업무를 줄이기 위한 고객관리 SaaS. 메신저, 챗봇, 예약, 고객 정보, 설문, CTI, 알림톡/웹푸시 구현",
    bullets: [
      "Firestore Snapshot 기반 실시간 메신저와 자동 응답/팔로업/예약 연동 기능 개발",
      "Firebase Functions 기반 예약, 방문, 전화 이벤트 처리와 알림톡/웹푸시/로그 기록 구현",
      "저사양 병원 데스크 PC에서 복잡한 설정 리스트 렌더링 병목을 react-virtualized로 개선",
    ],
  },
  {
    title: "설해원 챗봇",
    period: "2026.02 ~ 2026.05",
    company: "젠틀파이",
    role: "프론트엔드 개발",
    tech: "React, TypeScript, TailwindCSS, Jotai, DOMPurify",
    summary:
      "챗봇 빌더 브리티와 연동해 설해원 골프/객실 예약 조회, 예약 변경, 예약 취소 등 도메인 커스텀 메시지 구현",
    bullets: [
      "채팅 세션, 로그인 복구, 세션 만료 재발급, 로그인 후 이전 질문 자동 재전송 구현",
      "객실/골프 예약 조회, 변경, 취소 등 시나리오 UI 개발",
      "Markdown 렌더링 구간에 DOMPurify sanitizing 적용 및 인수인계 문서 작성",
    ],
  },
  {
    title: "버블잇 챗봇 빌더",
    period: "2024.06 ~ 2024.12",
    company: "젠틀파이",
    role: "프론트엔드 유지보수 / 기능 개발",
    tech: "Next.js, Styled Components, Recoil, Yarn Workspace, Recharts",
    summary:
      "젠틀파이 챗봇 빌더 Admin/SDK 유지보수. 프로젝트 설정, 답변 관리, 데이터 분석, 지식 업로드 기능 개발",
    bullets: [
      "중복 UI 컴포넌트 분리 및 재사용 가능한 단위 컴포넌트로 리팩터링",
      "챗봇 SDK, Recharts 기반 통계 페이지, URL/PDF 지식 업로드 페이지 개발",
      "레거시 코드 개선, 이미지 최적화, 미사용 라이브러리 제거로 모노레포 빌드 속도 30% 이상 개선",
    ],
  },
  {
    title: "한컴오피스 EditUp AI 교열 애드온",
    period: "2025.08 ~ 2026.02",
    company: "젠틀파이",
    role: "한컴오피스 환경 최적화 및 교열 기능 프론트엔드 개발",
    tech: "React, TypeScript, TailwindCSS, Recoil, HwpObject API",
    summary: "한컴오피스 문서의 AI 교열 결과 비교 및 적용 애드온 개발",
    bullets: [
      "HwpObject API 기반 문서 스캔, 텍스트 선택, 교정 문구 적용 기능 구현",
      "문단 위치 캐싱, offset 보정, 문단/벌크 단위 요청, 단어 단위 diff 표시 구현",
      "표, 각주/미주, 도형/메모 포함 문서에서 발생하는 교열/선택 이슈 대응",
    ],
  },
];

export const resumeOtherProjects = [
  {
    title: "LG HVAC 챗봇 Philippines",
    period: "2026.01 ~ 2026.03",
    company: "젠틀파이",
    role: "프론트엔드 개발",
    summary:
      "SSE 스트리밍 응답, 위치정보 수집 메시지, Contact Us 문의폼 모달, 메시지 타입별 UI 구현",
  },
  {
    title: "식약처 AI 코스봇",
    period: "2024.07 ~ 2024.08",
    company: "젠틀파이",
    role: "프론트엔드 개발",
    summary:
      "모바일 기반 챗봇 웹 페이지, 스트리밍 응답 API 연동, 문자 단위 타이핑 인터랙션 구현",
  },
  {
    title: "대웅펫 e-CRF",
    period: "2023.11 ~ 2023.12",
    company: "벳플럭스",
    role: "프론트엔드 개발",
    summary:
      "관리자 문진 생성, 사용자 답변, 수의사와 보호자 간 Socket.IO 기반 실시간 메신저 구현",
  },
];

export const resumeEducation = [
  {
    school: "한신대학교. 컴퓨터공학부",
    period: "2015.03 ~ 2020.02 (졸업)",
  },
  {
    school: "성사고등학교. 인문계",
    period: "2012.03 ~ 2015.02 (졸업)",
  },
];
