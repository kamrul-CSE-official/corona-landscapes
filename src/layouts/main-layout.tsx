import { Outlet } from "react-router-dom";
import Header from "../components/share/header";
import Footer from "../components/share/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
