import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import DashboardLayout from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pages/DashBoardPages/StudentPages/MyClasses";
import ManageUsers from "../pages/DashBoardPages/Admin/ManageUsers";
import ManageClasses from "../pages/DashBoardPages/Admin/ManageClasses";
import MyClass from "../pages/DashBoardPages/InstructorsPage/MyClass";
import AddClass from "../pages/DashBoardPages/InstructorsPage/AddClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // Student Routes ========================================
      {
        path: "/dashboard/myclasses",
        element: <MyClasses></MyClasses>,
      },
      // Student Routes Ends ===================================

      // Admin Routes =======================================
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
      // Admin Routes Ends ==================================

      // Instructors Routes ======================
      {
        path: "/dashboard/myclass",
        element: <MyClass></MyClass>,
      },
      {
        path: "/dashboard/addclass",
        element: <AddClass></AddClass>,
      },
      // Instructors Routes Ends =================
    ],
  },
]);
