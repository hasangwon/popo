import HomePage from "./pages/HomePage";
import OtherPage from "./pages/OtherPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import SalesPage from "./pages/SalesPage";
import { getCurrentPath } from "./utils/getCurrentPath";

const App = () => {
  const currentPath = getCurrentPath();
  const [, page, ...rest] = currentPath.split("/");

  if (page === "support" || page === "support-1" || page === "daengharu") {
    return <OtherPage page={page} view={`/${rest.join("/")}`} />;
  }

  if (currentPath === "/sales" || currentPath === "/sails") {
    return <SalesPage />;
  }

  if (currentPath === "/resume") {
    return <ResumePage />;
  }

  if (currentPath === "/portfolio") {
    return <PortfolioPage />;
  }

  return <HomePage />;
};

export default App;
