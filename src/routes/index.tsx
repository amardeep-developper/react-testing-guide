import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);