import { createBrowserRouter } from "react-router-dom";

import App from "../../App.jsx";
import NotFound from "../../pages/Restricted/NotFound.jsx";
import Login from "../../pages/Login/Login.jsx";
import Register from "../../pages/Register/Register.jsx";
import PopularClassesSection from "../Popular/PopularClassesSection.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import AllUser from "../Dashboard/AllUser.jsx";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.jsx";
import AdminRoute from "../../PrivateRoute/AdminRoute.jsx";
import AddClass from "../Dashboard/Instructor/AddClass.jsx";
import MyClass from "../Dashboard/Instructor/MyClass.jsx";
import AllClasses from "../Dashboard/AllClasses.jsx";
import Profile from "../Dashboard/Instructor/Profile.jsx";
import InstructorList from "../InstructorList/InstructorList";

export const router = createBrowserRouter([
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
        path: "profile",
        element: <Profile></Profile>,
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
    path: "/instructors",
    element: <InstructorList />,
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
