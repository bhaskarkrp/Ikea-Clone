import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./components/Pages/LoginPage/LogIn";
import { SignUp } from "./components/Pages/SignUpPage/SignUp";
import HomeMain from "./components/Pages/HomePage/HomeMain";
import About from "./components/Pages/About/About";
import ProductRoutings from "./ProductRoutings";
import { AllProducts } from "./Components/ProductAll/AllProducts";
import { CompareProducts } from "./Components/ProductAll/CompareProducts";
import { SingleProductDetail } from "./Components/ProductAll/ProductDetailsPage/SingleProductDetail";
import { Cartpage } from "./Components/ProductAll/addToCartPage/Cartpage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ContextProvider> */}
      <App />
      {/* </ContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
