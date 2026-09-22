import { useEffect } from "react";
import "./DaengharuPage.css";

const APP_NAME = "댕하루달력";
const CONTACT = "daengha23@gmail.com";
const EFFECTIVE = "2026년 9월 22일";

const links = [
  { href: "/daengharu", label: "소개", view: "/" },
  { href: "/daengharu/privacy", label: "개인정보처리방침", view: "/privacy" },
  { href: "/daengharu/terms", label: "서비스 약관", view: "/terms" },
];

const Emoji = ({ children, className = "" }) => (
  <span aria-hidden="true" className={`dh-emoji ${className}`}>{children}</span>
);

const Section = ({ title, children }) => (
  <section className="dh-section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

const Paragraph = ({ children }) => (
  <p className="dh-paragraph">{children}</p>
);

const Bullets = ({ items }) => (
  <ul className="dh-bullets">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const HomeContent = () => (
  <>
    <section className="dh-features" aria-labelledby="dh-features-title">
      <div className="dh-section-heading">
        <h2 id="dh-features-title">댕댕이의 하루를 차곡차곡</h2>
        <Emoji>🐾</Emoji>
      </div>
      <div className="dh-feature-grid">
        {[
          { emoji: "🐶", title: "오늘은 누가 왔을까?", text: "세로 스크롤 월 달력에서 날짜별로 방문한 강아지를 확인해요.", color: "mint" },
          { emoji: "🐾", title: "다녀간 날은 콕!", text: "날짜 메모장에 이름을 적고 확정하면 회원권 잔여 횟수가 자동으로 차감돼요.", color: "pink" },
          { emoji: "🦴", title: "다음 만남도 잊지 않게", text: "5회·10회·20회 등 회원권을 등록하고 남은 횟수와 만료일을 살펴봐요.", color: "yellow" },
          { emoji: "🔑", title: "우리 선생님만 들어와요", text: "Google 계정으로 로그인하고, 허용된 운영자만 기록에 접근해요.", color: "blue" },
        ].map((feature) => (
          <div key={feature.title} className={`dh-feature dh-feature--${feature.color}`}>
            <Emoji className="dh-feature-icon">{feature.emoji}</Emoji>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="dh-storage">
      <Emoji>📒</Emoji>
      <div>
        <h2>소중한 기록은 운영자의 공간에</h2>
        <Paragraph>
          기록은 운영자 소유의 Google 스프레드시트에 저장돼요.
          별도의 서버나 데이터베이스는 두지 않아요.
        </Paragraph>
      </div>
    </section>
    <section className="dh-contact">
      <div>
        <h2>궁금한 게 있으신가요?</h2>
        <a href={`mailto:${CONTACT}`}>{CONTACT} <span aria-hidden="true">↗</span></a>
      </div>
      <Emoji>🐕</Emoji>
    </section>
  </>
);

const PrivacyContent = () => (
  <>
    <Paragraph>
      {APP_NAME}(이하 "앱")은 매장 운영자가 업무용으로 사용하는 비공개 앱입니다. 앱은
      다음과 같이 개인정보를 처리합니다.
    </Paragraph>
    <Section title="1. 수집하는 정보">
      <Bullets
        items={[
          "Google 계정 이메일 주소: Google 로그인 시 제공받아 접근이 허용된 운영자인지 확인하는 데만 사용합니다. 프로필의 이름·사진은 저장하지 않습니다.",
          "운영자가 입력한 업무 기록: 강아지 이름, 보호자 이름, 회원권 종류·기간, 방문 날짜, 관리자 메모. 운영자가 직접 입력한 내용만 저장됩니다.",
        ]}
      />
    </Section>
    <Section title="2. 저장 위치와 보관">
      <Paragraph>
        모든 업무 기록은 운영자(사업자)가 소유한 Google 스프레드시트에 저장됩니다. 앱
        개발자는 별도의 서버·데이터베이스를 운영하지 않으며 기록을 보관하지 않습니다.
        확정 전 임시 메모는 사용자 기기 안에만 저장됩니다. 기록의 보관 기간과 삭제는
        스프레드시트 소유자인 운영자가 결정합니다.
      </Paragraph>
    </Section>
    <Section title="3. 이용 목적">
      <Bullets items={["운영자 본인 확인 및 접근 제어", "회원권 잔여 횟수 계산과 방문 기록 관리"]} />
    </Section>
    <Section title="4. 제3자 제공">
      <Paragraph>
        수집한 정보를 제3자에게 판매·제공하지 않습니다. 로그인과 저장에는 Google LLC의
        서비스(Google 로그인, Google Sheets, Google Apps Script)를 이용하며, 해당 서비스는
        Google의 개인정보처리방침을 따릅니다.
      </Paragraph>
    </Section>
    <Section title="5. 이용자의 권리">
      <Paragraph>
        이용자는 언제든지 앱에서 로그아웃하거나 Google 계정 설정에서 앱의 접근 권한을
        철회할 수 있습니다. 기록의 열람·수정·삭제는 스프레드시트에서 직접 하거나 아래
        연락처로 요청할 수 있습니다.
      </Paragraph>
    </Section>
    <Section title="6. 안전성">
      <Paragraph>
        앱과 스프레드시트 사이의 통신은 HTTPS로 암호화되며, 허용 목록에 등록된 Google
        계정만 기록에 접근할 수 있습니다.
      </Paragraph>
    </Section>
    <Section title="7. 문의">
      <Paragraph>{CONTACT}</Paragraph>
    </Section>
    <Section title="8. 변경">
      <Paragraph>이 방침이 바뀌면 이 페이지에 시행일과 함께 게시합니다.</Paragraph>
    </Section>
  </>
);

const TermsContent = () => (
  <>
    <Section title="1. 대상">
      <Paragraph>
        {APP_NAME}(이하 "앱")은 매장 운영자와 운영자가 허용한 직원이 업무용으로 사용하는
        비공개 앱입니다. 일반 소비자용 서비스가 아닙니다.
      </Paragraph>
    </Section>
    <Section title="2. 이용">
      <Paragraph>
        이용자는 허용된 Google 계정으로 로그인하여 회원권과 방문 기록을 관리할 수
        있습니다. 기록의 정확성과 관리 책임은 운영자에게 있습니다.
      </Paragraph>
    </Section>
    <Section title="3. 데이터">
      <Paragraph>
        모든 기록은 운영자 소유의 Google 스프레드시트에 저장됩니다. 앱 개발자는 기록을
        열람·보관하지 않으며, 스프레드시트의 백업과 관리는 운영자가 담당합니다.
      </Paragraph>
    </Section>
    <Section title="4. 책임의 한계">
      <Paragraph>
        앱은 현 상태로 제공됩니다. Google 서비스 장애, 네트워크 문제, 운영자의 입력 오류로
        발생한 손해에 대해 개발자는 책임을 지지 않습니다.
      </Paragraph>
    </Section>
    <Section title="5. 변경">
      <Paragraph>약관이 바뀌면 이 페이지에 시행일과 함께 게시합니다.</Paragraph>
    </Section>
    <Section title="6. 문의">
      <Paragraph>{CONTACT}</Paragraph>
    </Section>
  </>
);

const views = {
  "/": { title: APP_NAME, eyebrow: "강아지 호텔 · 데이케어를 위한 iOS 앱", content: <HomeContent /> },
  "/privacy": { title: "개인정보처리방침", eyebrow: "Privacy Policy", content: <PrivacyContent /> },
  "/terms": { title: "서비스 약관", eyebrow: "Terms of Service", content: <TermsContent /> },
};

/** hasangwon.com/daengharu 하위: 댕하루달력 앱 소개·개인정보처리방침·약관 (Google OAuth 게시 요건). */
const DaengharuPage = ({ view = "/" }) => {
  const current = views[view] ?? views["/"];
  const isHome = current === views["/"];

  useEffect(() => {
    const previous = document.title;
    document.title = view === "/" || !views[view] ? APP_NAME : `${current.title} | ${APP_NAME}`;
    return () => {
      document.title = previous;
    };
  }, [view, current.title]);

  return (
    <main className="daengharu-page">
      <header className="dh-header">
        <div className="dh-header-inner">
          <a className="dh-brand" href="/daengharu"><Emoji>🐶</Emoji>{APP_NAME}</a>
          <nav className="dh-nav" aria-label="댕하루달력 메뉴">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.view === (isHome ? "/" : view) ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <article className={`dh-article ${isHome ? "dh-home" : "dh-document"}`}>
        <div className="dh-intro">
          {isHome && (
            <div className="dh-welcome" aria-hidden="true">
              <Emoji className="dh-paw dh-paw-left">🐾</Emoji>
              <Emoji className="dh-mascot">🐶</Emoji>
              <span className="dh-hello">반가워요, 멍!</span>
              <Emoji className="dh-paw dh-paw-right">🐾</Emoji>
            </div>
          )}
          <p className="dh-eyebrow">{current.eyebrow}</p>
          <h1>{current.title}{!isHome && <Emoji>🐾</Emoji>}</h1>
          {isHome ? (
            <p className="dh-intro-copy">함께한 하루, 발자국 하나.<br />강아지의 방문 기록과 회원권을 한곳에서 관리해요.</p>
          ) : (
            <p className="dh-effective">시행일 {EFFECTIVE}</p>
          )}
        </div>
        <div className="dh-content">{current.content}</div>
        <footer className="dh-footer">
          <span>© 2026 {APP_NAME}</span>
          <span>매일매일, 반가운 발자국 <Emoji>🐾</Emoji></span>
        </footer>
      </article>
    </main>
  );
};

export default DaengharuPage;
