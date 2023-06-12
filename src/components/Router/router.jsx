import { createBrowserRouter } from "react-router-dom";

import App from "../../App.jsx";
import Login from "../../pages/Login/Login.jsx";
import Register from "../../pages/Register/Register.jsx";
import InstructorList from "../InstructorList/InstructorList";
import Classes from "../Popular/Classes.jsx";

// Dashboard Route
import Dashboard from "../Dashboard/Dashboard.jsx";
import AllUser from "../Dashboard/AllUser.jsx";
import AddClass from "../Dashboard/Instructor/AddClass.jsx";
import MyClass from "../Dashboard/Instructor/MyClass.jsx";
import AllClasses from "../Dashboard/AllClasses.jsx";
import Profile from "../Dashboard/Instructor/Profile.jsx";
import SelectedItems from "../Dashboard/Student/SelectedItems.jsx";
import Pay from "../Dashboard/Payment/Pay.jsx";
import PaymentHistory from "../Dashboard/Payment/PaymentHistory.jsx";

// Private Route
import PrivateRoute from "../../PrivateRoute/PrivateRoute.jsx";
import AdminRoute from "../../PrivateRoute/AdminRoute.jsx";

// 404 page
import NotFound from "../../pages/Restricted/NotFound.jsx";

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
        path: "select",
        element: <SelectedItems />,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },

      {
        path: "payment",
        element: <Pay />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
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
    element: <Classes />,
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
