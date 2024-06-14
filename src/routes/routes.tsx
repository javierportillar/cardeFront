import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/home.page";
import { DetailPage } from "../pages/detail/detail.page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
