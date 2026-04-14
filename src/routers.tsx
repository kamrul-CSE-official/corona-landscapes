import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ServicesPage from "./pages/services-page";
import ContactPage from "./pages/contact-page";
import BlogsPage from "./pages/Blogs-page";
import BlogDetailsPage from "./pages/blogDetailsPage";

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
      {
        path: "services",
        element: <ServicesPage />,
        errorElement: <h1>Not found</h1>,
      },
      {
        path: "contact",
        element: <ContactPage />,
        errorElement: <h1>Not found</h1>,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
        errorElement: <h1>Not found</h1>,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailsPage />,
      },
    ],
  },
]);

export default routers;
