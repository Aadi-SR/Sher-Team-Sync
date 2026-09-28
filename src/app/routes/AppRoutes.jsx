import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";
import { loggedInEmployee } from "../../features/auth/api/authAction";
import { useDispatch } from "react-redux";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import PublicRoute from "../protectedRoutes/PublicRoute";
import { commonRoutes } from "./CommonRoutes";
import { adminRoutes } from "./AdminRoutes";
import { employeeRoutes } from "./EmployeeRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loggedInEmployee());
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        { 
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path : "/home",
      element : <ProtectedRoute />,
      children : [
        {
          path: "",
          element : <DashboardLayout />,
          children : [...commonRoutes, ],
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
