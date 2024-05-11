import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Dashboard from "../pages/dashboard";
import Report from "../pages/report";
import Register from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgot-password";
import Organization from "@/pages/organization";
import Attendance from "@/pages/attendance";
import CreateAttendance from "@/pages/attendance/create-attendance";

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
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "organization",
    element: <Organization />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
  {
    path: "/attendance/new",
    element: <CreateAttendance />,
  },
]);

export default router;
