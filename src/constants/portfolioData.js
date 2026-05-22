export const profile = {
  name: "하상원",
  role: "Frontend Developer",
  summary:
    "관리자용 웹 서비스와 대화형 UI 중심의 프론트엔드 개발 이력을 정리했습니다.",
  email: "305243@naver.com",
  github: "https://github.com/hasangwon",
  blog: "https://bitcoins.tistory.com/",
  experience: "약 4년 3개월",
};

export const sections = [
  {
    id: "hero",
    index: "01",
    label: "소개",
    prompt: "소개와 대표 프로젝트 바로가기를 확인합니다.",
  },
  {
    id: "overview",
    index: "02",
    label: "작업 방식",
    prompt: "작업 방식과 강점 요약을 확인합니다.",
  },
  {
    id: "experience",
    index: "03",
    label: "경력",
    prompt: "회사별 담당 범위와 역할을 확인합니다.",
  },
  {
    id: "chatbot-projects",
    index: "04",
    label: "챗봇 프로젝트",
    prompt: "챗봇 프로젝트의 구현 범위와 결과물을 확인합니다.",
  },
  {
    id: "general-projects",
    index: "05",
    label: "일반 프로젝트",
    prompt: "일반 프로젝트의 구현 범위와 결과물을 확인합니다.",
  },
  {
    id: "contact",
    index: "06",
    label: "연락처",
    prompt: "연락처와 외부 채널을 확인합니다.",
  },
];

export const strengths = [
  {
    title: "대화형 UI",
    body: "SSE/WebSocket 기반 스트리밍 답변, 타이핑 상태, 추천 질문, 피드백, 캐러셀/테이블 메시지처럼 챗봇에서 반복적으로 어려워지는 UI 상태를 다뤘습니다.",
    fill: [
      "스트리밍, 재시도, 세션 만료처럼 대화 흐름을 끊는 상태를 분리해 관리했습니다.",
      "입력, 스크롤, 로딩 상태를 함께 설계해 사용자가 답변 대기 흐름을 잃지 않게 했습니다.",
    ],
  },
  {
    title: "앱/WebView 대응",
    body: "모바일 웹과 앱 WebView에서 입력창 포커스, 키보드, 스크롤, 네이티브 브릿지 호출 문제를 프로젝트별로 분석하고 대응했습니다.",
    fill: [
      "키보드, 포커스, 스크롤, 앱 함수 호출 타이밍이 겹치는 구간을 실제 디바이스 기준으로 확인했습니다.",
      "웹 상태와 네이티브 동작이 충돌하지 않도록 뒤로가기, 권한 요청, 화면 이동 흐름을 분기했습니다.",
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
    id: "gentlepie",
    name: "젠틀파이",
    period: "2024.06 ~ 현재",
    role: "챗봇 빌더/SDK 및 고객사 챗봇 프론트엔드",
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
    details: [
      {
        label: "문제",
        text: "객실과 골프 예약은 조회, 변경, 취소, 대기, 인증 상태가 함께 엮여 단순 텍스트 답변만으로는 처리하기 어려웠습니다.",
      },
      {
        label: "접근",
        text: "브리티가 내려주는 form 메시지를 scenarioName 기준으로 분기하고, 객실/골프/쿠폰 도메인별 커스텀 메시지 컴포넌트를 분리해 유지보수 지점을 명확히 했습니다.",
      },
      {
        label: "결과",
        text: "예약 변경과 취소처럼 단계가 긴 업무를 챗봇 메시지 안에서 이어지게 구현했고, 비개발자 신규 담당자를 위한 인수인계서 작성과 공유까지 진행했습니다.",
      },
    ],
    impactPoints: [
      "브리티 챗봇 빌더와 연동해 기본 메시지와 프론트 커스텀 메시지가 함께 동작하는 구조 구현",
      "객실 예약 조회/변경/취소, 골프 예약 조회/코스 변경/취소/노캐디/리무진 등 도메인별 시나리오 UI 구현",
      "신규 담당자가 구조와 수정 지점을 파악할 수 있도록 폴더 구조, scenarioName 매핑, 자주 수정하는 위치, 검증 체크리스트를 인수인계서로 정리하고 공유",
    ],
    contributions: [
      "채팅 세션 발급, 메시지 전송, 로딩/타이핑 상태, 자동 스크롤 등 챗봇 기본 UX 전반 구현",
      "로그인/로그아웃, 로그인 복구, 세션 만료 시 신규 세션 재발급 플로우 구현",
      "객실 예약 조회, 객실 타입 변경, 투숙객 변경, 예약 취소 등 호텔 시나리오 UI 개발",
      "골프 예약 조회, 코스/시간 변경, 노캐디/리무진 신청 등 골프 시나리오 UI 개발",
      "비개발자 신규 담당자를 위한 프로젝트 구조와 수정 지점 중심 인수인계 문서 작성",
    ],
    technicalPoints: [
      "React, TypeScript, TailwindCSS, Jotai 기반으로 프로젝트 프론트엔드 전체 개발",
      "브리티 기본 메시지는 text/button/linkButton 중심으로 처리하고, 화면 상태가 필요한 업무는 form 메시지의 scenarioName 기준으로 커스텀 컴포넌트 분기",
      "Markdown 렌더링 구간에 DOMPurify sanitizing을 적용해 챗봇 답변 표시 구간의 XSS 위험 완화",
      "쿠폰 조회, 예약 내역 리스트, 입력 폼, 선택형 버튼, 빈 상태 메시지 등 공통 시나리오 컴포넌트 구성",
    ],
    integrationPoints: [
      "로그인 시 이전 질문을 자동 재전송해 인증 전후의 질문 흐름을 연결",
      "세션 만료 상황에서 신규 세션을 재발급해 사용자가 대화 흐름을 이어갈 수 있도록 처리",
      "예약 도메인의 조회, 변경, 취소 흐름을 챗봇 메시지 안에서 단계별로 처리",
      "운영 중 주의가 필요한 외부 링크 정책과 토큰 저장 방식을 인수인계 문서에 함께 정리",
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
    details: [
      {
        label: "문제",
        text: "HVAC 상담 흐름에서 딜러 찾기와 견적 문의는 위치 권한과 사용자 입력 폼이 필요해 단순 답변 메시지만으로 처리하기 어려웠습니다.",
      },
      {
        label: "접근",
        text: "위치정보 수집 메시지와 Contact Us 문의폼 모달을 별도 메시지 타입으로 구성하고, 챗봇 응답 데이터가 폼 입력값으로 이어지도록 연결했습니다.",
      },
      {
        label: "결과",
        text: "사용자가 챗봇 안에서 위치 제공과 문의폼 작성까지 이어갈 수 있도록 구현해 딜러 찾기와 견적 요청 흐름을 자연스럽게 연결했습니다.",
      },
    ],
    impactPoints: [
      "딜러 찾기 기능을 위한 위치 권한 요청, 사용자 상호작용 메시지, 좌표 전달 플로우 구현",
      "Contact Us 문의폼 모달을 구현하고 제품/예산/일정 등 챗봇 응답 데이터를 폼에 자동 반영",
      "SSE 스트리밍 답변, 로딩/타이핑 상태, 추천 질문, 피드백, 복사 등 챗봇 기본 상호작용 구현",
    ],
    contributions: [
      "SSE 스트리밍 응답 기반의 챗봇 메시지 렌더링, 타이핑 애니메이션, 로딩 상태 구현",
      "위치정보 수집 메시지와 좌표 전달 플로우 구현",
      "Contact Us 견적 요청 폼 개발 및 챗봇 응답 데이터 기반 제품/예산/일정 정보 자동 반영 처리",
      "일반 메시지, 추천 질문, 피드백, 복사, 약관/개인정보 모달 등 메시지 타입별 UI 개발",
    ],
    technicalPoints: [
      "React, TailwindCSS, Redux Toolkit, Context API 기반 프론트엔드 전체 개발",
      "위치 권한 요청 결과에 따라 성공/거부/재시도 상태를 분기하는 메시지 UI 구성",
      "Contact Us form 모달의 입력 상태와 챗봇 응답 데이터를 연결",
      "세션 만료 처리와 모바일/웹 입력창 높이 변화, 키보드 포커스, 자동 스크롤 대응",
    ],
    integrationPoints: [
      "딜러 찾기 기능을 위해 위치 권한 요청 및 좌표 전달 플로우 구현",
      "챗봇 응답 데이터가 Contact Us 문의폼의 제품/예산/일정 정보로 이어지도록 화면 상태와 연결",
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
    details: [
      {
        label: "문제",
        text: "앱 내 챗봇은 메시지 송수신뿐 아니라 푸시 진입, 음성 권한, 뒤로가기, 입력창 포커스처럼 앱과 웹의 경계 상태가 함께 움직입니다.",
      },
      {
        label: "접근",
        text: "WebSocket 토큰 발급, heartbeat, 재연결, 히스토리 로드, STT 음성 전송/텍스트 반환, 권한 브릿지를 분리해 실시간 채팅 상태와 앱 액션 상태를 안정화했습니다.",
      },
      {
        label: "결과",
        text: "대화, 음성 입력, 습관 액션, 앱 화면 이동이 하나의 챗봇 흐름 안에서 이어지도록 구현했습니다.",
      },
    ],
    impactPoints: [
      "WebSocket 재연결, heartbeat, 토큰 재시도 로직으로 앱 내 실시간 채팅의 끊김 대응 흐름 구성",
      "푸시 알림 진입, 이전 대화 불러오기, 메시지 초기화 플로우를 연결해 재진입 시 대화 상태를 정리",
      "STT 음성 데이터를 WebSocket으로 전송하고 텍스트 결과를 받아 채팅 입력 흐름에 연결",
      "Web Audio API의 AnalyserNode로 마이크 입력의 시간 영역 데이터를 읽어 음량 변화에 따라 원형 wave의 opacity/scale을 실시간 조절",
    ],
    contributions: [
      "WebSocket 기반 챗봇 메시지 송수신, 토큰 발급/재시도, heartbeat, 재연결 처리 구현",
      "채팅 히스토리 조회, 상단 스크롤 기반 이전 대화 불러오기, 푸시 알림 진입 시 메시지 초기화 플로우 개발",
      "WebSocket 기반 STT 음성 전송/텍스트 반환 처리와 STT 음파 UI 구현",
      "스트리밍 형태 답변 렌더링, 추천 질문, 복사, 좋아요/싫어요 및 상세 피드백 기능 구현",
      "습관 추천, 습관 추가, 습관 인증, 챌린지/습관 화면 이동 등 액션형 메시지 UI 구현",
    ],
    technicalPoints: [
      "React, React Native, TailwindCSS, Recoil 기반 앱 내 챗봇 개발",
      "WebSocket 기반 실시간 STT 음성 입력 기능 개발 및 Android 네이티브 권한 브릿지 연동",
      "Web Audio API AnalyserNode 기반 STT 음파 UI 구현",
      "다국어 리소스 기반 챗봇 문구 처리와 모바일 환경에 맞춘 반응형 채팅 UI 구성",
    ],
    integrationPoints: [
      "네이티브 뒤로가기, 마이크 권한, 입력창 포커스/스크롤 등 앱 연동 처리",
      "푸시 알림 진입 시 메시지 초기화 플로우 개발",
      "토큰 발급/재시도와 heartbeat를 통해 실시간 통신 안정화",
      "STT 사용 시 앱 마이크 권한, WebSocket 연결, 음성 입력 UI 상태를 함께 처리",
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
    details: [
      {
        label: "문제",
        text: "기존 봇빌더 기본 응답만으로는 증권 업무 시나리오와 앱 화면 이동, 차트/커스텀 메시지, 입력 폼을 충분히 처리하기 어려웠습니다.",
      },
      {
        label: "접근",
        text: "기존 챗봇 UI 코드를 파악한 뒤 기본 템플릿과 커스텀 메시지를 추가하고, Redux Toolkit과 Context API를 역할별로 분리해 상태 변경 범위를 관리했습니다.",
      },
      {
        label: "결과",
        text: "영웅문 앱 안에서 홈, 메뉴, 차트 메시지, 커스텀 시나리오, 화면 이동이 이어지는 챗봇 UI를 구현하고 WebView 입력 UX를 안정화했습니다.",
      },
    ],
    impactPoints: [
      "기본 챗봇 답변 템플릿 9종과 커스텀 챗봇 답변 11종을 구현해 봇빌더 기본 응답 한계를 보완",
      "WebView iOS/Android 입력창 포커스, 키패드, 스크롤, 최소화/닫기, 상세 이동 이벤트를 실제 앱 기준으로 대응",
      "최소 280px 수준의 소형 해상도와 구형 iPhone까지 고려해 챗봇 UI 반응형을 조정",
    ],
    contributions: [
      "기존 인포뱅크 챗봇 UI 코드를 분석하고 키움증권 영웅문 챗봇 UI로 확장 개발",
      "홈, 채팅, 메뉴, 퀵메뉴, 배너, 대화이력/검색, 폰트 크기 조절 등 챗봇 공통 UI 개발",
      "텍스트/버튼/이미지/퀵 리플라이/RAG/폴백/화면 경로 팝업/동영상 팝업 등 메시지 UI 개발",
      "캐러셀형, 텍스트-이미지-텍스트형, 화면경로형 등 기본 답변 템플릿 추가 구현",
      "MY계좌정보, 계좌번호 조회, 해외주식 거래방법, 현재가/지수/환율, 공모주 등 기능 시나리오 UI 개발",
      "고객 정보, 인증번호, 주소, 연락처, 만족도 조사 등 채팅 상담 입력 폼 UI 개발",
    ],
    technicalPoints: [
      "Redux Toolkit과 Context API를 목적별로 분리해 상태 관리 구조 설계",
      "전역 비즈니스 상태는 Redux, 팝업/모달 등 UI 재사용 요소는 Context로 분리",
      "HTML 텍스트 검색/하이라이팅을 HOC 패턴으로 구성해 여러 메시지 컴포넌트에서 재사용",
      "Recharts 기반 차트 메시지와 캐러셀/이미지 크기 조절 메시지 구현",
      "봇빌더 버튼의 paraValue를 사용해 화면 이동과 커스텀 로직 수행",
    ],
    integrationPoints: [
      "키움증권 앱 함수와 자연스럽게 동작하도록 상세 이동, 팝업 이동, 화면 이동 포스트 메시지 연동",
      "최소화 이후 재접속 시 대화 복구 처리",
      "WebView iOS/Android 입력창 포커스, 키패드 높이, 스크롤 이슈 분석 및 대응",
      "웹 이탈 시 키패드 상호작용 초기화와 에러 핸들링 처리",
      "앱에서의 웹뷰 이벤트와 구형 iPhone 동작을 확인하며 모바일 입력 UX 조정",
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
    details: [
      {
        label: "문제",
        text: "짧은 기간 안에 모바일 중심 챗봇 UI를 만들고, 응답 대기부터 결과 출력과 평가까지 이어지는 기본 흐름을 안정적으로 맞춰야 했습니다.",
      },
      {
        label: "접근",
        text: "응답 로딩 상태와 문자 단위 타이핑 출력 로직을 UI 상태와 연결해 모바일 화면에서 답변이 순차적으로 읽히도록 구성했습니다.",
      },
      {
        label: "결과",
        text: "홈, 대화 로딩, 답변 출력, 평가까지 챗봇의 핵심 사용 흐름을 모바일 화면 기준으로 구현했습니다.",
      },
    ],
    impactPoints: [
      "모바일 기반 챗봇 웹 페이지 전체 UI 개발",
      "응답 로딩 상태와 문자 단위 타이핑 인터랙션을 연결해 답변 출력 흐름 구현",
      "답변 이후 평가 화면까지 이어지는 기본 챗봇 사용 흐름 구성",
    ],
    contributions: [
      "모바일 기반의 챗봇 웹 페이지 UI 전체 개발",
      "결과 텍스트 타이핑 애니메이션 구현",
      "스트리밍 응답을 처리하는 API 연동 로직 구현",
      "답변 평가 UI와 기본 대화 상태 화면 구성",
    ],
    technicalPoints: [
      "Next.js, React, TailwindCSS, Recoil 기반 프론트엔드 개발",
      "문자 단위로 출력되는 타이핑 인터랙션 구현",
      "로딩, 응답 출력, 평가 상태를 구분한 메시지 UI 구성",
    ],
    integrationPoints: [
      "스트리밍 응답 처리 로직과 결과 출력 UI 상태 연결",
      "모바일 기반 화면에서 결과 텍스트가 순차적으로 읽히도록 출력 흐름 구성",
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
    details: [
      {
        label: "문제",
        text: "한컴 문서 안에서 교열 결과를 적용하려면 웹 화면의 텍스트 상태와 실제 문서 선택 위치가 정확히 맞아야 했고, 표/각주/도형 같은 문서 요소가 교열 흐름을 쉽게 깨뜨렸습니다.",
      },
      {
        label: "접근",
        text: "HwpObject API 기반 문서 스캔, 문단 위치 캐싱, offset 보정, 문단/벌크 단위 요청, 단어 단위 diff 표시를 조합해 문서 제어와 교열 UI를 연결했습니다.",
      },
      {
        label: "결과",
        text: "문서 편집기 환경에 맞춰 선택 위치와 교정 적용 로직을 보정했고, QA 이슈 재현/수정으로 실제 문서에서의 교열 적용 안정성을 높였습니다.",
      },
    ],
    impactPoints: [
      "HwpObject API 기반 문서 스캔, 텍스트 선택, 교정 문구 적용 흐름 구현",
      "문단 위치 캐싱과 offset 보정으로 한컴의 실제 선택 위치와 원문 위치가 어긋나는 문제 개선",
      "표, 각주/미주, 도형/메모 포함 문서에서 발생하는 교열/선택 이슈 대응",
    ],
    contributions: [
      "HwpObject API 기반 문서 스캔, 텍스트 선택, 교정 문구 적용 기능 구현",
      "문서를 문단/벌크 단위로 분리해 교열 API 요청 및 결과 병합 구조 구현",
      "원문과 교열 결과를 단어 단위 diff로 비교해 추가/삭제/변경 상태 표시",
      "QA 이슈 재현 및 수정으로 교정 적용 안정성 개선",
    ],
    technicalPoints: [
      "React, TypeScript, TailwindCSS, Recoil, HwpObject API 기반 개발",
      "한컴 문서의 문단 위치, Shift+Enter, 제어문자 처리 로직 개선",
      "문서 선택 시 불필요한 전체 문서 조회를 줄이고 문단 위치 캐싱으로 성능 최적화",
    ],
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
    details: [
      {
        label: "문제",
        text: "Admin, SDK, 고객사 프로젝트가 함께 움직이는 모노레포에서는 중복 UI, 이미지 리소스, 미사용 의존성이 빌드와 유지보수 비용으로 이어졌습니다.",
      },
      {
        label: "접근",
        text: "반복 UI를 컴포넌트 단위로 분리하고 이미지 최적화, 미사용 라이브러리 제거, 레거시 코드 정리를 함께 진행했습니다.",
      },
      {
        label: "결과",
        text: "운영 화면 기능 개발과 구조 정리를 병행해 챗봇 빌더의 유지보수성을 높이고 모노레포 빌드 속도를 30% 이상 개선했습니다.",
      },
    ],
    impactPoints: [
      "중복 컴포넌트 분리, 이미지 최적화, 미사용 라이브러리 제거로 모노레포 빌드 속도 30% 이상 개선",
      "프로젝트 설정, 답변 관리, 관리자 설정, 데이터 분석 등 실제 운영자가 사용하는 Admin 화면 유지보수",
      "통계 페이지와 지식 업로드 URL/PDF 페이지를 개발해 챗봇 운영과 지식 관리 영역 확장",
    ],
    contributions: [
      "젠틀파이 챗봇 빌더 버블잇 유지보수",
      "중복되는 UI 컴포넌트를 분리/모듈화해 재사용 가능한 단위 컴포넌트로 리팩터링",
      "챗봇 SDK 개발 및 유지보수",
      "프로젝트 설정, 답변 관리, 관리자 설정 등 챗봇 빌더 운영 화면 유지보수",
      "챗봇 통계 페이지와 챗봇 지식 업로드 URL/PDF 페이지 개발",
    ],
    technicalPoints: [
      "Next.js, StyledComponent, Recoil, Yarn Workspace, Recharts 기반 기능 개발",
      "레거시 코드 개선, 이미지 최적화, 사용되지 않는 라이브러리 제거",
      "Recharts 기반 통계 페이지 구현",
    ],
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
    title: "늘펫",
    period: "2022.08 ~ 2024.01",
    role: "프론트엔드 유지보수 / 기능 개발, 백엔드 기능 개발",
    tech: [
      "React",
      "Next.js",
      "Firebase",
      "Nest.js",
      "TailwindCSS",
      "Redux Toolkit",
    ],
    link: "https://www.vetflux.net/",
    linkLabel: "늘펫 서비스 소개 페이지",
    summary:
      "동물병원 데스크 업무를 줄이기 위한 고객관리 SaaS입니다. 메신저, 챗봇, 예약, 고객 정보, 설문, CTI, 알림톡/웹푸시를 하나의 운영 흐름으로 묶고 프론트엔드와 Firebase/Nest.js 일부 백엔드 기능까지 담당했습니다.",
    bullets: [
      "초기 기획 미팅, 개발 검토, 일정 산정, 기능 개발, 리뷰, 사용자 피드백 정리까지 참여",
      "Firestore Snapshot 기반 실시간 메신저와 자동 응답/팔로업/예약 연동 기능 개발",
      "Toast UI 기반 예약 캘린더, 고객 정보/그룹 관리, 엑셀 업로드/파싱, 설문 생성/조회 개발",
      "세종텔레콤 CTI 연동, 전화 수신 팝업, 알림톡 발송, 서비스 로그 기록 기능 구현",
      "저사양 병원 데스크 PC에서 복잡한 설정 리스트가 버벅이는 문제를 react-virtualized로 개선",
    ],
    details: [
      {
        label: "문제",
        text: "동물병원 데스크는 전화, 예약, 보호자 메시지, 고객 정보를 동시에 처리합니다. 실제 사용 PC 사양도 낮은 경우가 많아 실시간성과 화면 성능을 함께 맞춰야 했습니다.",
      },
      {
        label: "접근",
        text: "Firestore Snapshot으로 실시간 메신저를 구성하고, Firebase Functions로 예약/방문/전화 이벤트의 알림톡, 웹푸시, 로그 기록을 연결했습니다. 복잡한 설정 화면은 react-virtualized로 리스트 렌더링 부담을 줄였습니다.",
      },
      {
        label: "결과",
        text: "예약, 전화, 메시지, 고객 정보가 개별 기능에 머물지 않고 병원 데스크의 실제 응대 흐름 안에서 이어지도록 구현했습니다.",
      },
    ],
    impactPoints: [
      "초기 기획 미팅부터 구현 검토, 일정 산정, 개발, 리뷰, 사용자 피드백 정리까지 참여",
      "Firestore Snapshot과 Firebase Functions를 함께 사용해 메신저, 예약, 전화, 알림, 로그를 실시간 운영 흐름으로 연결",
      "저사양 병원 데스크 PC에서 복잡한 설정 리스트가 버벅이는 문제를 react-virtualized로 개선",
    ],
    contributions: [
      "늘펫 주요 기능의 프론트엔드 개발을 전담",
      "초기 기획 미팅에서 구현 가능성 검토, 개발 일정 산정, 기획서 작성에 참여",
      "Firestore Snapshot 기반 채팅 목록과 실시간 채팅 화면 구현",
      "팔로업, 예약 생성, 알림톡 전송, 일정 저장처럼 메신저에서 이어지는 병원 업무 액션 구현",
      "예약 등록/조회/수정 가능한 캘린더 UI와 일정 리스트 구현",
      "고객 정보 리스트, 고객 그룹 기능, 고객 목록 엑셀 업로드/파싱 기능 개발",
      "보호자에게 발송하는 문진/설문 생성과 결과 리스트/상세 응답 조회 화면 개발",
      "사용자 피드백을 수렴하고 백로그로 관리하며 운영 중 개선 항목 정리",
    ],
    technicalPoints: [
      "React, Next.js, Firebase, Nest.js, TailwindCSS, Redux Toolkit 기반 개발",
      "Firestore Snapshot 기반 실시간 구독 구조로 채팅 목록과 메시지 데이터 반영",
      "Firebase Functions 기반 예약/방문/전화 이벤트 핸들러 구현",
      "Nest.js 일부 백엔드 기능 유지보수 참여",
      "Toast UI 기반 일정표 구성",
      "react-virtualized 적용으로 복잡한 챗봇 설정 리스트 렌더링 병목 완화",
    ],
    integrationPoints: [
      "예약, 방문, 전화 이벤트 발생 시 알림톡/웹푸시 전송 및 로그 기록 처리",
      "세종텔레콤 CTI와 연계해 전화 수신 시 서비스 팝업 표시, 고객 정보 연결, 전화 로그 기록 처리",
      "자동 응답 메시지, 고객 정보, 예약 이벤트가 메신저 흐름 안에서 이어지도록 연동",
      "PWA 기반 웹푸시와 알림 로그, 시스템 로그 화면 구현",
      "여러 사람이 수정해 복잡해진 설정 UI를 분리하고 화면 구조를 정리해 유지보수성 개선",
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
    details: [
      {
        label: "문제",
        text: "짧은 외주성 프로젝트에서는 명세에 없는 UI 흐름 누락이 검수 단계의 재작업으로 이어질 수 있습니다.",
      },
      {
        label: "접근",
        text: "관리자/사용자 문진 흐름과 Socket.IO 메신저를 구현하고, 도메인 지연 상황에서는 Vercel 배포로 테스트 가능한 상태를 유지했습니다.",
      },
      {
        label: "결과",
        text: "짧은 외주성 프로젝트에서 관리자, 사용자, 실시간 메신저 흐름을 직접 점검해 검수 리스크를 줄였습니다.",
      },
    ],
    impactPoints: [
      "관리자 문진 생성, 수의사 답변, 수의사와 보호자 간 실시간 메신저 흐름 구현",
      "도메인 제공 지연 상황에서 Vercel 테스트 배포를 관리해 검수 가능한 상태 유지",
      "1차 외주 평가에서 담당 부분 추가 이슈 없이 통과",
    ],
    contributions: [
      "문진을 생성하는 관리자 페이지와 답변할 수 있는 사용자 페이지 개발",
      "사용자 수의사와 보호자 간 메신저 페이지 개발",
      "Socket.IO 기반 실시간 메신저 기능 개발",
      "수의사 문진 답변 페이지와 보호자용 챗봇 화면 개발",
    ],
    technicalPoints: [
      "Next.js, React, TailwindCSS, Socket.IO 기반 프론트엔드 개발",
      "도메인 제공이 늦어진 상황에서 테스트를 위한 Vercel 배포 및 관리",
    ],
    integrationPoints: [
      "관리자 문진 생성, 사용자 답변, 수의사/보호자 메신저 흐름 연결",
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
