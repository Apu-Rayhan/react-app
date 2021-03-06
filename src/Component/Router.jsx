import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio.jsx";
import Footer from "./Footer";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/about" element={About()} />
        <Route path="/portfolio" element={Portfolio()} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
