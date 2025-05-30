import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main><Outlet/></main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
