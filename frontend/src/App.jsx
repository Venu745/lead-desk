import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import LeadPage from "./pages/LeadPage";
import toast from "react-hot-toast";
import DashBoard from "./pages/DashBoard";
import AdminLogin from "./admin/AdminLogin";
import AdminView from "./admin/AdminView";
import LeadCard from "./pages/LeadCard";
import AdminProtectedRoute from "./admin/AdminProtectRouter";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note" element={<LeadPage />} />
        <Route path="/note/:id" element={<LeadCard />} />

        <Route path="/dashboard" element={<DashBoard />} />
        {/*  admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admindash"
          element={
            <AdminProtectedRoute>
              <AdminView />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
