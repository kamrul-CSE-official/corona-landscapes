import { Outlet } from "react-router-dom";
import Header from "../components/share/header";
import Footer from "../components/share/footer";
import ScrollToTop from "../utils/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
