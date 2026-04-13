import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
        errorElement: <h1>Not found</h1>,
      },
      {
        path: "about",
        element: <AboutPage />,
        errorElement: <h1>Not found</h1>,
      },
    ],
  },
]);

export default routers;
