export const resumeProfile = {
  name: "하상원",
  role: "Frontend Developer",
  experience: "약 4년 7개월",
  portfolio: "https://hasangwon.com/portfolio",
  email: "305243@naver.com",
  blog: "https://bitcoins.tistory.com",
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
    name: "플링캐스트",
    period: "2026.08 ~ 현재",
    role: "프론트엔드 개발자",
    summary: "",
    bullets: [],
  },
  {
    name: "젠틀파이",
    period: "2024.06 ~ 2026.07",
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
    title: "설해원 챗봇",
    period: "2026.02 ~ 2026.05",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    tech: "React, TypeScript, TailwindCSS, Jotai, DOMPurify",
    bullets: [
      "브리티 챗봇 빌더와 연동되는 챗봇 프론트엔드 개발",
      "객실 예약, 골프 예약, 노캐디, 리무진 등 도메인별 커스텀 메시지 UI 구현",
      "비개발자인 담당자도 이해할 수 있도록 폴더 구조, 메시지 매핑, 주요 수정 위치, 검증 체크리스트를 인수인계서로 정리 및 공유",
    ],
  },
  {
    title: "한컴오피스 EditUp AI 교열 애드온",
    period: "2025.08 ~ 2026.02",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    tech: "React, TypeScript, TailwindCSS, Recoil, HwpObject API",
    bullets: [
      "업스테이지 AI 기반 한글 2024 문서 교열 애드온 개발",
      "HwpObject API 기반 문서 스캔, 텍스트 선택, 교정 문구 적용 기능 구현",
      "문단 위치 캐싱 및 offset 보정 로직을 설계하여 교열 위치 불일치 문제 개선",
      "HwpObject API 동작 분석 및 디버깅을 통해 표, 각주/미주, 도형이 포함된 복합 문서의 교열·선택 이슈 해결",
      "한컴 API의 동작 오류를 재현·분석하여 기능 개선에 필요한 원인 및 재현 케이스 제공",
    ],
  },
  {
    title: "애터미 에이케어 챗봇",
    period: "2025.09 ~ 2025.12",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    tech: "React, React Native, TailwindCSS, Recoil, WebSocket",
    bullets: [
      "애터미 에이케어 앱 내 건강관리 AI 챗봇 프론트엔드 개발",
      "WebSocket 재연결, heartbeat, 토큰 재시도 로직을 구현하여 실시간 채팅 안정성 강화",
      "푸시 알림 진입, 대화 복원, 메시지 초기화 기능을 구현하여 앱 재진입 플로우 구성",
      "STT 기능 구현 과정에서 음성 입력 상태 변화와 인터랙션을 구체화하여 사용자 경험 개선",
    ],
  },
  {
    title: "키움증권 영웅문 챗봇",
    period: "2025.01 ~ 2025.07",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    tech: "React, TailwindCSS, Redux Toolkit, Context API, Recharts",
    bullets: [
      "영웅문 앱 내 WebView 기반 챗봇 프론트엔드 개발",
      "기본 답변 템플릿 9종, 커스텀 답변 UI 11종 구현",
      "레거시 챗봇 코드 구조를 분석하고 CSS 중복 제거 및 구조 개선을 통해 약 3,000줄 규모의 스타일 코드를 800줄 수준으로 리팩토링",
      "iOS/Android WebView 환경의 입력창 포커스, 키패드, 스크롤, 화면 이동 이슈 대응 및 소형 해상도 반응형 UI 최적화",
    ],
  },
  {
    title: "버블잇 챗봇 빌더",
    period: "2024.06 ~ 2024.12",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    tech: "Next.js, Styled Components, Recoil, Yarn Workspace, Recharts",
    bullets: [
      "챗봇 빌더 Admin 및 SDK 기능 개발·운영",
      "프로젝트 설정, 답변 관리, 통계, 지식 업로드(URL/PDF) 기능 개발",
      "분산되어 있던 모달 관리 로직을 공통 훅 기반 구조로 개선하고 과도한 전역 상태 의존성을 정리하여 유지보수성 향상",
      "스켈레톤 노출 시점 및 렌더링 흐름을 개선하여 사용자 경험 최적화",
      "중복 컴포넌트 분리, 이미지 최적화, 미사용 라이브러리 제거를 통해 모노레포 빌드 속도 30% 이상 개선",
    ],
  },
  {
    title: "늘펫",
    period: "2022.08 ~ 2024.01",
    company: "벳플럭스",
    role: "풀스택 개발 팀원",
    tech: "React, Next.js, Firebase, Firebase Functions, Nest.js, TailwindCSS",
    bullets: [
      "동물병원 고객관리 SaaS 플랫폼 개발 및 운영",
      "메신저, 예약, 고객관리, 설문, CTI, 알림톡 등 핵심 서비스 개발",
      "Firestore 기반 실시간 채팅 및 병원 업무 연계 기능 구현",
      "프론트엔드 아키텍처 설계에 참여하고 레거시 구조를 기능 단위로 리팩토링하여 유지보수성 개선",
      "Firestore 쿼리 구조를 개선하여 대용량 데이터 조회 시 발생하던 성능 문제 해결",
      "세종텔레콤 CTI 연동 및 Firebase Functions 기반 실시간 통신 기능 개발",
      "엑셀 업로드 데이터 파싱 및 배치 처리 로직을 구현하여 대량 고객 데이터 등록 지원",
      "초기 기획 검토부터 개발, 운영 개선, 스프린트 리딩까지 서비스 전반 참여",
      "react-virtualized를 적용하여 대용량 고객 목록 렌더링 성능 개선",
    ],
  },
];

export const resumeOtherProjects = [
  {
    title: "LG HVAC 챗봇 Philippines",
    period: "2026.01 ~ 2026.03",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    bullets: [
      "RAG 기반 HVAC 제품 상담 챗봇 프론트엔드 개발",
      "딜러 찾기를 위한 위치 권한 요청, 좌표 전달, 사용자 안내 메시지 플로우 구현",
      "SSE 스트리밍 답변, 로딩/타이핑 상태, 추천 질문, 피드백, 복사 기능 등 챗봇 공통 인터랙션 구현",
    ],
  },
  {
    title: "식약처 AI 코스봇",
    period: "2024.07 ~ 2024.08",
    company: "젠틀파이",
    role: "프론트엔드 개발 프로",
    bullets: [
      "모바일 기반 AI 챗봇 웹 페이지 개발",
      "응답 로딩 상태 및 문자 단위 타이핑 인터랙션 구현",
      "답변 조회부터 평가 제출까지의 사용자 플로우 구성",
    ],
  },
  {
    title: "대웅펫 e-CRF",
    period: "2023.11 ~ 2023.12",
    company: "벳플럭스",
    role: "프론트엔드 개발 팀원",
    bullets: [
      "관리자 문진 생성, 사용자 답변, 수의사-보호자 간 실시간 메신저 기능 구현",
      "기존 외주 개발 코드를 분석하고 컨벤션을 파악하여 후속 기능 개발",
      "기존 개발 코드를 인수받아 단기간 내 담당 기능 개발을 마무리하고 추가 이슈 없이 검수 완료",
    ],
  },
  {
    title: "맛다름 쇼핑몰",
    period: "2021.04 ~ 2022.01",
    company: "농업회사법인이에프시",
    role: "개발자 사원",
    bullets: [
      "React 기반 쇼핑몰 웹 서비스 초기 화면 개발",
      "BeautifulSoup을 활용한 상품 정보 수집 프로그램 개발 및 배치 자동화 유지보수",
    ],
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
