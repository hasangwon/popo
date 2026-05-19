export const profile = {
  name: "하상원",
  role: "Frontend Developer",
  summary:
    "단순한 기능 구현을 넘어 기획 의도를 이해하고, 변화 속에서도 흐름을 지켜내며, 사용자가 실제로 필요로 하는 지점을 서비스에 반영하는 프론트엔드 개발자입니다.",
  email: "305243@naver.com",
  github: "https://github.com/hasangwon",
  blog: "https://bitcoins.tistory.com/",
  experience: "약 4년 3개월",
};

export const sections = [
  {
    id: "summary",
    index: "01",
    label: "Summary",
    prompt: "지원자 요약을 먼저 보고 싶습니다.",
  },
  {
    id: "gentlepie",
    index: "02",
    label: "Gentlepie",
    prompt: "젠틀파이에서 어떤 범위를 맡았나요?",
  },
  {
    id: "chatbot-projects",
    index: "03",
    label: "Chatbot Projects",
    prompt: "챗봇 프로젝트를 회사/고객사 기준으로 보여주세요.",
  },
  {
    id: "document-addon",
    index: "04",
    label: "Document Add-on",
    prompt: "한컴오피스 애드온처럼 복잡한 연동 경험을 보고 싶습니다.",
  },
  {
    id: "vetflux",
    index: "05",
    label: "Vetflux SaaS",
    prompt: "벳플럭스에서 SaaS를 어떻게 만들었나요?",
  },
  {
    id: "next",
    index: "06",
    label: "Next Draft",
    prompt: "포트폴리오에 더 채워야 할 부분을 알려주세요.",
  },
];

export const strengths = [
  {
    title: "대화형 UI",
    body: "SSE/WebSocket 기반 스트리밍 답변, 타이핑 상태, 추천 질문, 피드백, 캐러셀/테이블 메시지처럼 챗봇에서 반복적으로 어려워지는 UI 상태를 다뤘습니다.",
    fill: "[가장 까다로웠던 챗봇 UX 문제와 해결 과정을 3~5줄로 작성]",
  },
  {
    title: "앱/WebView 대응",
    body: "모바일 웹과 앱 WebView에서 입력창 포커스, 키보드, 스크롤, 네이티브 브릿지 호출 문제를 프로젝트별로 분석하고 대응했습니다.",
    fill: "[WebView 입력 UX를 고친 구체적인 사례와 재현 조건 작성]",
  },
  {
    title: "운영 가능한 구조",
    body: "전역 상태와 UI 상태를 분리하고, 레거시/모노레포 환경에서도 필요한 범위를 읽어 유지보수 가능한 형태로 개선하는 일을 해왔습니다.",
    fill: "[구조 개선 전후로 유지보수나 빌드가 좋아진 실제 수치/상황 작성]",
  },
];

export const companies = [
  {
    id: "gentlepie",
    name: "젠틀파이",
    period: "2024.06 ~ 현재",
    role: "챗봇 빌더/SDK 및 고객사 챗봇 프론트엔드",
    summary:
      "버블잇 SDK와 통계 페이지, 고객사 챗봇 UI를 개발하며 STT/TTS, 스트리밍 답변, 피드백, 캐러셀/테이블형 메시지 등 대화형 서비스에 필요한 기능을 구현했습니다.",
    bullets: [
      "키움증권, 식약처, LG HVAC, 애터미, 설해원 등 고객사 챗봇 프론트엔드 구현 및 유지보수",
      "챗봇 SDK, 지식 업로드, 통계 페이지, 모노레포 구조 관리",
      "레거시 코드 개선과 이미지/라이브러리 정리로 모노레포 빌드 속도 30% 이상 개선",
    ],
    fill: "[젠틀파이에서 본인이 주도적으로 의사결정한 설계 사례 작성]",
  },
  {
    id: "vetflux",
    name: "벳플럭스",
    period: "2022.08 ~ 2024.01",
    role: "동물병원 웹 솔루션 늘펫 프론트엔드 전담",
    summary:
      "메신저, 예약, 통계, 설문, CTI, 엑셀 업로드, 알림톡/웹푸시 등 동물병원 운영에 필요한 SaaS 기능을 신규 개발하고 Firebase 기반 실시간 처리를 구현했습니다.",
    bullets: [
      "Firestore Snapshot 기반 실시간 메신저 및 자동 응답 메시지 연동",
      "예약 캘린더, 고객 관리, 설문 생성/조회, CTI 수신 기록 연동 개발",
      "Firebase Functions, Nest.js 일부 유지보수, Socket.IO 기반 실시간 채팅 개발 참여",
    ],
    fill: "[늘펫을 실제 병원 업무 흐름에 맞추기 위해 조정한 UX 사례 작성]",
  },
];

export const projects = [
  {
    group: "chatbot",
    title: "설해원 챗봇",
    period: "2026.02 ~ 2026.05",
    role: "프론트엔드 전체 개발",
    tech: ["React", "TypeScript", "TailwindCSS", "Jotai", "DOMPurify"],
    summary:
      "리조트/골프 예약 도메인의 인증 플로우와 복잡한 시나리오 UI를 챗봇 안에서 처리했습니다.",
    bullets: [
      "채팅 세션 발급, 메시지 전송, 로딩/타이핑 상태, 자동 스크롤 등 기본 UX 구현",
      "로그인 복구, 세션 만료 시 신규 세션 재발급, 로그인 후 이전 질문 자동 재전송 구현",
      "객실/골프 예약 조회, 변경, 취소, 쿠폰, 입력 폼, 선택형 버튼 등 시나리오 UI 개발",
      "Markdown 렌더링 구간에 DOMPurify sanitizing 적용",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "호텔/골프 예약 도메인은 사용자의 인증 상태, 이전 질문, 예약 변경 단계가 엮이기 때문에 단순 메시지 렌더링보다 세션 흐름 유지가 중요했습니다.",
      },
      {
        label: "구현 관점",
        text: "세션 발급과 만료 복구, 로그인 후 질문 재전송, 시나리오 입력 폼과 선택형 버튼을 분리해 챗봇 메시지 안에서도 업무 플로우가 끊기지 않도록 구성했습니다.",
      },
      {
        label: "보완 필요",
        text: "[설해원 프로젝트에서 사용자 문의/예약 업무 측면으로 좋아진 점 작성]",
      },
    ],
    fill: "[설해원 프로젝트에서 사용자 문의/예약 업무 측면으로 좋아진 점 작성]",
  },
  {
    group: "chatbot",
    title: "LG HVAC 챗봇 Philippines",
    period: "2026.01 ~ 2026.03",
    role: "프론트엔드 전체 개발",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "Context API"],
    link: "https://www.lg.com/ph/business/hvac/homeowner/",
    summary:
      "HVAC 제품 추천, 비교, 딜러 찾기, 견적 요청까지 이어지는 고객용 AI 챗봇을 개발했습니다.",
    bullets: [
      "SSE 스트리밍 응답 렌더링, 타이핑 애니메이션, 로딩 상태, 세션 만료 처리 구현",
      "제품 추천 카드 캐러셀, 스펙 비교 테이블, 추천 질문, 피드백, 복사, 약관/개인정보 모달 개발",
      "위치 권한 요청 및 좌표 전달, Contact Us 폼 자동 반영 처리",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "제품 추천, 스펙 비교, 딜러 찾기, 견적 요청이 각각 별도 화면처럼 보이면 챗봇 안에서 사용자가 흐름을 잃기 쉽습니다.",
      },
      {
        label: "구현 관점",
        text: "스트리밍 답변을 안정적으로 보여주면서 제품 카드, 비교 테이블, 위치 권한, Contact Us 폼을 메시지 타입별 UI로 분리했습니다.",
      },
      {
        label: "보완 필요",
        text: "[제품 추천/견적 요청 전환에서 프론트엔드가 기여한 흐름 작성]",
      },
    ],
    fill: "[제품 추천/견적 요청 전환에서 프론트엔드가 기여한 흐름 작성]",
  },
  {
    group: "chatbot",
    title: "애터미 에이케어 챗봇",
    period: "2025.09 ~ 2025.12",
    role: "프론트엔드 개발",
    tech: ["React", "React Native", "TailwindCSS", "Recoil"],
    link: "https://play.google.com/store/apps/details?id=com.atomy.healthcare&hl=ko",
    summary:
      "앱 내 챗봇으로 WebSocket 통신, 음성 입력, 습관 추천/추가/인증 액션형 메시지를 구현했습니다.",
    bullets: [
      "토큰 발급/재시도, heartbeat, 재연결 처리 등 실시간 통신 안정화",
      "채팅 히스토리 조회, 상단 스크롤 이전 대화 로드, 푸시 알림 진입 플로우 개발",
      "STT 음성 입력과 Android 네이티브 권한 브릿지 연동",
      "다국어 리소스 기반 문구 처리와 모바일 반응형 채팅 UI 구성",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "앱 내 챗봇은 메시지 송수신뿐 아니라 푸시 진입, 음성 권한, 뒤로가기, 포커스 같은 앱과 웹의 경계 상태가 함께 움직입니다.",
      },
      {
        label: "구현 관점",
        text: "WebSocket 재연결과 heartbeat, 히스토리 로드, STT 권한 브릿지를 분리해 실시간 채팅 상태와 앱 액션 상태를 안정화했습니다.",
      },
      {
        label: "보완 필요",
        text: "[앱 연동에서 직접 해결한 네이티브/웹 경계 이슈 작성]",
      },
    ],
    fill: "[앱 연동에서 직접 해결한 네이티브/웹 경계 이슈 작성]",
  },
  {
    group: "chatbot",
    title: "키움증권 영웅문 챗봇",
    period: "2025.01 ~ 2025.07",
    role: "레거시 파악 및 프론트엔드 전체 개발",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "Context API", "Recharts"],
    link: "https://www.youtube.com/watch?v=3r6fSKLeTtQ",
    summary:
      "증권 앱 내 챗봇에서 레거시 봇빌더 코드를 파악하고, 앱 연동과 모바일 입력 UX까지 책임졌습니다.",
    bullets: [
      "소형 해상도 디바이스 대응, 폰트 크기 조절, 차트/캐러셀/홈 화면/이미지 크기 조절 개발",
      "Redux Toolkit과 Context API를 목적별로 분리해 전역 비즈니스 상태와 UI 상태 관리",
      "HTML 텍스트 검색/하이라이팅을 HOC 패턴으로 구성",
      "WebView 입력창 포커스, 키패드, 스크롤, 화면 이동 분기와 에러 핸들링 대응",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "증권 앱 WebView에서는 키패드와 포커스, 앱 함수 호출, 화면 이동 분기가 일반 웹보다 민감하게 깨질 수 있습니다.",
      },
      {
        label: "구현 관점",
        text: "전역 비즈니스 상태는 Redux Toolkit, 팝업/모달 등 UI 상태는 Context로 나눠 관리하고, WebView 입력 UX를 별도로 분석했습니다.",
      },
      {
        label: "보완 필요",
        text: "[키움증권에서 레거시를 파악하고 안정화한 절차와 기준 작성]",
      },
    ],
    fill: "[키움증권에서 레거시를 파악하고 안정화한 절차와 기준 작성]",
  },
  {
    group: "chatbot",
    title: "식약처 AI 코스봇",
    period: "2024.07 ~ 2024.08",
    role: "프론트엔드 전체 개발",
    tech: ["Next.js", "React", "TailwindCSS", "Recoil"],
    link: "http://aiconsulting.helpcosmetic.or.kr/",
    summary:
      "모바일 기반 공공 서비스 챗봇 웹 페이지를 개발하고 스트리밍 응답과 타이핑 인터랙션을 구현했습니다.",
    bullets: [
      "모바일 기반 챗봇 웹 페이지 UI 전체 개발",
      "스트리밍 응답 처리 API 연동과 결과 텍스트 타이핑 애니메이션 구현",
      "문자 단위 출력 인터랙션 개발",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "짧은 기간 안에 모바일 중심 챗봇 UI와 스트리밍/타이핑 인터랙션을 안정적으로 맞춰야 했습니다.",
      },
      {
        label: "구현 관점",
        text: "응답 스트림 처리와 문자 단위 출력 로직을 UI 상태와 연결해 모바일에서 읽히는 속도와 화면 흐름을 맞췄습니다.",
      },
      {
        label: "보완 필요",
        text: "[짧은 기간 내 전체 개발을 완료하기 위해 정한 우선순위 작성]",
      },
    ],
    fill: "[짧은 기간 내 전체 개발을 완료하기 위해 정한 우선순위 작성]",
  },
  {
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
        label: "핵심 문제",
        text: "문서 편집기는 실제 선택 위치와 원문 데이터 위치가 어긋날 수 있고, 표/각주/도형 같은 문서 요소가 교열 흐름을 쉽게 깨뜨립니다.",
      },
      {
        label: "구현 관점",
        text: "문단 위치 캐싱, offset 보정, 문단/벌크 단위 요청, 단어 단위 diff 표시를 조합해 문서 제어와 교열 UI를 연결했습니다.",
      },
      {
        label: "보완 필요",
        text: "[한컴 문서 구조 때문에 생긴 가장 어려운 버그와 해결 방식 작성]",
      },
    ],
    fill: "[한컴 문서 구조 때문에 생긴 가장 어려운 버그와 해결 방식 작성]",
  },
  {
    group: "chatbot",
    title: "버블잇 챗봇 빌더",
    period: "2024.06 ~ 2024.12",
    role: "프론트엔드 유지보수 / 기능 개발",
    tech: ["Next.js", "StyledComponent", "Recoil", "Yarn Workspace", "Recharts"],
    link: "https://bublitt.com/",
    summary:
      "챗봇 빌더 Admin/SDK를 유지보수하며 통계, 지식 업로드, SDK 기능을 개발했습니다.",
    bullets: [
      "중복 UI 컴포넌트 분리와 재사용 가능한 단위 컴포넌트 리팩터링",
      "레거시 코드 개선, 이미지 최적화, 미사용 라이브러리 제거",
      "챗봇 통계 페이지, 지식 업로드(url/pdf) 페이지 개발",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "Admin, SDK, 고객사 프로젝트가 함께 움직이는 환경에서는 작은 중복과 미사용 의존성이 빌드/유지보수 비용으로 이어집니다.",
      },
      {
        label: "구현 관점",
        text: "반복 UI를 컴포넌트 단위로 정리하고 이미지/라이브러리/레거시 코드를 점검해 모노레포 빌드 속도 개선에 기여했습니다.",
      },
      {
        label: "보완 필요",
        text: "[빌드 속도 30% 개선을 측정한 기준과 실제 개선 항목 작성]",
      },
    ],
    fill: "[빌드 속도 30% 개선을 측정한 기준과 실제 개선 항목 작성]",
  },
  {
    group: "vetflux",
    title: "늘펫",
    period: "2022.08 ~ 2024.01",
    role: "프론트엔드 유지보수 / 기능 개발, 백엔드 기능 개발",
    tech: ["React", "Next.js", "Firebase", "Nest.js", "TailwindCSS", "Redux Toolkit"],
    link: "https://www.vetflux.net/",
    summary:
      "챗봇/메신저 기반 동물병원 고객 관리를 위한 통합 SaaS 웹 서비스를 개발했습니다.",
    bullets: [
      "Firestore + Snapshot 기반 실시간 메신저와 자동 응답 메시지 연동",
      "예약 캘린더, 고객 목록 엑셀 업로드/파싱, 그룹화 기능 개발",
      "설문 생성/발송, 문진 결과 리스트/상세 조회 기능 개발",
      "CTI 수신 기록 조회 및 고객 정보 연동, 알림톡/웹푸시 전송 이벤트 처리",
      "react-virtualized 적용으로 복잡한 챗봇 설정 페이지 렌더링 최적화",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "동물병원 데스크 환경은 PC 사양과 업무 흐름이 제각각이어서 메신저, 예약, 고객 관리, 설문, 알림이 느슨하게 연결되면 사용성이 떨어집니다.",
      },
      {
        label: "구현 관점",
        text: "Firestore Snapshot 기반 실시간 메신저와 예약/설문/CTI/알림 이벤트를 연결하고, 복잡한 설정 리스트에는 react-virtualized를 적용했습니다.",
      },
      {
        label: "보완 필요",
        text: "[병원 데스크 환경에서 성능을 체감 개선한 사례 작성]",
      },
    ],
    fill: "[병원 데스크 환경에서 성능을 체감 개선한 사례 작성]",
  },
  {
    group: "vetflux",
    title: "대웅펫 e-CRF",
    period: "2023.11 ~ 2023.12",
    role: "프론트엔드 개발",
    tech: ["Next.js", "React", "TailwindCSS", "Socket.IO"],
    summary:
      "수의사 임상시험 eCRF에서 관리자 문진 생성, 사용자 답변, 실시간 메신저 페이지를 개발했습니다.",
    bullets: [
      "관리자 문진 생성 페이지와 사용자 답변 페이지 개발",
      "수의사와 보호자 간 Socket.IO 기반 실시간 메신저 구현",
      "도메인 제공 지연 중 Vercel 테스트 배포 및 관리",
      "요구 명세 외 UI/UX 누락 가능성까지 자체 테스트해 외주 검수 수정 요청 없이 통과",
    ],
    details: [
      {
        label: "핵심 문제",
        text: "짧은 외주성 프로젝트에서는 명세에 없는 UI 흐름 누락이 검수 단계의 재작업으로 이어질 수 있습니다.",
      },
      {
        label: "구현 관점",
        text: "관리자/사용자 문진 흐름과 Socket.IO 메신저를 구현하고, 도메인 지연 상황에서는 Vercel 배포로 테스트 가능한 상태를 유지했습니다.",
      },
      {
        label: "보완 필요",
        text: "[검수 수정 요청 없이 통과한 자체 테스트 체크리스트 작성]",
      },
    ],
    fill: "[검수 수정 요청 없이 통과한 자체 테스트 체크리스트 작성]",
  },
];

export const nextDraftItems = [
  "[대표 프로젝트 2~3개에 실제 화면 캡처 또는 짧은 동작 GIF 추가]",
  "[각 프로젝트별 문제 상황, 판단 근거, 구현 방식, 결과를 4단계로 보강]",
  "[정량 성과가 있는 항목은 측정 기준과 숫자를 함께 작성]",
  "[면접에서 깊게 설명할 수 있는 기술 트러블슈팅 3개 선정]",
];
