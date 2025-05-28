import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";
import Home from "../features/home/Home";
import Onboarding from "../features/auth/onboarding";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Route Blank Layout */}
        <Route element={<BlankLayout />}>
          <Route path="/" element={<Onboarding />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
