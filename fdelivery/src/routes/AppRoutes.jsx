import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../features/home/Home";
import Onboarding from "../features/auth/onboarding";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
