import { useEffect } from "react";

const CONTACT = "305243@naver.com";
const UPDATED = "2026-08-25";

const Section = ({ title, children }) => (
  <section className="mt-9 [counter-increment:section]">
    <h2 className="mb-3 text-[19px] font-extrabold text-slate-900 before:content-[counter(section)'._'] dark:text-slate-100">
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </section>
);

const Paragraph = ({ children }) => (
  <p className="text-[15px] leading-[1.9] text-slate-600 dark:text-slate-400">
    {children}
  </p>
);

const Bullets = ({ items }) => (
  <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.9] text-slate-600 marker:text-sky-400 dark:text-slate-400">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Strong = ({ children }) => (
  <strong className="font-bold text-slate-900 dark:text-slate-100">
    {children}
  </strong>
);

/** hasangwon.com/support?type=N: 하상원 앱 개인정보 처리방침 (App Store 지원 URL). */
// isCalendar: /support-1 (하상원의 달력). 아니면 캘린더 전용 내용을 뺀 공통 방침 (/support).
const SupportPage = ({ isCalendar = false }) => {
  const appName = isCalendar ? "하상원의 달력" : "하상원의 앱";

  useEffect(() => {
    const previous = document.title;
    document.title = `개인정보 처리방침 | ${appName}`;
    return () => {
      document.title = previous;
    };
  }, [appName]);

  return (
    <main className="h-[100dvh] overflow-y-auto bg-white break-keep text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex min-h-16 max-w-[820px] items-center gap-2.5 px-7 max-[700px]:px-5">
          <span className="text-lg font-extrabold">{appName}</span>
        </div>
      </header>

      <article className="mx-auto max-w-[820px] px-7 max-[700px]:px-5 max-[360px]:px-4">
        <div className="border-b border-slate-200 pt-11 pb-9 dark:border-slate-800 max-[700px]:py-7">
          <p className="mb-2.5 text-xs font-bold text-sky-600 dark:text-sky-400">
            Privacy Policy — {appName}
          </p>
          <h1 className="text-[30px] leading-[1.3] font-[850] max-[700px]:text-[26px]">
            개인정보 처리방침
          </h1>
          <p className="mt-3 text-[13px] text-slate-500">
            최종 업데이트: {UPDATED}
          </p>
        </div>

        <div className="pt-1 pb-12 [counter-reset:section]">
          <Section title="개요">
            <Paragraph>
              {appName}(이하 "앱")은 사용자의 개인정보를 소중히 여기며, 이 앱은{" "}
              <Strong>어떠한 개인정보도 수집·저장·전송하지 않습니다.</Strong>{" "}
              별도의 회원가입이나 로그인도 요구하지 않습니다.
            </Paragraph>
          </Section>
          <Section title="수집하는 정보">
            <Paragraph>
              앱은 사용자로부터 어떠한 개인정보도 수집하지 않습니다.
            </Paragraph>
            <Bullets
              items={[
                "이름, 이메일, 전화번호 등 식별 정보를 수집하지 않습니다.",
                "사용 기록, 위치, 광고 식별자 등을 수집·추적하지 않습니다.",
              ]}
            />
          </Section>
          <Section title="기기에 저장되는 데이터">
            <Paragraph>
              사용자가 앱에서 만든{" "}
              {isCalendar ? "일정·기념일·설정" : "데이터·설정"}은{" "}
              <Strong>사용자의 기기 내부에만 저장</Strong>됩니다.
            </Paragraph>
            <Bullets
              items={[
                "iCloud 동기화를 켠 경우, 이 데이터는 사용자 본인의 Apple 계정(iCloud)에만 저장·동기화되며, 개발자를 포함한 제3자는 접근할 수 없습니다.",
                "개발자에게 전송되거나 외부 서버에 저장되지 않습니다.",
              ]}
            />
          </Section>
          {isCalendar && (
            <Section title="캘린더 접근 권한">
              <Paragraph>
                "애플 달력 연동" 기능을 켠 경우에만, 앱은 기기의 기본 캘린더
                일정을 <Strong>읽기 전용으로</Strong> 불러와 화면에 함께
                표시합니다.
              </Paragraph>
              <Bullets
                items={[
                  "캘린더 데이터는 오직 화면 표시 목적으로만 사용됩니다.",
                  "앱이 캘린더 데이터를 수정하거나 외부로 전송하지 않습니다.",
                  "이 권한은 언제든지 기기 설정에서 해제할 수 있습니다.",
                ]}
              />
            </Section>
          )}
          <Section title="알림">
            <Paragraph>
              알림을 켠 경우, 알림은 기기 내부에서만 처리되며 외부로 어떤 정보도
              전송되지 않습니다.
            </Paragraph>
          </Section>
          <Section title="결제 (인앱 구매)">
            <Paragraph>
              후원 및 광고 제거 결제는 Apple의 App Store를 통해 처리됩니다. 결제
              정보(카드 정보 등)는 Apple이 처리하며, 개발자는 사용자의 결제 수단
              정보에 접근하지 않습니다.
            </Paragraph>
          </Section>
          <Section title="아동의 개인정보">
            <Paragraph>
              앱은 아동을 포함한 누구의 개인정보도 수집하지 않습니다.
            </Paragraph>
          </Section>
          <Section title="개인정보 처리방침의 변경">
            <Paragraph>
              이 방침은 필요 시 변경될 수 있으며, 변경 시 이 페이지에
              게시합니다.
            </Paragraph>
          </Section>
          <Section title="문의">
            <Paragraph>
              지원 관련 문의:{" "}
              <a
                className="text-sky-600 underline-offset-4 hover:underline dark:text-sky-400"
                href={`mailto:${CONTACT}`}
              >
                {CONTACT}
              </a>
            </Paragraph>
          </Section>
        </div>

        <footer className="border-t border-slate-200 pt-5 pb-[26px] text-xs text-slate-500 dark:border-slate-800">
          © 2026 {appName}
        </footer>
      </article>
    </main>
  );
};

export default SupportPage;
