import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import HomeSection from "./Pages/HomeSection";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css"




const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;