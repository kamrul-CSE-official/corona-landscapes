import { RouterProvider } from "react-router";
import routers from "./routers";

const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;
