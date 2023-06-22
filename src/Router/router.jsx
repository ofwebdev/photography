import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import InstructorList from "../components/InstructorList/InstructorList";
import Classes from "../components/Popular/Classes.jsx";
// Dashboard Route
// import Dashboard from "../Dashboard/Dashboard.jsx";
import AllUser from "../components/Dashboard/AllUser.jsx";
import AddClass from "../components/Dashboard/Instructor/AddClass.jsx";
import MyClass from "../components/Dashboard/Instructor/MyClass.jsx";
import AllClasses from "../components/Dashboard/AllClasses.jsx";
import Profile from "../components/Dashboard/Instructor/Profile.jsx";
import SelectedItems from "../components/Dashboard/Student/SelectedItems.jsx";
import Pay from "../components/Dashboard/Payment/Pay.jsx";
import PaymentHistory from "../components/Dashboard/Payment/PaymentHistory.jsx";

// Private Route
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import AdminRoute from "../PrivateRoute/AdminRoute.jsx";

// 404 page
import NotFound from "../pages/Restricted/NotFound.jsx";
import DashboardLayout from "../layout/dashboard/DashboardLayout.jsx";
import DashboardAppPage from "../layout/pages/DashboardAppPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        // path: "app",
        element: <DashboardAppPage />,
        index: true,
      },
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
