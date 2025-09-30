import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Resources } from "./components/Rsource/Resource";

import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import { Explore } from "./components/Explore/Explore";
import Github from "./components/Github/Github";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import "./index.css";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userid",
        element: <User />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "github",
        element: <Github />,
      },
      {
        path: "Explore",
        element: <Explore />,
      },
      { path: "Resources", element: <Resources /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
