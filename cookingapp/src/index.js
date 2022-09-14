import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Catalog from "./components/pages/Catalog";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import Recipe from "./components/pages/Recipe";
import Ingredienti from "./components/Ingredienti";
import Istruzioni from "./components/Istruzioni";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogo/:categoryName">
          <Route index element={<Catalog />} />
          <Route path=":recipeName/:id" element={<Recipe />}>
            <Route path="" element={"What do you want see ?"} />
            <Route path="youtube" element={<Player />} />
            <Route path="ingredients" element={<Ingredienti />} />
            <Route path="istruzioni" element={<Istruzioni />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
