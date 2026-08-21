export const profile = {
  name: "하상원",
  role: "Frontend Developer",
  summary:
    "운영자가 실제로 사용하는 관리자 화면과 대화형 UI를 중심으로 프론트엔드를 개발해 왔습니다.",
  email: "305243@naver.com",
  github: "https://github.com/hasangwon",
  blog: "https://bitcoins.tistory.com/",
  experience: "약 4년 7개월",
};

export const sections = [
  {
    id: "hero",
    index: "01",
    label: "소개",
    prompt: "소개와 대표 프로젝트를 보여줘.",
  },
  {
    id: "overview",
    index: "02",
    label: "작업 방식",
    prompt: "어떤 방식으로 개발하고 문제를 해결하는지 알려줘.",
  },
  {
    id: "experience",
    index: "03",
    label: "경력",
    prompt: "회사별 경력과 핵심 경험을 보여줘.",
  },
  {
    id: "chatbot-projects",
    index: "04",
    label: "챗봇 프로젝트",
    prompt: "챗봇 프로젝트와 문제 해결 사례를 보여줘.",
  },
  {
    id: "general-projects",
    index: "05",
    label: "일반 프로젝트",
    prompt: "일반 프로젝트와 문제 해결 사례를 보여줘.",
  },
  {
    id: "contact",
    index: "06",
    label: "연락처 및 정보",
    prompt: "연락처 및 외부 정보를 알려줘",
  },
];

export const strengths = [
  {
    title: "대화형 UI",
    body: "챗봇처럼 응답 생성, 대기, 재시도, 세션 만료, 피드백이 이어지는 화면에서 사용자가 흐름을 잃지 않도록 UI 상태를 설계했습니다.",
    fill: [
      "SSE/WebSocket 기반 스트리밍 응답, 타이핑 상태, 로딩 상태를 분리해 답변 대기 경험을 안정적으로 구성했습니다.",
      "추천 질문, 피드백, 캐러셀/테이블 메시지 등 반복되는 챗봇 UI를 공통 패턴으로 정리했습니다.",
    ],
  },
  {
    title: "앱/WebView 대응",
    body: "앱 WebView와 모바일 웹에서 입력창, 키보드, 스크롤, 네이티브 브릿지가 맞물리는 문제를 실제 디바이스 기준으로 대응했습니다.",
    fill: [
      "키보드 노출, 입력창 포커스, 자동 스크롤 타이밍이 겹치는 구간을 확인하고 화면 흐름을 보정했습니다.",
      "뒤로가기, 권한 요청, 화면 이동처럼 웹 상태와 네이티브 동작이 충돌하기 쉬운 흐름을 분리했습니다.",
    ],
  },
  {
    title: "운영 가능한 구조",
    body: "전역 상태와 UI 상태를 분리하고, 레거시/모노레포 환경에서도 필요한 범위를 읽어 유지보수 가능한 형태로 개선하는 일을 해왔습니다.",
    fill: [
      "반복 UI와 상태를 먼저 찾아 작은 단위로 분리하는 방식으로 레거시 변경 범위를 줄였습니다.",
      "버블잇에서는 중복 컴포넌트, 이미지, 미사용 라이브러리를 정리해 빌드 속도 개선에 기여했습니다.",
    ],
  },
];

export const companies = [
  {
    id: "plingcast",
    name: "플링캐스트",
    period: "2026.08 ~ 현재",
    role: "프론트엔드 개발자",
    keywords: [],
    highlight: "",
    summary: "",
    bullets: [],
  },
  {
    id: "gentlepie",
    name: "젠틀파이",
    period: "2024.06 ~ 2026.07",
    role: "챗봇 빌더/SDK 및 고객사 챗봇 프론트엔드",
    keywords: ["대화형 UI", "WebView", "SSE·WebSocket", "고객사 프로젝트"],
    highlight:
      "자사 챗봇 서비스와 여러 고객사 프로젝트를 수행하며 챗봇 프론트엔드에 대한 이해도와 구현 경험을 높였습니다.",
    summary:
      "챗봇 빌더와 고객사 챗봇 프론트엔드를 담당했습니다. SDK, 통계, 지식 업로드, 고객사별 챗봇 UI를 개발하며 대화형 서비스와 앱/WebView 환경을 다뤘습니다.",
    bullets: [
      "키움증권, 식약처, LG HVAC, 애터미, 설해원 등 고객사 챗봇 프론트엔드 구현 및 유지보수",
      "젠틀파이 버블잇 서비스 챗봇 SDK, 지식 업로드, 통계 페이지, 모노레포 구조 관리",
      "스트리밍 응답, STT/TTS, 피드백, 캐러셀/테이블형 메시지 등 챗봇 특화 UI 구현",
    ],
  },
  {
    id: "vetflux",
    name: "벳플럭스",
    period: "2022.08 ~ 2024.01",
    role: "동물병원 웹 솔루션 늘펫 프론트엔드 전담",
    keywords: ["SaaS", "실시간 메신저", "Firebase", "제품 운영"],
    highlight: "기획 검토부터 개발과 운영 개선까지 제품 전반에 참여했습니다.",
    summary:
      "동물병원 웹 솔루션 늘펫의 프론트엔드를 전담했습니다. 메신저, 예약, 고객 관리, 설문, CTI, 알림톡/웹푸시 등 병원 데스크 운영에 필요한 SaaS 기능을 개발했습니다.",
    bullets: [
      "Firestore Snapshot 기반 실시간 메신저, 예약 캘린더, 고객 관리, 설문 기능 개발",
      "CTI, 알림톡/웹푸시, Firebase Functions 이벤트 처리와 Nest.js 일부 유지보수 참여",
      "기획 검토, 일정 산정, 사용자 피드백 수렴, 백로그 관리까지 제품 운영 흐름 참여",
    ],
  },
  {
    id: "efc",
    name: "농업회사법인이에프시",
    period: "2021.04 ~ 2022.01",
    role: "쇼핑몰 웹 서비스 프론트엔드 / 스크래핑 자동화",
    keywords: ["React", "BeautifulSoup", "웹 스크래핑", "배치 자동화"],
    highlight:
      "쇼핑몰 프론트엔드 개발과 상품 정보 수집 자동화를 구현했습니다.",
    summary:
      "쇼핑몰 웹 서비스 초기 화면을 React 기반으로 개발하고, BeautifulSoup 기반 웹 스크래핑 프로그램과 배치 자동화 유지보수에 참여했습니다.",
    bullets: [
      "쇼핑몰 웹 서비스 초기 프론트엔드 UI 설계 및 React 기반 화면 개발",
      "BeautifulSoup을 활용한 웹 스크래핑 프로그램 개발 및 배치 자동화 유지보수",
    ],
  },
];

export const projects = [
  {
    id: "seolhaewon-chatbot",
    group: "chatbot",
    title: "설해원 챗봇",
    period: "2026.02 ~ 2026.05",
    role: "프론트엔드 전체 개발",
    tech: ["React", "TypeScript", "TailwindCSS", "Jotai", "DOMPurify"],
    summary:
      "챗봇 빌더 브리티와 연동해 골프/객실 예약 조회, 예약 변경, 예약 취소 등 설해원 도메인에 맞춘 커스텀 메시지를 구현했습니다.",
    bullets: [
      "채팅 세션 발급, 메시지 전송, 로딩/타이핑 상태, 자동 스크롤 등 기본 UX 구현",
      "로그인 복구, 세션 만료 시 신규 세션 재발급, 로그인 후 이전 질문 자동 재전송 구현",
      "객실/골프 예약 조회, 변경, 취소, 쿠폰, 입력 폼, 선택형 버튼 등 시나리오 UI 개발",
      "Markdown 렌더링 구간에 DOMPurify sanitizing 적용",
    ],
    contributions: [
      "채팅 세션 발급, 메시지 전송, 로딩/타이핑 상태, 자동 스크롤 등 챗봇 기본 UX 전반 구현",
      "브리티 기본 메시지와 form 메시지를 scenarioName 기준으로 분기하는 커스텀 메시지 구조 설계",
      "쿠폰 조회, 예약 내역, 입력 폼, 선택형 버튼, 빈 상태 등 반복 시나리오를 공통 컴포넌트로 구성",
      "Markdown 렌더링 구간에 DOMPurify sanitizing을 적용해 챗봇 답변 표시 구간의 XSS 위험 완화",
    ],
    caseStudies: [
      {
        title: "복합 예약 시나리오를 커스텀 메시지로 구조화",
        problem:
          "객실·골프 예약은 조회, 변경, 취소뿐 아니라 투숙객, 코스, 시간, 노캐디, 리무진 등 다양한 상태와 선택지가 연결되어 있어 기본 텍스트 메시지만으로 처리하기 어려웠습니다.",
        approach:
          "브리티 Form 메시지를 scenarioName 기준으로 분기하고, 호텔·골프·쿠폰 도메인별 컴포넌트와 공통 시나리오 컴포넌트를 분리했습니다. 이를 통해 예약 상태에 따라 필요한 UI를 동적으로 구성할 수 있도록 구현했습니다.",
        result:
          "복잡한 예약 업무를 챗봇 대화 내에서 처리할 수 있도록 구현했으며, 시나리오별 컴포넌트 구조를 분리해 기능 추가 및 유지보수 시 수정 범위를 명확하게 관리할 수 있었습니다.",
      },
      {
        title: "비개발자 담당자를 위한 유지보수 문서화",
        problem:
          "고객사의 운영 담당자가 개발자가 아니어서 프로젝트 구조와 시나리오별 수정 지점을 코드만으로 파악하기 어려웠습니다.",
        approach:
          "폴더 구조, 메시지 매핑 관계, 주요 수정 위치, 외부 연동 정보, 배포 전 검증 항목 등을 인수인계 문서로 정리했습니다.",
        result:
          "개발 지식이 없는 담당자도 주요 수정 위치와 운영 절차를 확인할 수 있는 기준 문서를 구축했으며, 담당자 변경 시 인수인계 부담을 줄일 수 있었습니다.",
      },
    ],
    integrationTitle: "인증 및 예약 흐름 처리",
    integrationPoints: [
      "로그인·로그아웃과 로그인 복구 상태를 처리하고 로그인 시 이전 질문을 자동 재전송해 인증 전후의 질문 흐름을 연결",
      "세션 만료 상황에서 신규 세션을 재발급해 사용자가 대화 흐름을 이어갈 수 있도록 처리",
      "객실 예약 조회·타입/투숙객 변경·취소와 골프 예약 조회·코스/시간 변경·노캐디/리무진 신청 흐름을 챗봇 메시지 안에서 단계별로 처리",
      "폴더 구조, scenarioName 매핑, 주요 수정 위치, 검증 체크리스트와 외부 링크·토큰 운영 정책을 비개발자 담당자용 인수인계서로 정리",
    ],
    media: [
      {
        title: "홈 화면",
        description: "객실/골프 예약 메뉴로 진입할 수 있는 설해원 챗봇 홈 화면",
        src: "/project-images/seolhaewon/home.webp",
        alt: "설해원 챗봇 홈 화면",
      },
      {
        title: "대화 중 커스텀 메시지",
        description:
          "브리티 form 메시지를 기반으로 객실/골프 예약 시나리오를 렌더링하는 대화 화면",
        src: "/project-images/seolhaewon/chat.webp",
        alt: "설해원 챗봇 대화 중 화면",
      },
      {
        title: "프론트엔드 인수인계서",
        description:
          "비개발자 신규 담당자도 구조와 수정 지점을 파악할 수 있도록 정리한 공개용 인수인계 문서",
        src: "/project-images/seolhaewon/handover-thumbnail.webp",
        alt: "설해원 프론트엔드 인수인계서 썸네일",
        docSrc: "/project-docs/seolhaewon-handover.md",
      },
    ],
  },
  {
    id: "lg-hvac-chatbot",
    group: "chatbot",
    title: "LG HVAC 챗봇 Philippines",
    period: "2026.01 ~ 2026.03",
    role: "프론트엔드 전체 개발",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "Context API"],
    link: "https://www.lg.com/ph/business/hvac/homeowner/",
    linkLabel: "LG HVAC 필리핀",
    summary:
      "LG HVAC Philippines 사이트의 고객용 챗봇을 개발하며 위치정보 수집 메시지와 Contact Us 문의폼 모달을 중심으로 메시지 타입별 UI를 구현했습니다.",
    bullets: [
      "SSE 스트리밍 응답 렌더링, 타이핑 애니메이션, 로딩 상태, 세션 만료 처리 구현",
      "위치 권한 요청, 사용자 위치정보 상호작용 메시지, 좌표 전달 플로우 구현",
      "Contact Us 문의폼 모달 개발 및 챗봇 응답 데이터 기반 입력값 자동 반영 처리",
      "일반 메시지, 추천 질문, 피드백, 복사, 약관/개인정보 모달 등 메시지 타입별 UI 개발",
    ],
    contributions: [
      "SSE 스트리밍 응답 기반의 챗봇 메시지 렌더링, 타이핑 애니메이션, 로딩 상태 구현",
      "일반 메시지, 추천 질문, 피드백, 복사, 약관/개인정보 모달 등 메시지 타입별 UI 개발",
      "세션 만료 상황에서 신규 세션을 발급하고 대화를 다시 시작할 수 있도록 처리",
      "RAG 답변의 JSON 여부와 내부 필드를 복합 검증해 일반 텍스트와 딜러 찾기·상품 정보 커스텀 메시지로 분기하는 구조 구현",
    ],
    caseStudies: [
      {
        title: "RAG 응답을 텍스트와 커스텀 메시지로 확장",
        problem:
          "초기 HVAC 챗봇은 RAG 검색 결과를 단순 텍스트로만 반환하도록 설계되어 있었습니다. 개발 과정에서 딜러 찾기, 제품 정보 카드 등 사용자 상호작용이 필요한 기능이 추가됐지만 기존 구조에서는 모든 응답이 일반 텍스트로 처리되어 커스텀 UI를 표현하기 어려웠습니다. 또한 LLM 응답 특성상 의도한 타입 정보가 누락되거나 잘못 전달될 수 있어 단순 타입 체크만으로는 안정적인 처리가 어려웠습니다.",
        approach:
          "RAG 응답을 일반 텍스트와 커스텀 메시지(JSON)로 구분하는 구조를 제안하고 적용했습니다. 응답의 JSON 형식 여부를 우선 판별한 뒤 텍스트 메시지와 커스텀 메시지로 분기했으며, 딜러 찾기와 제품 정보 카드에 필요한 데이터를 JSON 내부에 정의해 UI를 동적으로 생성하도록 설계했습니다. 타입 정보가 누락되거나 잘못 반환되는 경우를 고려해 단순 타입 비교뿐 아니라 필수 데이터 구조도 함께 검증했습니다.",
        result:
          "텍스트 응답 중심이던 챗봇 구조를 확장해 다양한 형태의 커스텀 메시지를 유연하게 지원할 수 있는 기반을 마련했습니다. 이를 통해 딜러 찾기와 제품 정보 카드 같은 인터랙티브 기능을 추가할 수 있었고, LLM 응답 형식이 일부 달라지더라도 안정적으로 메시지를 처리할 수 있도록 개선했습니다.",
      },
    ],
    integrationTitle: "플랫폼 연동 및 사용자 흐름 처리",
    integrationPoints: [
      "딜러 찾기 기능을 위해 위치 권한 요청의 성공·거부·재시도 상태와 좌표 전달 플로우 구현",
      "Contact Us 견적 요청 폼을 개발하고 챗봇 응답의 제품·예산·일정 정보를 입력값에 자동 반영",
      "모바일과 웹 환경에서 입력창 높이, 키보드 포커스, 자동 스크롤을 함께 대응",
    ],
    media: [
      {
        title: "홈",
        description: "LG HVAC 사이트 우측 하단에서 진입하는 챗봇 홈 화면",
        src: "/project-images/lg-hvac/home.webp",
        alt: "LG HVAC 챗봇 홈 화면",
      },
      {
        title: "일반 메시지",
        description: "SSE 응답, 추천 질문, 피드백 등 기본 챗봇 메시지 화면",
        src: "/project-images/lg-hvac/message.webp",
        alt: "LG HVAC 챗봇 일반 메시지 화면",
      },
      {
        title: "위치정보 상호작용",
        description:
          "딜러 찾기 기능을 위해 위치 권한 요청과 좌표 전달을 처리하는 메시지",
        src: "/project-images/lg-hvac/location.webp",
        alt: "LG HVAC 챗봇 위치정보 상호작용 화면",
      },
      {
        title: "문의폼 모달",
        description: "챗봇 응답 데이터와 연결되는 Contact Us 문의폼 모달",
        src: "/project-images/lg-hvac/contact-form.webp",
        alt: "LG HVAC 챗봇 문의폼 모달 화면",
      },
    ],
  },
  {
    id: "atomy-acare",
    group: "chatbot",
    title: "애터미 에이케어 챗봇",
    period: "2025.09 ~ 2025.12",
    role: "프론트엔드 개발",
    tech: ["React", "React Native", "TailwindCSS", "Recoil"],
    link: "https://play.google.com/store/apps/details?id=com.atomy.healthcare&hl=ko",
    linkLabel: "애터미 에이케어 앱 설치 링크",
    summary:
      "앱 내 건강관리 챗봇에서 WebSocket 실시간 통신, STT 음성 입력, 습관 추천/추가/인증 액션형 메시지를 구현했습니다.",
    bullets: [
      "토큰 발급/재시도, heartbeat, 재연결 처리 등 실시간 통신 안정화",
      "채팅 히스토리 조회, 상단 스크롤 이전 대화 로드, 푸시 알림 진입 플로우 개발",
      "WebSocket 기반 STT 음성 전송/텍스트 반환 처리와 Android 네이티브 권한 브릿지 연동",
      "다국어 리소스 기반 문구 처리와 모바일 반응형 채팅 UI 구성",
    ],
    contributions: [
      "채팅 히스토리 조회와 상단 스크롤 기반 이전 대화 불러오기 기능 개발",
      "Web Audio API AnalyserNode로 음량 변화에 반응하는 STT 음파 UI 구현",
      "스트리밍 형태 답변 렌더링, 추천 질문, 복사, 좋아요/싫어요 및 상세 피드백 기능 구현",
      "습관 추천, 습관 추가, 습관 인증, 챌린지/습관 화면 이동 등 액션형 메시지 UI 구현",
      "다국어 리소스 기반 챗봇 문구 처리와 모바일 환경에 맞춘 반응형 채팅 UI 구성",
    ],
    caseStudies: [
      {
        title: "WebSocket 연결 안정화",
        problem:
          "실시간 채팅 기능 개발 초기, 정상 세션이 유지되는 상황에서도 WebSocket 연결이 간헐적으로 종료되는 문제가 발생했습니다. 이로 인해 장시간 상담 중 채팅이 중단되거나 메시지 송수신이 실패하는 상황이 발생했습니다.",
        approach:
          "백엔드 개발자와 소통하며 연결 종료 원인을 분석하고, 프론트엔드에서 heartbeat, 토큰 재발급, 자동 재연결 로직을 구현했습니다. 또한 연결 상태를 기준으로 메시지 송수신을 제어하여 비정상 종료 상황에서도 채팅을 복구할 수 있도록 구성했습니다.",
        result:
          "일시적인 연결 오류나 서버 상태 변화가 발생하더라도 사용자가 별도 조치 없이 채팅을 이어갈 수 있는 안정적인 실시간 통신 구조를 구축했습니다.",
      },
      {
        title: "앱 권한과 STT 입력 상태 연동",
        problem:
          "STT 기능은 앱 권한, WebSocket 연결 상태, 음성 녹음, 텍스트 변환 결과가 모두 정상적으로 연결되어야 동작해 상태 관리가 복잡했습니다.",
        approach:
          "Android 권한 브릿지와 음성 입력 상태를 연동하고, AnalyserNode를 활용해 입력 음량을 실시간 시각화했습니다.",
        result:
          "권한 요청부터 음성 녹음, 텍스트 변환까지의 흐름을 하나의 사용자 경험으로 통합하고 음성 입력 상태를 직관적으로 확인할 수 있도록 구현했습니다.",
      },
    ],
    integrationTitle: "앱 연동 및 실시간 WebSocket 통신 안정화",
    integrationPoints: [
      "네이티브 뒤로가기, 마이크 권한, 입력창 포커스/스크롤 등 앱 연동 처리",
      "푸시 알림 진입 시 메시지 초기화 플로우 개발",
      "토큰 발급·재시도, heartbeat, 자동 재연결을 적용해 WebSocket 메시지 송수신 안정화",
      "Android 마이크 권한 브릿지, WebSocket 음성 전송·텍스트 반환, 음성 입력 UI 상태를 하나의 STT 흐름으로 연결",
    ],
    media: [
      {
        title: "대화 화면",
        description:
          "모바일 앱 안에서 대화, 추천 질문, 피드백 UI가 이어지는 화면",
        src: "/project-images/atomy-acare/chat-1.webp",
        alt: "애터미 에이케어 챗봇 대화 화면",
      },
      {
        title: "액션형 메시지",
        description:
          "습관 추천/추가/인증 등 앱 화면 이동과 연결되는 액션형 메시지 화면",
        src: "/project-images/atomy-acare/chat-2.webp",
        alt: "애터미 에이케어 챗봇 액션형 메시지 화면",
      },
      {
        title: "이전 대화 불러오기",
        description:
          "여러 세션을 하나의 채팅창처럼 이어 보이도록 상단 무한 스크롤로 구현한 흐름",
        src: "/project-images/atomy-acare/infinite-session-scroll.gif",
        alt: "애터미 에이케어 챗봇 이전 대화 무한 스크롤",
      },
      {
        title: "STT 음성 입력",
        description:
          "WebSocket으로 음성을 전송하고 텍스트 결과를 받는 STT 입력 화면.",
      },
    ],
  },
  {
    id: "kiwoom-chatbot",
    group: "chatbot",
    featured: true,
    title: "키움증권 영웅문 챗봇",
    period: "2025.01 ~ 2025.07",
    role: "레거시 파악 및 프론트엔드 전체 개발",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "Context API", "Recharts"],
    link: "https://www.youtube.com/watch?v=3r6fSKLeTtQ",
    linkLabel: "키움증권 챗봇 소개 YOUTUBE",
    summary:
      "키움증권 영웅문 앱 WebView 안에서 동작하는 챗봇을 개발하며 봇빌더 기본 응답 한계를 보완하는 커스텀 메시지와 앱 연동 UX를 구현했습니다.",
    bullets: [
      "홈, 채팅, 메뉴, 퀵메뉴, 대화이력/검색, 폰트 크기 조절 등 챗봇 공통 UI 개발",
      "기본 답변 템플릿 9종, 커스텀 챗봇 답변 11종, RAG/RAG fallback 답변 UI 개발",
      "Redux Toolkit과 Context API를 목적별로 분리해 전역 비즈니스 상태와 UI 상태 관리",
      "영웅문 S# 앱 연동, WebView 키보드/스크롤/포스트 메시지 이벤트 최적화",
      "최소 해상도 280px 수준의 소형 디바이스(갤럭시 폴드)와 구형 iPhone 대응",
    ],
    contributions: [
      "기존 인포뱅크 챗봇 UI 코드를 분석하고 키움증권 영웅문 챗봇 UI로 확장 개발",
      "홈, 채팅, 메뉴, 퀵메뉴, 배너, 대화이력/검색, 폰트 크기 조절 등 챗봇 공통 UI 개발",
      "기본 답변 템플릿 9종과 커스텀 답변 11종, RAG 및 fallback 답변 UI 구현",
      "MY계좌정보, 계좌번호 조회, 해외주식 거래방법, 현재가/지수/환율, 공모주 등 기능 시나리오 UI 개발",
      "고객 정보, 인증번호, 주소, 연락처, 만족도 조사 등 채팅 상담 입력 폼 UI 개발",
      "Redux Toolkit과 Context API를 목적별로 분리해 상태 관리 구조 설계",
      "HTML 텍스트 검색/하이라이팅을 HOC 패턴으로 구성해 여러 메시지 컴포넌트에서 재사용",
      "Recharts 기반 차트 메시지와 캐러셀/이미지 크기 조절 메시지 구현",
      "중복 CSS와 구조를 정리해 약 3,000줄 규모의 스타일 코드를 800줄 수준으로 리팩토링",
    ],
    caseStudies: [
      {
        title: "봇빌더 기본 응답 구조 확장",
        problem:
          "기존 봇빌더는 텍스트와 버튼 중심의 응답을 기본으로 제공했기 때문에, 계좌조회·현재가차트처럼 증권 업무에 필요한 시나리오형 UI를 표현하기 어려웠습니다. 또한 답변 내 강조 표현이나 화면 경로 안내처럼 여러 답변에 공통으로 필요한 UI도 기본 에디터 기능만으로는 처리하기 어려웠습니다.",
        approach:
          "챗봇 기획자 및 서비스 기획자와 협업하여 업무 시나리오를 분석하고, 계좌조회·현재가차트 등 12종의 시나리오별 커스텀 메시지 타입을 정의해 렌더링 구조를 구현했습니다. 별도로 봇빌더 텍스트 에디터에서 커스텀 태그를 사용할 수 있도록 처리하여 형광펜 강조 효과, 답변별 화면 경로 안내 모달 등 공통 UI 표현도 함께 지원했습니다.",
        result:
          "봇빌더의 기본 텍스트·버튼 응답 한계를 넘어 증권 업무에 필요한 시나리오형 메시지와 공통 UI 표현을 챗봇 안에서 제공할 수 있는 구조를 구축했습니다.",
      },
      {
        title: "레거시 스타일 구조 개선",
        problem:
          "초기 영웅문 챗봇은 봇빌더 기본 웹챗 코드를 기반으로 개발되어 전체 스타일이 하나의 CSS 파일에 집중되어 있었습니다. 약 3,000줄 이상의 스타일 코드 안에 중복 규칙과 깊은 선택자 의존성이 많아, 작은 UI 변경도 영향 범위를 예측하기 어려운 상태였습니다.",
        approach:
          "기존 스타일 구조를 분석해 중복 규칙을 제거하고, 과도하게 깊은 선택자 구조를 정리했습니다. 공통 스타일과 컴포넌트별 책임을 기준으로 스타일을 재분리하고, 프로젝트 폴더 구조도 기능 단위로 정리했습니다.",
        result:
          "약 3,000줄 규모의 CSS를 800줄 수준으로 줄였으며, UI 변경 시 수정 위치와 영향 범위를 더 명확하게 파악할 수 있는 구조로 개선했습니다.",
      },
      {
        title: "Android WebView 입력 환경 대응",
        problem:
          "Android WebView 환경에서 키패드 노출 시 채팅 화면이 의도보다 과도하게 축소되는 문제가 발생했습니다. 단순 UI 이슈로 보였으나 화면 크기 계산이 앱 내부 로직과 연관되어 있어 프론트엔드만으로는 원인을 파악할 수 없는 상황이었습니다.",
        approach:
          "앱 개발자와 함께 화면 크기 계산 과정을 추적하며 WebView 관련 설정값을 단계적으로 검증했습니다. 분석 과정에서 기존 영웅문 앱 구조의 상단 헤더 높이가 화면 계산에 포함되는 레거시 로직이 남아있는 것을 확인했고, 현재 전체 화면 WebView 구조에 맞지 않는 계산 로직을 제거하도록 반영했습니다.",
        result:
          "Android WebView에서 키패드 노출 시 발생하던 과도한 화면 축소 문제를 해결했으며, 다양한 기기 환경에서도 안정적으로 채팅 화면을 사용할 수 있도록 개선했습니다..",
      },
    ],
    integrationTitle: "WebView 연동 및 모바일 환경 대응",
    integrationPoints: [
      "봇빌더 버튼의 paraValue를 키움증권 앱 함수와 연결해 상세·팝업·메뉴 화면 이동 포스트 메시지 연동",
      "최소화 이후 재접속 시 대화 복구 처리",
      "WebView iOS/Android 입력창 포커스, 키패드 높이, 스크롤 이슈 분석 및 대응",
      "웹 이탈 시 키패드 상호작용 초기화와 에러 핸들링 처리",
      "앱의 WebView 이벤트를 확인하며 최소 280px 해상도와 구형 iPhone까지 모바일 입력 UX 조정",
    ],
    media: [
      {
        title: "홈",
        description: "영웅문 앱 WebView 안에서 동작하는 챗봇 홈 화면",
        src: "/project-images/kiwoom/home.webp",
        alt: "키움증권 영웅문 챗봇 홈 화면",
      },
      {
        title: "메뉴",
        description:
          "퀵메뉴, 하단 메뉴, 화면 이동 등 앱 챗봇 탐색을 위한 메뉴 화면",
        src: "/project-images/kiwoom/menu.webp",
        alt: "키움증권 영웅문 챗봇 메뉴 화면",
      },
      {
        title: "차트 메시지",
        description:
          "현재가, 국내/해외지수, 환율 등 증권 데이터를 표현하는 차트형 메시지",
        src: "/project-images/kiwoom/chart-message.webp",
        alt: "키움증권 영웅문 챗봇 차트 메시지 화면",
      },
      {
        title: "커스텀 메시지",
        description:
          "봇빌더 기본 응답으로 불가능한 기능 시나리오를 처리하기 위해 구현한 커스텀 메시지",
        src: "/project-images/kiwoom/custom-message.webp",
        alt: "키움증권 영웅문 챗봇 커스텀 메시지 화면",
      },
    ],
  },
  {
    id: "cosbot",
    group: "chatbot",
    title: "식약처 AI 코스봇",
    period: "2024.07 ~ 2024.08",
    role: "프론트엔드 전체 개발",
    tech: ["Next.js", "React", "TailwindCSS", "Recoil"],
    link: "http://aiconsulting.helpcosmetic.or.kr/",
    linkLabel: "AI 코스봇 서비스 페이지",
    summary:
      "식약처 AI 코스봇의 모바일 기반 챗봇 웹 페이지를 개발하며 질문 진입, 응답 로딩, 타이핑 답변, 평가 흐름을 구현했습니다.",
    bullets: [
      "모바일 기반 챗봇 웹 페이지 UI 전체 개발",
      "스트리밍 응답 처리 API 연동과 결과 텍스트 타이핑 인터랙션 구현",
      "답변 로딩, 결과 출력, 평가 화면 등 챗봇 기본 사용 흐름 개발",
    ],
    contributions: [
      "모바일 기반의 챗봇 웹 페이지 UI 전체 개발",
      "질문 진입부터 답변 조회와 평가 제출까지 이어지는 모바일 사용자 흐름 구성",
    ],
    caseStudies: [
      {
        title: "스트리밍 응답과 타이핑 UI 동기화",
        problem:
          "서버 응답을 기다리는 상태와 결과를 순차적으로 보여주는 상태가 분리되지 않으면 빈 화면이나 중복 출력이 발생할 수 있었습니다.",
        approach:
          "로딩, 스트리밍 수신, 문자 단위 출력, 완료 상태를 구분하고 수신된 결과를 타이핑 UI 상태와 순서대로 연결했습니다.",
        result:
          "모바일 화면에서 응답 대기부터 답변 출력까지 상태가 자연스럽게 전환되는 대화 흐름을 구현했습니다.",
      },
    ],
    integrationTitle: "스트리밍 응답 및 화면 상태 처리",
    integrationPoints: [
      "스트리밍 응답 API와 로딩·응답 출력·오류 상태를 연결하는 메시지 흐름 구현",
      "모바일 화면에서 결과 텍스트를 문자 단위로 순차 출력하는 타이핑 인터랙션 구현",
    ],
    media: [
      {
        title: "홈",
        description: "AI 코스봇 모바일 챗봇 진입 화면",
        src: "/project-images/cosbot/home.webp",
        alt: "AI 코스봇 홈 화면",
      },
      {
        title: "대화 로딩",
        description: "질문 전송 후 답변을 기다리는 로딩 상태 화면",
        src: "/project-images/cosbot/loading.webp",
        alt: "AI 코스봇 대화 로딩 화면",
      },
      {
        title: "답변",
        description:
          "스트리밍 응답과 문자 단위 타이핑 인터랙션이 적용된 답변 화면",
        src: "/project-images/cosbot/answer.webp",
        alt: "AI 코스봇 답변 화면",
      },
      {
        title: "평가",
        description: "챗봇 답변 이후 사용자 평가로 이어지는 화면",
        src: "/project-images/cosbot/feedback.webp",
        alt: "AI 코스봇 평가 화면",
      },
    ],
  },
  {
    id: "hancom-editup",
    group: "document",
    title: "한컴오피스 EditUp AI 교열 애드온",
    period: "2025.08 ~ 2026.02",
    role: "한컴오피스 환경 최적화 및 교열 기능 프론트엔드 개발",
    tech: ["React", "TypeScript", "TailwindCSS", "Recoil", "HwpObject API"],
    summary:
      "한컴 문서 안에서 AI 교열 결과를 비교하고 적용하는 애드온을 개발했습니다.",
    bullets: [
      "HwpObject API 기반 문서 스캔, 텍스트 선택, 교정 문구 적용 구현",
      "문단 위치, Shift+Enter, 제어문자 처리와 문단 위치 캐싱으로 조회 부담 개선",
      "문단/벌크 단위 교열 요청, 결과 병합, 단어 단위 diff 표시 구현",
      "표, 각주/미주, 도형/메모 포함 문서의 선택/교열 이슈 대응",
    ],
    contributions: [
      "HwpObject API 기반 문서 스캔, 텍스트 선택, 교정 문구 적용 기능 구현",
      "문서를 문단/벌크 단위로 분리해 교열 API 요청 및 결과 병합 구조 구현",
      "원문과 교열 결과를 단어 단위 diff로 비교해 추가/삭제/변경 상태 표시",
      "한컴 문서의 문단 위치, Shift+Enter, 제어문자 처리 로직 개선",
      "문서 선택 시 불필요한 전체 문서 조회를 줄이고 문단 위치 캐싱으로 성능 최적화",
    ],
    caseStudies: [
      {
        title: "HwpObject 선택 위치 불일치 원인 분석 및 보정",
        problem:
          "웹에서 계산한 교열 대상 위치와 HwpObject API가 실제로 선택하는 위치가 일치하지 않아 다른 문장이 선택되거나 교정이 잘못 적용되는 문제가 발생했습니다. 한글 2024 애드온 초기 버전이었기 때문에 관련 문서와 사례가 없었습니다.",
        approach:
          "다양한 문서 유형을 직접 생성하며 HwpObject API의 선택 동작을 반복적으로 검증했습니다. 분석 과정에서 Shift+Enter, 제어문자, 문단 구조에 따라 위치 계산이 달라지는 것을 확인했고, 문단 위치 캐싱 및 offset 보정 로직을 설계하여 실제 문서 위치와 교열 위치를 맞추도록 구현했습니다.",
        result:
          "교열 결과의 선택 위치 정확도를 개선했으며, HwpObject API의 위치 계산 차이로 인해 발생하던 오선택 문제를 줄일 수 있었습니다.",
      },
      {
        title: "HwpObject API 복합 문서 이슈 분석 및 개선",
        problem:
          "표, 각주·미주, 도형, 메모가 포함된 문서는 일반 문서와 구조가 달라 HwpObject API의 문서 읽기, 선택, 교정 적용 과정에서 예상과 다른 동작이 발생했습니다. 특히 일부 기능은 공식 문서만으로 원인을 파악하기 어려웠고, 실제 문서 구조에 따라 서로 다른 결과가 나타났습니다.",
        approach:
          "문제 문서를 직접 분해하고 재구성하며 표, 각주·미주, 도형, 메모 등 문서 요소별 동작을 반복적으로 검증했습니다. 문단 개수, 제어문자, 문서 구조 차이에 따른 API 동작을 분석해 예외 처리 로직을 보완했으며, 재현 가능한 테스트 문서를 제작하여 한컴 개발팀과 지속적으로 공유했습니다. 메일과 Jira를 통해 원인을 검증하고 API 동작 오류 여부를 함께 확인하며 개선 방향을 협의했습니다.",
        result:
          "복합 문서에서 발생하는 교열 및 선택 오류 원인을 식별하고 대응 범위를 확대했으며, 일부 이슈는 재현 케이스 제공을 통해 한컴 측 API 개선으로 이어질 수 있도록 지원했습니다.",
      },
      {
        title: "대용량 문서 교열 처리 구조 개선",
        problem:
          "교열 기능 초기 구현에서는 문서 선택, 교열 요청, 결과 적용 과정마다 전체 문서를 반복 조회하고 위치 정보를 다시 계산하고 있었습니다. 문서가 길어질수록 HwpObject API 호출과 문서 파싱 비용이 증가해 응답 지연과 처리 부담이 커지는 문제가 있었습니다..",
        approach:
          "문단 위치 정보를 캐싱하여 반복 계산을 제거하고, 전체 문서를 한 번에 처리하는 대신 문단 및 벌크 단위로 분할하여 교열 요청을 수행하도록 구조를 변경했습니다. 이후 교열 결과를 병합하여 기존 기능은 유지하면서 처리 비용을 줄일 수 있도록 개선했습니다.",
        result:
          "불필요한 전체 문서 조회와 위치 재계산을 줄여 긴 문서에서도 교열 기능이 안정적으로 동작할 수 있는 처리 구조를 구축했습니다.",
      },
    ],
    integrationTitle: "문서 API 제약 및 예외 대응",
    integrationPoints: [
      "한컴의 실제 선택 위치와 원문 위치가 어긋나는 문제를 offset 보정 로직으로 개선",
      "문단 개수 불일치, 스트리밍 오류, 중복 실행 등 예외 상황 처리",
      "표, 각주/미주, 도형/메모 포함 문서에서 발생하는 교열/선택 이슈 대응",
    ],
    media: [
      {
        title: "전체 화면",
        description:
          "한컴오피스 문서 안에서 AI 교열 애드온이 동작하는 전체 화면",
        src: "/project-images/hancom/overview.webp",
        alt: "한컴오피스 EditUp AI 교열 애드온 전체 화면",
      },
      {
        title: "교열 상세",
        description:
          "원문과 교열 결과 diff, 추가/삭제/변경 표시가 보이는 상세 화면",
        src: "/project-images/hancom/detail.webp",
        alt: "한컴오피스 EditUp AI 교열 애드온 상세 화면",
      },
    ],
  },
  {
    id: "bublitt",
    group: "chatbot",
    featured: true,
    title: "버블잇 챗봇 빌더",
    period: "2024.06 ~ 2024.12",
    role: "프론트엔드 유지보수 / 기능 개발",
    tech: [
      "Next.js",
      "StyledComponent",
      "Recoil",
      "Yarn Workspace",
      "Recharts",
    ],
    link: "https://bublitt.com/",
    linkLabel: "버블잇 서비스 소개 페이지",
    summary:
      "챗봇 빌더 Admin/SDK를 유지보수하며 프로젝트 설정, 답변 관리, 데이터 분석, 지식 업로드, SDK 기능을 개발하고 모노레포 빌드 속도 개선에 기여했습니다.",
    bullets: [
      "중복 UI 컴포넌트 분리와 재사용 가능한 단위 컴포넌트 리팩터링",
      "레거시 코드 개선, 이미지 최적화, 미사용 라이브러리 제거",
      "챗봇 통계 페이지, 지식 업로드(url/pdf) 페이지 개발",
    ],
    contributions: [
      "젠틀파이 챗봇 빌더 버블잇 유지보수",
      "챗봇 SDK 개발 및 유지보수",
      "프로젝트 설정, 답변 관리, 관리자 설정 등 챗봇 빌더 운영 화면 유지보수",
      "Recharts 기반 챗봇 통계 페이지 개발",
      "중복 UI 컴포넌트를 재사용 가능한 단위로 분리하고 레거시 코드 구조 개선",
      "분산된 모달 관리 로직을 공통 훅 기반으로 정리하고 과도한 전역 상태 의존성 완화",
      "스켈레톤 노출 시점과 렌더링 흐름을 조정해 화면 전환 경험 개선",
    ],
    caseStudies: [
      {
        title: "모노레포 빌드 성능 개선",
        problem:
          "Admin, SDK, 고객사 프로젝트가 함께 관리되는 모노레포 환경에서 사용하지 않는 라이브러리, 중복 컴포넌트, 레거시 코드가 누적되면서 빌드 시간이 증가했었습니다.",
        approach:
          "의존성 사용 현황을 점검하여 미사용 라이브러리를 제거하고, 중복 컴포넌트를 공통화했습니다. 또한 이미지 리소스를 최적화하고 레거시 코드를 정리하여 빌드 과정의 불필요한 처리 비용을 줄였습니다.",
        result:
          "모노레포 빌드 속도를 30% 이상 개선했으며, 공통 컴포넌트 관리 구조를 단순화해 이후 기능 확장 및 유지보수 부담을 줄였습니다.",
      },
      {
        title: "모달 상태 관리 구조 개선",
        problem:
          "운영 기능이 추가되면서 화면마다 모달 상태와 제어 로직이 개별적으로 구현되어 있었습니다. 또한 모달 열림 여부를 전역 상태로 관리하는 경우가 많아 특정 기능 수정 시 실제 영향을 받는 화면과 상태를 추적하기 어려운 상황이었습니다.",
        approach:
          "반복적으로 사용되는 모달 제어 패턴을 분석하여 공통 훅 기반 구조로 통합했습니다. 또한 모달 표시 여부와 데이터 상태를 분리하고, 전역 상태로 관리할 필요가 없는 값은 지역 상태로 이동하여 상태 책임을 재정리했습니다.",
        result:
          "모달 기능 추가 및 수정 시 변경 범위를 예측하기 쉬운 구조로 개선했으며, 신규 화면에서도 동일한 제어 방식을 재사용할 수 있도록 표준화했습니다.",
      },
      {
        title: "로딩 피드백 개선",
        problem:
          "데이터 요청과 화면 렌더링 시점이 일치하지 않아 일부 화면에서 스켈레톤 UI가 늦게 표시되거나 짧게 노출된 뒤 사라지는 현상이 발생했습니다.",
        approach:
          "비동기 데이터 요청 흐름과 렌더링 순서를 분석하여 스켈레톤 노출 조건과 상태 전환 시점을 재구성했습니다.",
        result:
          "화면 진입 시 로딩 상태가 일관되게 표시되도록 개선하여 사용자에게 현재 처리 상태를 명확하게 전달할 수 있도록 했습니다.",
      },
    ],
    integrationTitle: "모노레포 운영 및 빌드 최적화",
    integrationPoints: [
      "Admin, SDK, 고객사 프로젝트가 함께 움직이는 모노레포 구조 관리",
      "이미지 최적화와 미사용 라이브러리 제거로 모노레포 빌드 속도 30% 이상 개선",
      "지식 업로드 URL/PDF 기능을 운영 화면에 연결",
    ],
    media: [
      {
        title: "프로젝트 설정",
        description:
          "챗봇 프로젝트 단위 설정을 관리하며 운영자가 봇 동작 범위를 조정하는 화면",
        src: "/project-images/bublitt/project-settings.webp",
        alt: "버블잇 프로젝트 설정 화면",
      },
      {
        title: "데이터 분석",
        description:
          "Recharts 기반 통계와 챗봇 사용 데이터를 확인하는 분석 화면",
        src: "/project-images/bublitt/analytics.webp",
        alt: "버블잇 데이터 분석 화면",
      },
      {
        title: "답변 관리",
        description:
          "운영자가 챗봇 답변을 관리하고 수정할 수 있는 답변 관리 화면",
        src: "/project-images/bublitt/answer-management.webp",
        alt: "버블잇 답변 관리 화면",
      },
      {
        title: "관리자 설정",
        description: "서비스 운영 권한과 관리자 설정을 다루는 화면",
        src: "/project-images/bublitt/admin-settings.webp",
        alt: "버블잇 관리자 설정 화면",
      },
    ],
  },
  {
    id: "neulpet",
    group: "vetflux",
    featured: true,
    title: "늘펫",
    period: "2022.08 ~ 2024.01",
    role: "풀스택 개발",
    tech: [
      "React",
      "Next.js",
      "Firebase",
      "Firestore",
      "Firebase Functions",
      "Nest.js",
      "TailwindCSS",
      "Redux Toolkit",
      "react-virtualized",
    ],
    link: "https://www.vetflux.net/",
    linkLabel: "늘펫 서비스 소개 페이지",
    summary:
      "동물병원의 고객 관리, 예약, 상담, 전화 응대 업무를 하나의 서비스에서 처리할 수 있도록 지원하는 SaaS 플랫폼입니다. Firestore 기반 실시간 메신저, 예약·설문·CTI 연동 기능을 개발했으며, 프론트엔드 아키텍처 개선, Firebase Functions 기반 업무 자동화, 대용량 데이터 처리 최적화에도 참여했습니다.",
    bullets: [
      "초기 기획 미팅, 개발 검토, 일정 산정, 기능 개발, 리뷰, 사용자 피드백 정리까지 참여",
      "Firestore Snapshot 기반 실시간 메신저와 병원 업무 연계 기능 개발",
      "Toast UI 기반 예약 캘린더, 고객·그룹 관리, 엑셀 업로드, 문진·설문 기능 개발",
      "기능 단위 폴더 구조 도입과 점진적 리팩토링으로 프론트엔드 유지보수성 개선",
      "Firestore 조회 구조, 엑셀 배치 업로드, 대용량 리스트 렌더링 성능 최적화",
      "세종텔레콤 CTI 및 Firebase Functions 기반 전화 수신·알림 기능 개발",
    ],
    contributions: [
      "초기 기획 검토, 구현 가능성 확인, 일정 산정, 개발, 사용자 피드백 기반 운영 개선에 참여하고 2주 단위 스프린트 리딩 수행",
      "늘펫 주요 기능의 프론트엔드 개발을 전담하고 Firebase Functions와 Nest.js 기반 백엔드 일부 개발",
      "Firestore Snapshot 기반 채팅 목록과 실시간 메신저 구현",
      "Toast UI 기반 예약 등록·조회·수정 캘린더와 일정 리스트 구현",
      "고객 정보 리스트와 고객 그룹 관리 기능 개발",
      "보호자에게 발송하는 문진·설문 생성과 결과 리스트·상세 응답 조회 화면 개발",
      "앱 개발자 출신 리드와 클린 아키텍처 원칙을 적용해 기능과 책임을 분리하고 의존성 방향을 정리하는 프론트엔드 리팩토링 수행",
      "Firestore 데이터 증가에 따른 조회 성능 문제를 분석하고 쿼리 구조 최적화",
      "고객 정보 엑셀 파싱·검증·변환과 Firebase Batch Write 기반 대량 업로드 기능 구현",
      "react-virtualized를 적용해 저사양 PC의 대용량 리스트 렌더링 성능 개선",
    ],
    technicalPoints: [
      "React, Next.js, Firebase, Nest.js, TailwindCSS, Redux Toolkit 기반 개발",
      "Firestore Snapshot 기반 실시간 구독 구조로 채팅 목록과 메시지 데이터 반영",
      "Firestore 쿼리 최적화를 통해 대용량 데이터 조회 성능 개선",
      "Firebase Batch Write 기반 대량 데이터 업로드 처리",
      "Firebase Functions를 활용한 CTI·예약·알림 이벤트 처리",
      "클린 아키텍처 원칙에 따라 기능과 책임을 분리하고 의존성 방향을 정리하는 구조 리팩토링 수행",
      "react-virtualized 적용을 통한 대용량 리스트 렌더링 최적화",
      "Nest.js 일부 백엔드 기능 유지보수 참여",
      "Toast UI 기반 일정표 구성",
    ],
    integrationTitle: "외부 시스템 연동 및 운영 기능",
    integrationPoints: [
      "세종텔레콤 CTI와 외부 API, Firebase Functions를 연동해 전화 수신 이벤트를 서비스로 전달",
      "전화 수신 시 고객 정보 조회, 상담 팝업 표시, 전화 로그 기록으로 이어지는 흐름 구현",
      "예약·방문·전화 이벤트 발생 시 알림톡과 웹푸시를 전송하고 서비스 로그 기록",
      "팔로업, 자동 응답, 고객 정보, 예약 생성, 일정 저장 이벤트가 실시간 메신저 안에서 이어지도록 연동",
      "PWA 기반 웹푸시와 알림 로그, 시스템 로그 화면 구현",
    ],
    caseStudies: [
      {
        title: "프론트엔드 아키텍처 개선",
        problem:
          "기존 프로젝트는 화면, 상태, 데이터 접근 코드가 단일 폴더 중심으로 섞여 있어 기능을 찾기 어렵고 변경 시 다른 영역에 미치는 영향을 파악하기 어려웠습니다.",
        approach:
          "앱 개발자 출신 리드와 클린 아키텍처 원칙을 기반으로 프론트엔드 구조를 설계했습니다. 기능과 책임을 기준으로 UI, 상태 관리, 비즈니스 로직, 데이터 접근 영역을 분리하고 의존성 방향을 정리했으며, 기존 코드를 새로운 구조로 점진적으로 이동했습니다.",
        result:
          "각 영역의 책임과 수정 위치가 명확해져 코드 탐색성과 유지보수성이 개선됐고, 기능 추가나 변경 시 영향을 받는 범위를 더 쉽게 파악할 수 있게 됐습니다.",
      },
      {
        title: "Firestore 조회 성능 최적화",
        problem:
          "고객 데이터가 증가하면서 일부 조회 화면에서 Firestore 호출이 과도하게 발생해 데이터 로딩 부담이 커졌습니다.",
        approach:
          "실제 조회 패턴을 분석하고 where 조건과 데이터 접근 방식을 조정해 불필요한 문서 조회를 줄였습니다.",
        result:
          "대용량 고객 데이터 환경에서도 주요 조회 기능이 안정적으로 동작할 수 있도록 쿼리 구조를 개선했습니다.",
      },
      {
        title: "대량 고객 데이터 업로드 안정화",
        problem:
          "엑셀로 다수의 고객을 등록할 때 입력값 오류와 Firestore 쓰기 제한으로 일부 데이터만 저장되거나 업로드가 실패할 가능성이 있었습니다.",
        approach:
          "엑셀 데이터의 파싱, 검증, 변환 단계를 분리하고 Firestore 쓰기 제한을 고려해 Firebase Batch Write 기반으로 나누어 저장하도록 구현했습니다.",
        result:
          "대량 고객 등록 과정의 실패 가능성을 낮추고 운영자가 반복 입력 없이 고객 데이터를 등록할 수 있도록 지원했습니다.",
      },
      {
        title: "저사양 환경의 리스트 렌더링 개선",
        problem:
          "병원 데스크의 저사양 PC에서 고객과 설정 데이터가 많은 화면을 렌더링할 때 스크롤과 화면 반응이 느려졌습니다.",
        approach:
          "react-virtualized를 적용해 현재 화면에 필요한 항목만 렌더링하도록 변경하고 리스트 렌더링 부담을 줄였습니다.",
        result:
          "대량 데이터가 있는 화면에서도 스크롤 성능과 조작 반응을 유지할 수 있도록 개선했습니다.",
      },
      {
        title: "CTI 전화 수신과 상담 흐름 연동",
        problem:
          "외부 전화 수신 이벤트와 서비스의 고객 정보가 분리되어 있어 전화를 받은 뒤 고객을 다시 검색하고 상담 기록을 남겨야 했습니다.",
        approach:
          "세종텔레콤 CTI, 외부 API, Firebase Functions를 연동해 전화 이벤트를 전달하고 고객 조회, 상담 팝업, 로그 기록으로 이어지도록 구현했습니다.",
        result:
          "전화 수신부터 고객 확인과 상담 기록까지 병원 데스크의 실제 전화 응대 흐름을 서비스 안에서 처리할 수 있게 했습니다.",
      },
    ],
    media: [
      {
        title: "홈",
        description:
          "알림 로그와 시스템 로그를 통해 병원 운영 상태를 확인하는 홈 화면",
        src: "/project-images/neulpet/home.webp",
        alt: "늘펫 홈 화면",
      },
      {
        title: "메신저",
        description:
          "Firestore Snapshot 기반 채팅 목록과 실시간 메시지 응대 화면",
        src: "/project-images/neulpet/messenger-1.webp",
        alt: "늘펫 메신저 화면",
      },
      {
        title: "메신저 업무 액션",
        description:
          "팔로업, 예약, 알림톡 전송 등 병원 업무로 이어지는 메신저 화면",
        src: "/project-images/neulpet/messenger-2.webp",
        alt: "늘펫 메신저 업무 액션 화면",
      },
      {
        title: "보호자용 웹챗",
        description: "동물병원 고객에게 제공되는 보호자용 웹 채팅 화면",
        src: "/project-images/neulpet/guardian-webchat.webp",
        alt: "늘펫 보호자용 웹챗 화면",
      },
      {
        title: "일정 관리",
        description: "수기 예약 관리를 줄이기 위한 일정표와 예약 리스트 화면",
        src: "/project-images/neulpet/schedule.webp",
        alt: "늘펫 일정 관리 화면",
      },
      {
        title: "고객 정보",
        description: "고객 정보 리스트와 그룹 관리 화면",
        src: "/project-images/neulpet/customer-1.webp",
        alt: "늘펫 고객 정보 화면",
      },
      {
        title: "고객 상세",
        description: "고객 데이터를 확인하고 병원 응대에 활용하는 관리 화면",
        src: "/project-images/neulpet/customer-2.webp",
        alt: "늘펫 고객 상세 화면",
      },
      {
        title: "전화 안내",
        description:
          "세종텔레콤 CTI 연동 기반 전화 수신, 알림톡, 로그 관리 화면",
        src: "/project-images/neulpet/cti.webp",
        alt: "늘펫 전화 안내 화면",
      },
      {
        title: "설정",
        description:
          "복잡한 챗봇 설정과 운영 설정을 관리하며 렌더링 최적화가 필요했던 화면",
        src: "/project-images/neulpet/settings.webp",
        alt: "늘펫 설정 화면",
      },
    ],
  },
  {
    id: "daewoongpet",
    group: "vetflux",
    title: "대웅펫 e-CRF",
    period: "2023.11 ~ 2023.12",
    role: "프론트엔드 개발",
    tech: ["Next.js", "React", "TailwindCSS", "Socket.IO"],
    summary:
      "대웅펫 수의사 임상시험 eCRF에서 관리자 문진 생성, 수의사 답변, 보호자 메신저 화면을 개발했습니다.",
    bullets: [
      "관리자 문진 생성 페이지와 사용자 답변 페이지 개발",
      "수의사와 보호자 간 Socket.IO 기반 실시간 메신저 구현",
      "도메인 제공 지연 중 Vercel 테스트 배포 및 관리",
      "요구 명세 외 UI/UX 누락 가능성까지 자체 테스트해 외주 검수 수정 요청 없이 통과",
    ],
    contributions: [
      "도메인 제공 지연 상황에서 Vercel 테스트 배포를 운영해 검수 가능한 환경 유지",
    ],
    caseStudies: [
      {
        title: "프로젝트 인수 및 개발 안정화",
        problem:
          "프로젝트 진행 중 기존 외주 개발자가 이탈하면서 일부 기능만 구현된 상태로 개발이 중단되었습니다. 또한 사용되지 않는 라이브러리와 불필요한 구조가 혼재되어 있었고, 남은 기간 내에 기능 구현과 검수를 모두 완료해야 하는 상황이었습니다.",
        approach:
          "기존 코드를 빠르게 분석하여 프로젝트 구조와 개발 컨벤션을 파악하고, 사용되지 않는 보일러플레이트와 불필요한 코드를 정리했습니다. 또한 프론트엔드 개발자 간 역할을 분담하고 개발 범위를 조율하며 일정 내 기능 구현과 검수 준비를 진행했습니다.",
        result:
          "단기간 내 프로젝트를 안정화하고 남은 기능 개발을 완료했으며, 담당 영역이 1차 외주 평가에서 추가 수정 요청 없이 검수를 통과했습니다.",
      },
    ],
    integrationTitle: "업무 흐름 구현 및 품질 검증",
    integrationPoints: [
      "관리자 문진 생성·수의사 답변 확인, 보호자 문진 응답, Socket.IO 기반 수의사·보호자 메신저 흐름 연결",
      "요구 명세 외 UI/UX 누락 가능성까지 자체 테스트해 외주 검수 수정 요청 없이 통과",
    ],
    media: [
      {
        title: "e-CRF 메인",
        description: "수의사 임상시험 문진과 답변 흐름을 확인하는 메인 화면",
        src: "/project-images/daewoongpet/main.webp",
        alt: "대웅펫 e-CRF 메인 화면",
      },
      {
        title: "보호자 챗봇",
        description: "수의사와 보호자 간 소통을 위한 보호자용 챗봇 화면",
        src: "/project-images/daewoongpet/guardian-chatbot.webp",
        alt: "대웅펫 보호자 챗봇 화면",
      },
    ],
  },
];
