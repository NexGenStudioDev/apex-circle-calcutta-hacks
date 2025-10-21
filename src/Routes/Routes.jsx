import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutKolkata from "../page/AboutKolkata";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-kolkata",
    element: <AboutKolkata />,
  }
]);


export default router;