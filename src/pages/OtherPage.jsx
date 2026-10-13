import DaengharuPage from "../components/otherPages/DaengharuPage";
import SupportPage from "../components/otherPages/SupportPage";

const resetToHome = () => {
  window.location.replace(import.meta.env.BASE_URL);
};

const OtherPage = ({ page, view }) => {
  if (page === "support") {
    return <SupportPage />;
  }
  if (page === "support-1") {
    return <SupportPage isCalendar />;
  }
  if (page === "daengharu") {
    return <DaengharuPage view={view} />;
  }

  resetToHome();

  return null;
};

export default OtherPage;
