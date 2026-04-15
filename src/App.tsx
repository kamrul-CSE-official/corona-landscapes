import { RouterProvider } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import routers from "./routers";

const App = () => {
  AOS.init({
  duration: 1000, 
  once: false,     
  mirror: true,    
});
  return <RouterProvider router={routers} />;
};

export default App;
