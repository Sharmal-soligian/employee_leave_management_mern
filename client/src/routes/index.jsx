// routes/index.js
import React, { lazy, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../Context/UserContext.js";
import LoginPage from '../pages/LoginPage.jsx';
import Layout from '../components/Layout.jsx';
import LeaveApplication from "../pages/Leave application/LeaveApplication.jsx";

/* Lazy Loadin Components */
const AdminLogin = lazy(() =>
  import("../pages/Login/AdminLogin.jsx")
);
const EmployeeLogin = lazy(() =>
  import("../pages/Login/EmployeeLogin")
);
const AdminRegister = lazy(() =>
  import("../pages/Register/AdminRegister")
);
const EmployeeRegister = lazy(() =>
  import("../pages/Register/EmployeeRegister")
);
const Dashboard = lazy(() =>
  import("../pages/Dashboard/Dashboard")
);
const DepartmentLists = lazy(() =>
  import("../pages/Department Lists/DepartmentLists")
);
const EmployeeList = lazy(() =>
  import("../pages/Employee List/EmployeeList")
);
const EmployeeDetails = lazy(() =>
  import("../pages/Employee Details/EmployeeDetails")
);
const LeaveHistory = lazy(() =>
  import("../pages/Leave History/LeaveHistory")
);

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  const isAdmin = user && user.role === 'admin';
  const isEmployee = user && user.role === 'employee';

  return (
    <Routes>
      {/* Login Routes */}
      <Route path="/" element={<LoginPage />}>
        <Route index element={<AdminLogin />} />
        <Route index path="/admin-login" element={<AdminLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
      </Route>

      {/* Register Routes */}
      <Route path="/admin-register" element={<AdminRegister />} />
      <Route path="/employee-register" element={<EmployeeRegister />} />

      {/* Dashboard Route */}
      <Route
        path="/dashboard"
        element={<Layout>{isAdmin && <Dashboard />}</Layout>}
      />

      {/* Department Lists Route */}
      <Route
        path="/department-list"
        element={<Layout>{<DepartmentLists />}</Layout>}
      />

      {/* Employee List Route */}
      <Route
        path="/employee-list"
        element={<Layout>{<EmployeeList />}</Layout>}
      />

      {/* Employee Details Route */}
      <Route
        path="/employee-detail"
        element={<Layout>{<EmployeeDetails />}</Layout>}
      />

      {/* Leave History Route */}
      <Route
        path="/leave-history"
        element={<Layout>{isEmployee && <LeaveHistory />}</Layout>}
      />

      {/* Leave Application Route */}
      <Route
        path="/leave-application"
        element={<Layout>{isEmployee && <LeaveApplication />}</Layout>}
      />
    </Routes>
  );
};

export default AppRoutes;
