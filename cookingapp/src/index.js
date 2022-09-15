import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Catalog from "./components/pages/Catalog";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import Recipe from "./components/pages/Recipe";
import Ingredienti from "./components/Ingredienti";
import Istruzioni from "./components/Istruzioni";
import { ENDPOINTS } from "./utils/endpoints";

// versione new 6.4
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      {
        path: "/catalogo",
        element: <ErrorPage />,
      },
      {
        path: "/catalogo/:categoryName",
        children: [
          {
            // path: '' o index alias
            path: "",
            element: <Catalog />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <Recipe />,
            children: [
              {
                path: "",
                element: <Navigate to="istruzioni" />,
              },
              {
                path: "youtube",
                element: <Player />,
              },
              {
                path: "ingredients",
                element: <Ingredienti />,
              },
              {
                path: "istruzioni",
                element: <Istruzioni />,
              },
            ],
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.DETEAIL}?i=${params?.id}`);
            },
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* versione 6.3
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/catalogo" element={<ErrorPage />} />
        <Route path="/catalogo/:categoryName">
          <Route index element={<Catalog />} />
          <Route path=":recipeName/:id" element={<Recipe />}>
            <Route path="" element={<Navigate to="istruzioni" />} />
            <Route path="youtube" element={<Player />} />
            <Route path="ingredients" element={<Ingredienti />} />
            <Route path="istruzioni" element={<Istruzioni />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
