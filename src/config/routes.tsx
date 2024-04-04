import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Dashboard from "../pages/dashboard/dashboard";
import Report from "../pages/report/report";
import Register from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgot-password";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

export default router;
