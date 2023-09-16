import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import HomeSection from "./Pages/HomeSection";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import CartData from "./Pages/CartData";

const Layout = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/CartData" element = {<CartData />} />
      </Routes>
      <Footer />
    </Provider>
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
