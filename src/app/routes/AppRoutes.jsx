import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";
import Home from "../../features/departments/ui/Home";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/authAction";
import PublicRoute from "../Protected/PublicRoute";
import ProtectedRoute from "../Protected/ProtectedRoute";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee);
    })();
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
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
