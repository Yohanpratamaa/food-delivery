import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return <div><Link to="/onboarding">{children}</Link></div>;
};

export default MainLayout;
