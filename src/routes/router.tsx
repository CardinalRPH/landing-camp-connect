import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layouts/RootLayout";
import Home from "../pages/Home";
import HomeLayout from "../pages/layouts/HomeLayout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            path:"/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
