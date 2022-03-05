import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateLandingPage } from "./components/Pages/LandingPage/ContextLandingPage/StateLandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./components/Pages/LoginPage/LogIn";
import { SignUp } from "./components/Pages/SignUpPage/SignUp";
import HomeMain from "./components/Pages/HomePage/HomeMain";
import About from "./components/Pages/About/About";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="about" element={<About />} />
      <Route path="Home" element={<HomeMain />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
