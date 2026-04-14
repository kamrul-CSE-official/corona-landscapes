import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ServicesPage from "./pages/services-page";
import ContactPage from "./pages/contact-page";
import BlogsPage from "./pages/Blogs-page";
import BlogDetailsPage from "./pages/blogDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routers;