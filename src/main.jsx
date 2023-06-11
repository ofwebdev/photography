import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

import { createTheme, ThemeProvider } from "@mui/material/styles";
import NotFound from "./pages/Restricted/NotFound.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PopularClassesSection from "./components/Popular/PopularClassesSection.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AllUser from "./components/Dashboard/AllUser.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AdminRoute from "./PrivateRoute/AdminRoute.jsx";
import AddClass from "./components/Dashboard/Instructor/AddClass.jsx";
import MyClass from "./components/Dashboard/Instructor/Myclass.jsx";
import AllClasses from "./components/Dashboard/AllClasses.jsx";

const theme = createTheme({
  palette: {
    mode: localStorage.getItem("darkMode") === "dark" ? "dark" : "light",
    primary: {
      main: "#f44336", // Red color for primary elements
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3f51b5", // Blue color for secondary elements
      light: "#7986cb",
      dark: "#303f9f",
      contrastText: "#ffffff",
    },
    success: {
      main: "#66bb6a", // Green color for success elements
      light: "#98ee99",
      dark: "#338a3e",
      contrastText: "#ffffff",
    },
    error: {
      main: "#e91e63", // Pink color for error elements
      light: "#ff6090",
      dark: "#b0003a",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ff9800", // Orange color for warning elements
      light: "#ffc947",
      dark: "#c66900",
      contrastText: "#ffffff",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },
      {
        path: "allclasses",
        element: (
          <AdminRoute>
            <AllClasses />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/classes",
    element: <PopularClassesSection />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
