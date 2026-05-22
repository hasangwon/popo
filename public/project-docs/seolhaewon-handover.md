# 설해원 챗봇 프론트엔드 인수인계서

| 항목        | 내용                              |
| ----------- | --------------------------------- |
| 문서 버전   | v1.0                              |
| 작성일      | 2026-05-20                        |
| 대상 저장소 | `chatbot-seolhaeone`              |
| 대상 독자   | 유지보수 담당자                   |
| 문서 목적   | 프로젝트 구조 파악, 유지보수 문서 |

---

## 목차

- [1. 프로젝트 요약](#1-프로젝트-요약)
- [2. 기술 스택](#2-기술-스택)
- [3. 로컬 실행](#3-로컬-실행)
- [4. 폴더 구조](#4-폴더-구조)
- [5. 화면 흐름](#5-화면-흐름)
- [6. 상태 관리와 주요 액션](#6-상태-관리와-주요-액션)
- [7. API와 인증 흐름](#7-api와-인증-흐름)
- [8. 메시지 렌더링 구조](#8-메시지-렌더링-구조)
- [9. 시나리오 유지보수](#9-시나리오-유지보수)
- [10. 자주 수정하는 위치](#10-자주-수정하는-위치)
- [11. 보안과 운영 주의사항](#11-보안과-운영-주의사항)
- [12. 트러블슈팅](#12-트러블슈팅)
- [13. 변경 후 검증 체크리스트](#13-변경-후-검증-체크리스트)
- [14. 유지보수 원칙](#14-유지보수-원칙)

---

## 1. 프로젝트 요약

설해원 챗봇 사용자용 웹 클라이언트.

전체 화면 구조.

```txt
Home.tsx
└── ChatContainer.tsx
    ├── Modal 영역
    │   ├── ModalRoot
    │   ├── MenuModal
    │   ├── ActionModal
    │   └── InfoModal
    ├── Header
    │   └── ChatHeader
    ├── Contents
    │   ├── ChatHome
    │   │   └── 초기 홈 메뉴
    │   └── ChatMessage
    │       ├── 브리티 기본 메시지 타입
    │       │   ├── text
    │       │   ├── button
    │       │   └── linkButton
    │       ├── 프론트 추가 메시지 타입
    │       │   ├── plainText
    │       │   ├── login
    │       │   └── logout
    │       └── form
    │           └── JsonMessage.tsx
    │               └── scenarioName 기준 커스텀 화면 분기
    │                   ├── 객실 시나리오
    │                   │   └── 예약 조회, 변경, 취소, 대기
    │                   ├── 골프 시나리오
    │                   │   └── 예약 조회, 변경, 취소, 위임, 노캐디, 리무진, 대기
    │                   ├── 쿠폰 시나리오
    │                   │   └── 보유 쿠폰 조회
    │                   └── 로그인 필요 화면
    │                       └── RequireLoginMessage
    └── Input
        └── ChatInput
```

핵심 이해 포인트.

- `Home.tsx`: 세션 초기화와 로그인/로그아웃 함수 준비.
- `ChatContainer.tsx`: 모달, 헤더, 컨텐츠, 입력창 조립.
- `Contents`: 초기 화면 `ChatHome`과 대화 메시지 `ChatMessage` 렌더링.
- `ChatMessage`: 메시지 타입 기준으로 렌더링 컴포넌트 선택.
- `form` 타입: 브리티가 내려주는 `scenarioName` 기준으로 커스텀 메시지 화면 렌더링.
- 커스텀 메시지 묶음: 객실/골프/쿠폰 시나리오 유지보수의 핵심 영역.

---

## 2. 기술 스택

| 항목            | 사용 기술                 |
| --------------- | ------------------------- |
| 프레임워크      | React 19                  |
| 빌드 도구       | Vite 7                    |
| 언어            | TypeScript                |
| 라우팅          | React Router DOM          |
| 상태 관리       | Jotai                     |
| HTTP            | axios                     |
| 스타일          | Tailwind CSS 4 + 전역 CSS |
| 마크다운 렌더링 | Showdown                  |
| HTML 정화       | DOMPurify                 |
| 토스트          | React Toastify            |
| 캐러셀          | Swiper                    |
| 입력창          | react-textarea-autosize   |
| 패키지 매니저   | Yarn classic              |

Node 버전: `.nvmrc`, `package.json` 기준 `22.x` 사용.

---

## 3. 로컬 실행

### 3-1. 사전 준비

| 도구    | 기준                    |
| ------- | ----------------------- |
| Node.js | 22.x                    |
| Yarn    | 1.x                     |
| 백엔드  | 로컬 또는 개발 서버 API |

### 3-2. 설치와 실행

```bash
yarn install
yarn dev
```

개발 서버 기본 주소: `[숨김]`.

Node 22가 이미 활성화된 환경이면 별도 버전 전환 불필요.  
Node 버전이 다를 때만 `.nvmrc` 기준으로 전환.

### 3-3. 환경변수

필수 환경변수: `.env`에 작성.

```bash
VITE_API_BASE_URL=[숨김]
```

`vite.config.ts`: `/hsw` 요청을 `VITE_API_BASE_URL`로 프록시.

환경별 설정 기준.

| 환경                 | 값                         |
| -------------------- | -------------------------- |
| 젠틀파이 개발 주소   | `VITE_API_BASE_URL=[숨김]` |
| 운영 배포            | 운영 백엔드 주소로 변경    |
| 백엔드까지 로컬 실행 | 로컬 백엔드 주소로 변경.`  |

예시:

| 브라우저 요청         | 실제 백엔드 전달        |
| --------------------- | ----------------------- |
| `/hsw/api/chat/start` | `{숨김}/api/chat/start` |
| `/hsw/api/auth/login` | `{숨김}/api/auth/login` |

### 3-4. 주요 명령어

| 명령어         | 용도                        |
| -------------- | --------------------------- |
| `yarn dev`     | 개발 서버 실행              |
| `yarn build`   | TypeScript 검사 + 운영 빌드 |
| `yarn preview` | 빌드 결과 미리보기          |
| `yarn lint`    | ESLint 검사                 |

---

## 4. 폴더 구조

```txt
src/
├── api/                 # 백엔드 API 호출, axios 인터셉터, refresh 처리
├── components/
│   ├── chat/            # 채팅 화면, 헤더, 입력창, 메시지 리스트
│   ├── common/          # 공통 버튼, 아이콘, 로더, 토스트, 에러 바운더리
│   ├── message/         # 메시지 타입별 렌더링
│   ├── modal/           # 메뉴/확인/오류 모달
│   └── scenario/        # 커스텀 메시지 화면
│       ├── common/      # 시나리오 공통 UI
│       ├── hotel/       # 객실 시나리오
│       │   └── ui/      # 객실 예약 카드, 객실 타입 캐러셀 등
│       ├── golf/        # 골프 시나리오
│       │   └── ui/      # 골프 예약 카드, 예약번호 입력 폼 등
│       └── coupon/      # 쿠폰 시나리오
├── constants/           # 홈 메뉴, 버튼 문구, 링크, 노출 개수
├── hooks/               # 채팅, 세션, 스크롤, 모달, 로그인 후 재전송
├── pages/               # 페이지
├── store/               # Jotai atom
├── styles/              # 전역 스타일, 마크다운/토스트/캐러셀 스타일
├── types/               # 채팅/객실/골프 타입
├── utils/               # 메시지 생성, 링크, 디바이스, 사용자 정보 접근
└── main.tsx             # 앱 진입점
```

운영 중 주요 수정 영역.

| 목적                      | 위치                               |
| ------------------------- | ---------------------------------- |
| 홈 메뉴/하단 메뉴 문구    | `src/constants/menu.ts`            |
| 버튼 묶음, 더보기 링크    | `src/constants/scenario.ts`        |
| 시나리오 화면 UI          | `src/components/scenario/`         |
| 색상/폰트/마크다운 스타일 | `src/styles/`                      |
| 브라우저 탭 이름/favicon  | `index.html`, `public/favicon.png` |

시나리오 폴더 기준.

| 폴더                 | 역할                                                                        |
| -------------------- | --------------------------------------------------------------------------- |
| `scenario/common/`   | 시나리오 공통 부품. 목록 더보기, 드롭다운, 입력 폼, 단계 섹션               |
| `scenario/hotel/`    | 객실 예약 조회, 객실 변경, 투숙자 변경, 취소, 대기 조회/취소                |
| `scenario/hotel/ui/` | 객실 예약 카드, 객실 없음 메시지, 객실 타입 캐러셀                          |
| `scenario/golf/`     | 골프 예약 조회, 코스 변경, 동일 구좌 변경, 위임, 취소, 노캐디, 리무진, 대기 |
| `scenario/golf/ui/`  | 골프 예약 카드, 예약 정보/예약번호 입력 폼, 골프 없음 메시지                |
| `scenario/coupon/`   | 쿠폰 조회                                                                   |

---

## 5. 화면 흐름

### 5-1. 앱 진입

| 파일                                    | 역할                                            |
| --------------------------------------- | ----------------------------------------------- |
| `src/main.tsx`                          | React root 생성, 라우터 설정                    |
| `src/pages/Home.tsx`                    | 세션 상태 확인 후 채팅 컨테이너 표시            |
| `src/components/chat/ChatContainer.tsx` | 헤더, 홈 메뉴, 메시지 리스트, 입력창, 모달 연결 |

라우트: 현재 `/`만 사용. 그 외 경로는 `/`로 redirect.

### 5-2. 초기 세션 생성

`Home.tsx`: `useChatSession()` 호출.

여기서 말하는 세션은 프론트 자체 세션이 아니라 브리티 대화방 기준값.  
`/api/chat/start` 응답의 `chatroomId`를 프론트에서는 `sessionIdAtom`에 저장해서 사용.

초기 동작 순서:

1. `/api/auth/refresh`로 기존 로그인 복구 시도
2. 성공하면 사용자 정보를 Jotai atom에 저장
3. `/api/chat/start`로 브리티 `chatroomId` 발급
4. 성공하면 `connectStatus`를 `ready`로 변경
5. 실패하면 `connectStatus`를 `error`로 변경하고 오류 모달 표시

관련 파일:

| 파일                           | 역할                                                              |
| ------------------------------ | ----------------------------------------------------------------- |
| `src/hooks/useChatSession.tsx` | 로그인 복구, 브리티 `chatroomId` 발급, 로그아웃                   |
| `src/api/login.ts`             | 로그인/refresh/logout API                                         |
| `src/api/chat.ts`              | 채팅 시작/메시지 전송 API                                         |
| `src/store/id.ts`              | 브리티 `chatroomId`를 담는 `sessionId`, 연결 상태 `connectStatus` |

---

## 6. 상태 관리와 주요 액션

상태 관리: Jotai atom 구성.

| 파일                 | 주요 상태           | 설명                                                                  |
| -------------------- | ------------------- | --------------------------------------------------------------------- |
| `src/store/chat.ts`  | `messagesAtom`      | 채팅 메시지 목록                                                      |
| `src/store/chat.ts`  | `loadingAtom`       | API 응답 대기 상태                                                    |
| `src/store/chat.ts`  | `typingAtom`        | 봇 텍스트 스트리밍 중 여부                                            |
| `src/store/chat.ts`  | `inputTextAtom`     | 입력창 텍스트                                                         |
| `src/store/id.ts`    | `sessionIdAtom`     | 브리티가 발급한 `chatroomId`. 메시지 전송 시 `chatroomId`로 다시 전달 |
| `src/store/id.ts`    | `connectStatusAtom` | `idle`, `ready`, `error`                                              |
| `src/store/user.ts`  | `userInfoAtom`      | 로그인 사용자 정보와 access token                                     |
| `src/store/modal.ts` | `activeModalAtom`   | 현재 열린 모달                                                        |

사용자 정보 접근: `src/utils/userInfoStorage.ts` 사용.  
access token: 웹 스토리지 저장 없음. Jotai 메모리에만 보관. `sessionStorage`에는 `lastMessageSentAt`만 저장.

주요 액션/함수.

| 이름                   | 위치                                    | 역할                                                                                              | 주요 사용처                                                                       |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sendMessage`          | `src/hooks/useChat.tsx`                 | 사용자 입력/버튼 문구를 채팅 턴으로 처리. 사용자 메시지 추가, API 호출, 봇 응답 추가까지 담당     | `ChatInput`, `ChatHeader`, `ButtonMessage`, `AdditionalButton`, 시나리오 컴포넌트 |
| `sendMessageWithRetry` | `src/hooks/useChat.tsx`                 | 메시지 전송 실패 시 재시도 처리. 401은 게스트 재전송, 404는 새 브리티 `chatroomId` 발급 후 재전송 | `sendMessage` 내부                                                                |
| `addMessage`           | `src/store/chat.ts`의 `addMessageAtom`  | `messagesAtom` 뒤에 새 메시지 추가                                                                | `useChat`, 취소/변경/신청 시나리오 컴포넌트                                       |
| `resetMessageAtom`     | `src/store/chat.ts`                     | 메시지 목록 초기화                                                                                | 로그인 성공 후 대화 초기화                                                        |
| `openModal`            | `src/hooks/useModal.tsx`                | `menu`, `error`, `action` 등 모달 열기                                                            | `ChatInput`, `useChatSession`                                                     |
| `openActionModal`      | `src/hooks/useModal.tsx`                | 확인/취소가 필요한 액션 모달 열기. `title`, `content`, `confirmText`, `onConfirm` 전달            | 예약 취소, 변경 확정 시나리오                                                     |
| `closeModal`           | `src/hooks/useModal.tsx`                | 열린 모달과 action payload 초기화                                                                 | `ModalRoot`, 각 모달                                                              |
| `createUserMessage`    | `src/utils/messageUtils.ts`             | 사용자 말풍선 객체 생성                                                                           | `sendMessage`, 시나리오 내부 선택/확정 처리                                       |
| `createBotMessage`     | `src/utils/messageUtils.ts`             | 프론트에서 직접 봇 메시지 객체 생성                                                               | 취소 불가 안내, 신청 완료/실패 후 고정 버튼 표시                                  |
| `createErrorMessage`   | `src/utils/messageUtils.ts`             | 공통 오류 봇 메시지 생성                                                                          | API 실패, 유효하지 않은 응답                                                      |
| `showCustomToast`      | `src/components/common/CustomToast.tsx` | 토스트 생성                                                                                       | 토스트 메시지 띄우는 곳                                                           |

흐름 기준.

```txt
사용자 입력/버튼 클릭
→ sendMessage()
→ addMessage(createUserMessage())
→ sendMessageApi()
→ addMessage(봇 응답)
→ ChatMessage가 messageType 기준 렌더링
```

시나리오 내부 액션 기준.

```txt
예약 선택/취소/변경 클릭
→ 필요 시 openActionModal()
→ onConfirm에서 시나리오 API 호출
→ addMessage(createUserMessage())
→ addMessage(createBotMessage() 또는 createErrorMessage())
```

---

## 7. API와 인증 흐름

### 7-1. API 파일별 역할

| 파일                  | 역할                                    |
| --------------------- | --------------------------------------- |
| `src/api/chat.ts`     | 브리티 대화방 시작, 메시지 전송         |
| `src/api/login.ts`    | 로그인, refresh, 로그아웃               |
| `src/api/refresh.ts`  | access token refresh single-flight 처리 |
| `src/api/scenario.ts` | 객실/골프 시나리오 액션 API             |

### 7-2. 채팅 API

| 함수             | 엔드포인트               | 설명                                                                   |
| ---------------- | ------------------------ | ---------------------------------------------------------------------- |
| `startChatApi`   | `POST /api/chat/start`   | 브리티 대화방 생성, `chatroomId` 발급                                  |
| `sendMessageApi` | `POST /api/chat/message` | 사용자 메시지 전송. 저장된 `sessionId`를 payload의 `chatroomId`로 전달 |

`sendMessageApi`: 백엔드가 여러 메시지를 내려도 현재는 `messages[0]`만 사용.  
백엔드가 한 턴에 여러 메시지를 보내는 정책으로 변경 시 이 부분 우선 수정.

### 7-3. 인증 API

| 함수              | 엔드포인트               | 설명                                               |
| ----------------- | ------------------------ | -------------------------------------------------- |
| `loginApi`        | `POST /api/auth/login`   | 로그인                                             |
| `refreshLoginApi` | `POST /api/auth/refresh` | refresh token 기반 로그인 복구/access token 재발급 |
| `logoutApi`       | `POST /api/auth/logout`  | 로그아웃                                           |

로그인/refresh/logout 요청: `withCredentials: true` 사용.  
refresh token: 프론트 직접 저장 없음. 쿠키 기반 처리.

### 7-4. 401 처리

`chat.ts`, `scenario.ts` axios 인터셉터의 401 처리 순서.

1. 이미 재시도한 요청이면 그대로 실패 처리
2. 저장된 사용자 정보가 없으면 실패 처리
3. `refreshAccessTokenSingleFlight()` 호출
4. 새 access token을 받으면 원 요청을 1회 재시도
5. refresh 실패 시 사용자 정보를 초기화

`single-flight` 구조: 여러 API가 동시에 401을 받아도 refresh 요청은 1개만 진행.

### 7-5. 메시지 전송 재시도

추가 재시도 담당: `src/hooks/useChat.tsx`의 `sendMessageWithRetry`.

| 상황       | 동작                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| 최종 401   | 로그인 사용자 정보를 비우고 게스트로 같은 질문 1회 재전송                                                |
| 404        | 브리티 `chatroomId`가 유효하지 않은 것으로 보고 `/api/chat/start` 재호출 후 새 `chatroomId`로 1회 재전송 |
| 그 외 실패 | 기본 오류 메시지 표시                                                                                    |

---

## 8. 메시지 렌더링 구조

### 8-1. 메시지 전송 흐름

관련 파일: `src/hooks/useChat.tsx`.

1. 사용자가 입력 또는 버튼 클릭
2. 사용자 메시지를 `messagesAtom`에 추가
3. `sendMessageApi` 호출
4. 백엔드 응답의 `type`을 `messageType`으로 저장
5. `ChatMessage`가 `messageType`에 맞는 컴포넌트를 렌더링

### 8-2. 메시지 타입

메시지 타입은 크게 3묶음.

| 구분                 | 타입         | 렌더링 파일             | 설명                                          |
| -------------------- | ------------ | ----------------------- | --------------------------------------------- |
| 브리티 기본 타입     | `text`       | `StreamingMessage.tsx`  | 브리티 텍스트 답변. 스트리밍 효과 적용        |
| 브리티 기본 타입     | `button`     | `ButtonMessage.tsx`     | 브리티 버튼 메시지                            |
| 브리티 기본 타입     | `linkButton` | `LinkButtonMessage.tsx` | 브리티 링크 버튼 메시지                       |
| 프론트 추가 타입     | `plainText`  | `BotTextBlock.tsx`      | 프론트에서 직접 만든 일반 안내 문구           |
| 프론트 추가 타입     | `login`      | `LoginMessage.tsx`      | 프론트에서 직접 띄우는 로그인 폼              |
| 프론트 추가 타입     | `logout`     | `LogoutMessage.tsx`     | 프론트에서 직접 띄우는 로그아웃 확인 화면     |
| 커스텀 메시지 진입점 | `form`       | `JsonMessage.tsx`       | 브리티가 `form` 타입 아래 `scenarioName` 전달 |

`form` 타입 처리 방식.

1. 브리티 응답의 `type`이 `form`
2. 응답에 `scenarioName` 포함
3. `JsonMessage.tsx`에서 `scenarioName` 확인
4. 객실 예약 취소, 골프 위임, 쿠폰 조회 등 커스텀 화면 렌더링

커스텀 메시지 유지보수 기준.

- 커스텀 화면은 `src/components/scenario/` 아래에 모음.
- 객실/골프/쿠폰 도메인별 파일 분리.
- 공수가 큰 영역이므로 `scenarioName -> 컴포넌트 -> apiResults` 흐름 먼저 확인.
- 브리티 기본 타입(`text`, `button`, `linkButton`)과 프론트 커스텀 화면(`form`)을 분리해서 이해.

### 8-3. `isLastMessage` 규칙

대부분의 버튼/폼: 마지막 메시지에서만 활성화.  
목적: 이전 메시지 버튼 재클릭으로 과거 상태의 API 실행 방지.

시나리오 컴포넌트 수정 시 유지 권장 패턴.

```tsx
disabled={!isLastMessage || isSubmitting}
```

---

## 9. 시나리오 유지보수

시나리오 유지보수 시작점: `src/components/message/JsonMessage.tsx`.  
브리티 `form` 메시지의 `scenarioName`을 받아 아래 컴포넌트 중 하나로 분기.

### 9-1. 전체 시나리오 리스트

| 한글 이름                | 도메인 | `scenarioName`                 | 주요 파일                                         | 관련 API/데이터                                                  |
| ------------------------ | ------ | ------------------------------ | ------------------------------------------------- | ---------------------------------------------------------------- |
| 쿠폰 조회                | 쿠폰   | `search_customerCoupon`        | `scenario/coupon/CustomerCoupon.tsx`              | `customerGetCouponList.items`                                    |
| 객실 예약 조회           | 객실   | `search_hotelReservation`      | `scenario/hotel/SearchHotelReservation.tsx`       | `hotelGetReservationList.items`                                  |
| 객실 타입 변경           | 객실   | `hotelRoomTypeChange`          | `scenario/hotel/HotelRoomTypeChange.tsx`          | `/api/hotel/room-list`, `/api/hotel/change-room-type`            |
| 객실 동일 구좌 회원 변경 | 객실   | `sameAccountReservationChange` | `scenario/hotel/SameAccountReservationChange.tsx` | `/api/hotel/change-booker`                                       |
| 객실 투숙자 변경         | 객실   | `hotelGuestChange`             | `scenario/hotel/HotelGuestChange.tsx`             | `/api/hotel/change-guest`                                        |
| 객실 예약 취소           | 객실   | `hotelReservationCancel`       | `scenario/hotel/HotelReservationCancel.tsx`       | `/api/hotel/cancel`                                              |
| 객실 대기 조회           | 객실   | `search_hotelWaitStatus`       | `scenario/hotel/HotelWaitReservationStatus.tsx`   | `hotelGetWaitReservationList.items`                              |
| 객실 대기 취소           | 객실   | `hotelWaitReservationCancel`   | `scenario/hotel/HotelWaitReservationCancel.tsx`   | `/api/hotel/wait-cancel`                                         |
| 골프 예약 조회           | 골프   | `search_golfReservation`       | `scenario/golf/SearchGolfReservation.tsx`         | `golfGetReservationList.items`                                   |
| 골프 코스/시간 변경      | 골프   | `golfCourseTimeChange`         | `scenario/golf/GolfCourseTimeChange.tsx`          | `/api/golf/teeoff-list`, `/api/golf/change-reservation`          |
| 골프 동일 구좌 회원 변경 | 골프   | `golfSameAccountBookerChange`  | `scenario/golf/GolfSameAccountBookerChange.tsx`   | `/api/golf/change-booker`                                        |
| 골프 위임                | 골프   | `golfDelegation`               | `scenario/golf/GolfDelegation.tsx`                | `/api/golf/apply-delegation`                                     |
| 골프 예약 취소           | 골프   | `golfReservationCancel`        | `scenario/golf/GolfReservationCancel.tsx`         | `/api/golf/cancel`                                               |
| 골프 대기 조회           | 골프   | `search_golfWaitStatus`        | `scenario/golf/GolfWaitReservationStatus.tsx`     | `golfGetWaitReservationList.items`                               |
| 골프 대기 취소           | 골프   | `golfWaitReservationCancel`    | `scenario/golf/GolfWaitReservationCancel.tsx`     | `/api/golf/wait-cancel`                                          |
| 골프 노캐디 신청         | 골프   | `golfNoCaddyApply`             | `scenario/golf/GolfNoCaddyApply.tsx`              | `/api/golf/nocaddy-psbl-rsv-list`, `/api/golf/apply-no-caddy`    |
| 골프 리무진 카트 신청    | 골프   | `golfLimousineApply`           | `scenario/golf/GolfLimousineApply.tsx`            | `/api/golf/limousine-psbl-rsv-list`, `/api/golf/apply-limousine` |
| 로그인 필요              | 공통   | `loginRequired`                | `message/RequireLoginMessage.tsx`                 | 로그인 폼 진입                                                   |

### 9-2. 시나리오 공통 UI

| 파일                                                   | 역할                                            |
| ------------------------------------------------------ | ----------------------------------------------- |
| `ExpandableBoxList.tsx`                                | 목록 일부 노출 + 더보기                         |
| `ScenarioDropdown.tsx`                                 | 시나리오용 드롭다운                             |
| `GuestInfoForm.tsx`                                    | 이름/전화번호 입력 폼                           |
| `ScenarioStepSection.tsx`                              | 단계형 UI 섹션                                  |
| `ListButtonContainer.tsx`                              | 리스트 버튼 묶음                                |
| `ItemBlock.tsx`                                        | 카드 내부 정보 블록                             |
| `FakeUserMessage.tsx`                                  | 시나리오 내부에서 사용자 선택을 말풍선처럼 표시 |
| `BotTextBlock.tsx`                                     | 시나리오 내부 안내 문구                         |
| `scenario/hotel/ui/HotelReservationUI.tsx`             | 객실 예약 카드                                  |
| `scenario/hotel/ui/RoomTypeCarousel.tsx`               | 객실 타입 캐러셀                                |
| `scenario/hotel/ui/NoRoomMessage.tsx`                  | 객실 예약 없음 메시지                           |
| `scenario/golf/ui/GolfReservationUI.tsx`               | 골프 예약 카드                                  |
| `scenario/golf/ui/GolfReservationLookupForm.tsx`       | 골프 예약 정보 입력 폼                          |
| `scenario/golf/ui/GolfReservationNumberLookupForm.tsx` | 골프 예약번호 입력 폼                           |
| `scenario/golf/ui/NoGolfMessage.tsx`                   | 골프 예약 없음 메시지                           |

시나리오 수정 순서.

1. 위 전체 시나리오 리스트에서 한글 이름 확인
2. `scenarioName` 확인
3. 주요 파일 진입
4. `apiResults` 기대 키 확인
5. 버튼/폼 비활성화 조건(`isLastMessage`, 제출 중 상태) 유지

---

## 10. 자주 수정하는 위치

### 10-1. 홈 화면 메뉴 수정

파일: `src/constants/menu.ts`

| 상수              | 사용 위치              |
| ----------------- | ---------------------- |
| `faq`             | 홈 화면 FAQ 메뉴       |
| `homeReserveMenu` | 홈 화면 객실 예약 메뉴 |
| `golfReserveMenu` | 홈 화면 골프 예약 메뉴 |
| `menuTitle`       | 홈 화면 메뉴 섹션 제목 |

`ui`: 화면 노출 문구. `value`: 챗봇 전송 문구.

```ts
{ ui: "예약 조회", value: "객실 예약 조회" }
```

화면 문구만 변경: `ui`만 수정.  
백엔드 챗봇 분기까지 변경: `value` 수정 + 백엔드 인식 여부 확인.

### 10-2. 하단 메뉴 모달 수정

파일:

- `src/constants/menu.ts`
- `src/components/modal/MenuModal.tsx`

하단 메뉴 객실/골프/안내 사항 목록: `roomMenu`, `golfMenu`, `checklistMenu` 사용.

홈 화면 메뉴와 동일하게 `{ ui, value }` 형태 사용.

- `ui`: 모달 버튼에 노출되는 문구
- `value`: 버튼 클릭 시 챗봇에 전송되는 문구

`MenuModal`은 버튼에는 `ui`를 표시하고, 클릭 시 `value`를 전송한다.

예시:

```ts
{ ui: "예약 조회", value: "객실 예약 조회" }
```

화면 문구만 변경: `ui`만 수정.  
챗봇 분기까지 변경: `value` 수정 + 백엔드 인식 여부 확인.

### 10-3. 고정 버튼/더보기 링크 수정

파일: `src/constants/scenario.ts`

| 상수                                   | 설명                        |
| -------------------------------------- | --------------------------- |
| `ACTIONS`                              | 챗봇 응답 후 버튼 묶음      |
| `FBUTTONS`                             | 취소/완료 후 고정 버튼 묶음 |
| `SCENARIO_LIST_INITIAL_VISIBLE_COUNT`  | 목록 초기 노출 개수         |
| `SCENARIO_LIST_EXPANDED_VISIBLE_COUNT` | 더보기 후 노출 개수         |
| `RESERVATION_MORE_URL`                 | 예약 내역 더보기 링크       |
| `COUPON_MORE_URL`                      | 쿠폰 더보기 링크            |
| `MORE_BUTTON_TEXT` 계열                | 더보기 버튼 문구            |

URL만 변경: `RESERVATION_MORE_URL`, `COUPON_MORE_URL`만 수정.

### 10-4. 로그인 화면 문구/링크 수정

파일: `src/components/message/LoginMessage.tsx`

수정 대상:

| 항목                        | 현재 위치                   |
| --------------------------- | --------------------------- |
| 로그인 안내 제목            | `title` 기본값              |
| 아이디/비밀번호 placeholder | input placeholder           |
| 로그인 실패 문구            | `isLoginError` 영역         |
| 아이디/비밀번호 찾기 링크   | `openExternalLink(...)` URL |
| 로그인 버튼 문구            | `MessageButton`의 `content` |

### 10-5. 오류 문구 수정

| 목적                    | 파일                                                           |
| ----------------------- | -------------------------------------------------------------- |
| 일반 오류 메시지        | `src/utils/messageUtils.ts`의 `createErrorMessage`             |
| 연결 오류 모달          | `src/components/modal/ModalRoot.tsx`                           |
| 시나리오 액션 실패 문구 | `src/utils/messageUtils.ts`의 `appendUserActionFailureMessage` |

### 10-6. 시나리오 카드 UI 수정

도메인별 시나리오 파일 직접 수정.

예:

| 수정 대상                    | 파일                                       |
| ---------------------------- | ------------------------------------------ |
| 객실 예약 카드 문구/레이아웃 | `scenario/hotel/ui/HotelReservationUI.tsx` |
| 골프 예약 카드 문구/레이아웃 | `scenario/golf/ui/GolfReservationUI.tsx`   |
| 객실 타입 변경 단계          | `scenario/hotel/HotelRoomTypeChange.tsx`   |
| 골프 코스 변경 단계          | `scenario/golf/GolfCourseTimeChange.tsx`   |

주의할 점:

- `isLastMessage` 비활성화 조건 유지.
- `isSubmitting`, `isChanging`, `isChangeDone` 같은 중복 클릭 방지 상태 유지.
- API 응답 키(`apiResults?.hotelGetReservationList?.items` 등) 변경 시 백엔드 응답 동시 확인.

### 10-7. 색상/폰트 수정

파일:

- `src/styles/global.css`
- `src/styles/ui.css`
  해당 파일 내부에 주석으로 설명 있음.

`global.css`의 `@theme`: Tailwind 색상 토큰 관리.

```css
@theme {
  --color-primary: #ede8e1;
  --color-black: #0d0d0d;
  --color-error: #c23535;

  --color-blackgold: #563c18;
  --color-darkbrown: #472b19;
  --color-brown: #a57432;
  --color-lightbrown: #dfb678;
}
```

토큰 이름 변경 비권장. 값만 변경 권장.  
토큰 이름 변경 시 `bg-primary`, `text-blackgold` 같은 클래스 깨짐 가능.

`ui.css` 포함 스타일.

| 영역                                 | 설명                      |
| ------------------------------------ | ------------------------- |
| `.text-sm`, `.text-base`, `.text-lg` | 프로젝트 공통 폰트 크기   |
| `.custom-toast`                      | 토스트 스타일             |
| `.markdown`                          | 챗봇 마크다운 응답 스타일 |
| `.product-swiper`                    | Swiper 카드 크기          |
| `.word-break-keep`                   | 한글 줄바꿈 보조          |

### 10-8. 브라우저 타이틀/favicon 수정

| 대상             | 위치                                                     | 설명                                            |
| ---------------- | -------------------------------------------------------- | ----------------------------------------------- |
| 브라우저 탭 이름 | `index.html`의 `<title>`                                 | 브라우저 탭에 표시되는 이름. 현재 `설해원 챗봇` |
| favicon 연결     | `index.html`의 favicon link                              | 브라우저 탭 아이콘 경로                         |
| favicon 파일     | `public/favicon.png`                                     | 실제 favicon 이미지 파일                        |

관리 기준.

- 탭 이름만 변경: `index.html`의 `<title>`만 수정.
- favicon 이미지만 변경: `public/favicon.png` 교체.
- favicon 파일명 변경: `public/` 파일명 변경 + `index.html`의 `href`도 함께 수정.
- 변경 후 브라우저 캐시 때문에 바로 안 보일 수 있음. 강력 새로고침 또는 새 시크릿 창에서 확인.

### 10-9. 외부 링크 열기 정책

파일: `src/utils/linkUtils.ts`

현재 상태: `isSafeExternalUrl` 함수 존재. 단, `openExternalLink`에서 https 검증 비활성화.

```ts
// if (!isSafeExternalUrl(value)) {
if (!value) {
  alert("잘못 설정된 주소입니다.");
  return;
}
```

README 기준: 운영 배포 시 URL 검증 활성화 필요.  
운영 전 확인: 개발 서버 IP 링크 필요 여부. 가능하면 `https:` 검증 재활성화.

---

## 11. 보안과 운영 주의사항

### 11-1. 토큰 저장 방식

현재 구조:

| 항목                    | 저장 위치                          |
| ----------------------- | ---------------------------------- |
| access token            | Jotai 메모리                       |
| refresh token           | 프론트 저장 없음, 쿠키 기반        |
| 마지막 메시지 전송 시간 | `sessionStorage.lastMessageSentAt` |

access token의 `localStorage` 저장 비권장.  
현재 구조: 새로고침 시 `/api/auth/refresh`로 로그인 상태 복구.

### 11-2. 마크다운/XSS 처리

파일: `src/components/message/MarkdownText.tsx`

처리 내용:

- Showdown으로 마크다운을 HTML로 변환
- DOMPurify로 sanitize
- `<a>` 태그는 `FORBID_TAGS: ["a"]`로 제거
- 자동 링크 변환은 `simplifiedAutoLink: false`

봇 응답 마크다운 정책 변경 시 XSS 위험 동시 확인.

### 11-3. `useEffect` 수정 주의

의도적으로 dependency lint를 일부 무시한 effect 존재.

예:

| 파일                 | 이유                                                   |
| -------------------- | ------------------------------------------------------ |
| `useChatSession.tsx` | 연결 오류 모달 표시 effect에서 `openModal` 의존성 제외 |
| `useChatScroll.tsx`  | ResizeObserver effect에서 스크롤 높이 계산 흐름 유지   |

자동 수정으로 dependency 추가 시 초기화, 스크롤, 모달 표시 타이밍 변경 가능.  
`useEffect` 의존성 배열 변경 전 실제 동작 흐름 우선 확인.

### 11-4. 마지막 메시지만 조작 가능

폼, 버튼, 링크: 대부분 마지막 메시지에서만 활성화.  
운영 안정성상 UI 수정 중 `disabled={!isLastMessage}` 조건 제거 주의.

### 11-5. 백엔드 응답 키 의존성

시나리오 컴포넌트: `apiResults` 내부 키에 강하게 의존.

예:

| 화면                | 기대 키                             |
| ------------------- | ----------------------------------- |
| 객실 예약           | `hotelGetReservationList.items`     |
| 객실 대기           | `hotelGetWaitReservationList.items` |
| 골프 예약           | `golfGetReservationList.items`      |
| 골프 대기           | `golfGetWaitReservationList.items`  |
| 쿠폰                | `customerGetCouponList.items`       |
| 동일 구좌 회원      | `customerGetMemList.items`          |
| 골프 위임 잔여 횟수 | `customerGetBenefitRemaining.items` |

백엔드 키 변경 시 화면이 빈 목록처럼 보일 수 있음.

---

## 12. 트러블슈팅

| 증상                                        | 확인 위치                                    | 대응                                                      |
| ------------------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| 화면이 아무것도 안 뜸                       | `connectStatus`가 `idle`인지 확인            | `/api/auth/refresh`, `/api/chat/start` 응답 확인          |
| 연결 오류 모달 표시                         | `useChatSession.tsx`                         | `/api/chat/start` 실패, `.env`의 `VITE_API_BASE_URL` 확인 |
| `/hsw/...` 404                              | 브라우저 Network, `vite.config.ts`           | 백엔드 주소와 프록시 rewrite 확인                         |
| 로그인 유지 안 됨                           | Network 쿠키, 백엔드 CORS/쿠키 설정          | `withCredentials`, 백엔드 쿠키 옵션 확인                  |
| 401 반복                                    | `api/refresh.ts`, `api/chat.ts`              | refresh 응답의 `result`, `seolhaeoneAiccToken` 확인       |
| 버튼 클릭이 안 됨                           | `isLastMessage`, `loadingAtom`, `typingAtom` | 마지막 메시지인지, 답변 중 상태인지 확인                  |
| 시나리오 UI가 `No specific type found` 표시 | `JsonMessage.tsx`                            | `scenarioName` 매핑과 `ScenarioNameType` 확인             |
| 목록이 비어 보임                            | 각 시나리오의 `apiResults?...items`          | 백엔드 응답 키와 데이터 배열 확인                         |
| 더보기 링크가 안 열림                       | `constants/scenario.ts`, `linkUtils.ts`      | URL 값, 팝업 차단, 외부 링크 정책 확인                    |
| 마크다운 링크가 클릭되지 않음               | `MarkdownText.tsx`                           | 현재 `<a>` 태그 제거 정책이 적용 중                       |
| 모바일 입력창 포커스 이상                   | `ChatInput.tsx`, `deviceUtils.ts`            | 모바일 자동 포커스 방지 로직 확인                         |
| 스크롤 위치 이상                            | `useChatScroll.tsx`                          | 마지막 사용자 메시지 높이, ResizeObserver 확인            |

---

## 13. 변경 후 검증 체크리스트

문구만 수정한 경우:

1. `yarn dev`
2. 변경 화면 직접 확인
3. PC/모바일 폭에서 줄바꿈 확인

시나리오 UI를 수정한 경우:

1. `yarn lint`
2. `yarn build`
3. 해당 시나리오 실제 진입
4. 마지막 메시지 버튼만 활성화되는지 확인
5. 중복 클릭 방지 상태 확인
6. 성공/실패/빈 목록 케이스 확인

API 호출 또는 인증을 수정한 경우:

1. `yarn build`
2. 비로그인 채팅 확인
3. 로그인 후 채팅 확인
4. 새로고침 후 로그인 복구 확인
5. refresh 만료 또는 401 상황 확인
6. 로그아웃 후 사용자 정보 초기화 확인

배포 전 최소 확인:

```bash
yarn lint
yarn build
```

---

## 14. 유지보수 원칙

구조가 크지 않은 프로젝트. 과한 추상화보다 현재 패턴 유지 권장.

권장 방식:

- 문구/메뉴/링크: 가능한 `constants/`에서 먼저 확인.
- 특정 시나리오 화면만 변경: 해당 시나리오 파일 안에서 작게 수정.
- 공통 컴포넌트 수정: 여러 시나리오 영향 가능. 사용처 먼저 검색.
- `useEffect` dependency: 자동 추가 금지. 동작 변화 확인.
- `apiResults` 구조 변경: 백엔드 응답과 동시 정합성 확인.
- `isLastMessage` 기반 비활성화 정책 유지.
- URL, 토큰, 마크다운 렌더링: 보안 영향 우선 확인.

피해야 할 작업:

- 단순 문구 수정 때문에 전체 상태 구조 변경
- 한 시나리오 수정 때문에 공통 컴포넌트 동작 변경
- access token을 웹 스토리지에 저장
- 검증 없이 외부 링크 허용 범위 확대
- 백엔드 `scenarioName`과 프론트 매핑을 따로 변경
