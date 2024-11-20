import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/Global.css";

import App from "./App";
import Aleatoire from "./pages/Aleatoire";
import HomePage from "./pages/HomePage";
import NaoNight from "./pages/NaoNight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Home",
    element: <App />,
    children: [
      {
        path: "",
        element: <Aleatoire />,
      },
    ],
  },
  {
    path: "/Naonight",
    element: <NaoNight />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
