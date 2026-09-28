import { useEffect } from "react";
import {
  SALES_EMAIL,
  SALES_URL,
  salesJsonLd,
  salesSeo,
} from "../constants/salesSeo";

const MAIL = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("[개발 견적 문의] ")}`;

const services = [
  {
    title: "웹사이트 · 관리자 페이지",
    text: "회사나 매장 소개 사이트, 예약·회원·주문을 관리하는 관리자 화면을 만듭니다.",
  },
  {
    title: "Android, iOS 앱",
    text: "니즈에 따라 앱을 만들고 플레이스토어, App Store 심사와 출시까지 진행합니다.",
  },
  {
    title: "챗봇",
    text: "상담·예약 챗봇부터 캐릭터 챗까지 챗봇 전반을 만듭니다. 쓰고 있는 챗봇 서비스나 AI 모델에 연결합니다.",
  },
  {
    title: "구글 시트 · 엑셀 기반 업무 도구",
    text: "지금 쓰는 시트를 그대로 저장소로 써서, 서버 비용 없이 돌아가는 앱이나 도구를 만듭니다.",
  },
  {
    title: "개발 컨설팅",
    text: "바이브 코딩 환경 세팅, 기술·서비스 선택, 자료 조사처럼 개발과 관련된 상담을 합니다.",
  },
  {
    title: "멈춘 프로젝트 마무리",
    text: "만들다 막힌 프로젝트를 이어받아 완성하고 배포합니다. 바이브 코딩으로 만들다 멈춘 것도 됩니다.",
  },
];

const works = [
  {
    title: "댕하루 관리자용",
    kind: "반려견 호텔 회원관 관리 앱 및 구글 시트",
    body: [
      "강아지 방문 기록과 회원권 잔여 횟수를 관리하는 매장 직원용 앱입니다. 날짜별 메모에 강아지 이름을 적고 확정하면 방문이 기록되고 회원권 횟수가 차감됩니다.",
      "저장소와 서버 비용을 들이지 않기 위해, 매장에서 원래 쓰던 엑셀과 비슷한 형태의 앱스크립트를 활용해 구글 스프레드시트를 그대로 저장소로 썼습니다. 따로 서버나 데이터베이스가 없고, 고객님은 기존처럼 시트를 열어 기록을 봅니다.",
      "기획부터 iOS 앱, 구글 시트 연동, App Store 출시까지 혼자 맡았습니다.",
    ],
    image: "/project-images/daengharu/1-calendar.jpg",
    imageAlt: "댕하루 관리자용 달력 화면",
    link: { href: "/daengharu", label: "앱 소개" },
  },
  {
    title: "일정 달력 앱",
    kind: "음력·공휴일 지원 iOS 앱·홈 위젯",
    body: [
      "음력과 한국 공휴일이 함께 보이는 달력 앱입니다. 음력 생일·제사 같은 매년 기념일을 한 번 등록하면 해마다 양력으로 환산해 표시하고, 홈 화면 위젯으로 이번 달 일정을 봅니다.",
      "대체공휴일은 2027년까지 관보 기준으로 넣고 이후 연도는 현행 규정으로 자동 계산합니다. 광고·결제·개인정보 수집이 없습니다.",
      "직접 기획·개발하여 App Store에 출시하고 운영 중입니다.",
    ],
    image: "/project-images/plan-widget/1-calendar.jpg",
    imageAlt: "일정 달력 앱 월 달력 화면",
    link: {
      href: "https://apps.apple.com/kr/app/id6804972538",
      label: "App Store 보기",
    },
  },
  {
    title: "단석가 온라인몰 운영·개편",
    kind: "카페24 쇼핑몰 관리 및 개편 컨설팅",
    body: [
      "찰보리빵 브랜드 단석가의 카페24 자사몰을 맡아 운영하고 개편했습니다. 리뉴얼 디자인 시안 제안, 링크·메뉴·배너 오류 수정, 토스페이 결제 프로모션 적용, 블로그·SNS 링크 정비를 진행했습니다.",
      "매장 안내는 통이미지였던 페이지를 매장별 카드로 다시 만들어 네이버 지도와 연결했고, 카페24에서 되는 것과 안 되는 것을 확인해 대안까지 안내했습니다.",
    ],
    image: "/project-images/danseokga/home.jpg",
    imageAlt: "단석가 온라인몰 화면",
    link: {
      href: "https://chalboribread.com/",
      label: "온라인몰 보기",
    },
  },
  {
    title: "행사 웹사이트",
    kind: "행사용 단일·다중 페이지 사이트",
    body: [
      "행사 성격에 맞춰 한 페이지짜리 안내 사이트부터 여러 메뉴를 갖춘 사이트까지 만듭니다.",
      "서울특별시가 주최한 2025 서울전통춤문화제 공식 사이트는 축제 소개·일정·장소, 프로그램·출연진, 공지사항과 자료 아카이브로 구성했습니다.",
    ],
    image: "/project-images/moveseoul/home.jpg",
    imageAlt: "2025 서울전통춤문화제 사이트 화면",
    link: { href: "https://www.moveseoul.kr/", label: "사이트 보기" },
  },
  {
    title: "한컴오피스 EditUp",
    kind: "한글 문서 AI 교열 애드온",
    body: [
      "한글 문서 안에서 AI가 고친 문장을 원문과 비교하고, 필요한 것만 골라 문서에 반영하는 애드온입니다.",
      "한글 파일에서 내부적으로 사용하는 HWP API의 가이드를 받아 읽고 해당 방식에 맞게 개발하였습니다.",
      "업스테이지(Upstage)의 교열 API를 연동해 만들었고, 설치 파일(exe)로 한컴 사이트에서 배포됐습니다.",
      "젠틀파이 재직 중 담당한 프로젝트로, 고객사인 한컴과 직접 소통하며 개발했습니다.",
    ],
    image: "/project-images/hancom/overview.webp",
    imageAlt: "EditUp AI 교열 화면",
  },
  {
    title: "키움증권 영웅문 AI 업무 챗봇",
    kind: "증권사 앱 안의 AI 챗봇",
    body: [
      "키움증권 영웅문 앱 안에서 동작하는 AI 챗봇입니다. 계좌 정보, 현재가·지수·환율, 공모주 조회 같은 업무 시나리오 화면과 상담 입력 폼, 차트 메시지를 만들었습니다.",
      "갤럭시 폴드처럼 폭이 좁은 기기와 구형 iPhone에서도 깨지지 않게 맞췄습니다.",
      "젠틀파이 재직 중 담당한 프로젝트로, 고객사인 키움증권과 직접 소통하며 개발했습니다.",
    ],
    image: "/project-images/kiwoom/home.webp",
    imageAlt: "키움증권 영웅문 챗봇 화면",
    link: {
      href: "https://www.youtube.com/watch?v=3r6fSKLeTtQ",
      label: "소개 영상",
    },
  },
];

/** 검색 로봇이 자바스크립트를 실행할 때를 위해 head 도 이 페이지 값으로 바꾼다(빌드 때 dist/sales/index.html 에도 같은 값이 들어간다). */
const useSalesHead = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const touched = [];
    const set = (selector, create, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
        touched.push([el, null]);
      } else {
        touched.push([el, el.getAttribute(attr)]);
      }
      el.setAttribute(attr, value);
    };
    const meta = (key, value, attr = "name") =>
      set(
        `meta[${attr}="${key}"]`,
        () => {
          const m = document.createElement("meta");
          m.setAttribute(attr, key);
          return m;
        },
        "content",
        value,
      );

    document.title = salesSeo.title;
    meta("description", salesSeo.description);
    meta("keywords", salesSeo.keywords);
    meta("og:title", salesSeo.title, "property");
    meta("og:description", salesSeo.description, "property");
    meta("og:url", SALES_URL, "property");
    set(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      "href",
      SALES_URL,
    );

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify(salesJsonLd);
    document.head.appendChild(ld);

    return () => {
      document.title = previousTitle;
      ld.remove();
      for (const [el, value] of touched) {
        if (value === null) el.remove();
        else el.setAttribute(el.tagName === "LINK" ? "href" : "content", value);
      }
    };
  }, []);
};

/** hasangwon.com/sales — 개발 견적 문의 페이지. 포트폴리오와 별개다. */
const SalesPage = () => {
  useSalesHead();

  return (
    <main className="h-[100dvh] overflow-y-auto break-keep bg-white text-neutral-900">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
        <header className="w-full">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            개발 견적 문의
          </h1>
          <div className="mt-10 grid overflow-hidden rounded-2xl border border-neutral-200 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="p-7 sm:p-9">
              <div>
                <p>
                  <span className="block text-xl font-bold text-neutral-900 sm:text-2xl">
                    안녕하세요, 하상원입니다.
                  </span>
                  <span className="mt-1 block text-neutral-600 sm:text-lg">
                    저는 5년 이상 현직 프론트엔드 개발자로 일하고 있습니다.
                  </span>
                </p>
              </div>
              <div className="mt-7 space-y-4 border-t border-neutral-200 pt-7 text-base leading-7 text-neutral-600 sm:text-[17px] sm:leading-8">
                <p>
                  한 페이지짜리 행사 사이트부터, 개인사업자의 쇼핑몰 운영, 매장
                  관리 앱, 대기업 서비스의 기능 개발까지 다양하게 맡아
                  개발/운영하고 있습니다.
                </p>
                <p>
                  의뢰받은 일은 첫 상담부터 개발, 배포, 이후 유지보수까지 직접
                  진행합니다. 개발 용어를 몰라도 됩니다.
                  <br />
                  필요한 것을 말로 설명해 주시면 제가 정리해서 방법을 제안하고
                  만듭니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 border-t border-neutral-200 bg-neutral-50 p-7 sm:p-9 lg:border-t-0 lg:border-l">
              <div>
                <p className="flex items-center gap-2 text-sm text-neutral-500">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-4"
                  >
                    <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
                    <path d="m3 5.5 7 5 7-5" />
                  </svg>
                  이메일
                </p>
                <p className="mt-2 break-all text-lg font-semibold text-neutral-900">
                  {SALES_EMAIL}
                </p>
              </div>
              <a
                className="group inline-flex items-center gap-1.5 self-start text-lg font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
                href={MAIL}
              >
                견적 문의하기
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M4 10h11m-4-4 4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <section className="mt-24" aria-labelledby="services">
          <h2 id="services" className="text-2xl font-bold">
            작업 범위
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="works">
          <h2 id="works" className="text-2xl font-bold">
            작업 사례
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {works.map((work) => (
              <article
                key={work.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200"
              >
                <div className="flex h-64 items-center justify-center bg-neutral-100 p-5">
                  <img
                    className="max-h-full max-w-full rounded-md object-contain shadow-sm"
                    src={work.image}
                    alt={work.imageAlt}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm text-neutral-500">{work.kind}</p>
                  <h3 className="mt-1 text-xl font-bold">{work.title}</h3>
                  {work.body.map((text) => (
                    <p key={text} className="mt-3 leading-7 text-neutral-600">
                      {text}
                    </p>
                  ))}
                  {work.link && (
                    <a
                      className="mt-5 inline-block self-start text-sm font-semibold underline underline-offset-4"
                      href={work.link.href}
                      target={
                        work.link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                    >
                      {work.link.label}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl bg-neutral-100 p-8 sm:p-10">
          <h2 className="text-2xl font-bold">견적 문의</h2>
          <p className="mt-3 leading-7 text-neutral-600">
            만들고 싶은 것, 참고할 서비스, 원하는 일정을 몇 줄로 적어 보내
            주세요.
          </p>
          <p className="mt-6">
            <a
              className="text-lg font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
              href={MAIL}
            >
              견적 문의하기
            </a>
          </p>
          <p className="mt-2 text-sm text-neutral-500">이메일 {SALES_EMAIL}</p>
        </section>

        <footer className="mt-16 text-sm text-neutral-400">
          © 2026 하상원
        </footer>
      </div>
    </main>
  );
};

export default SalesPage;
