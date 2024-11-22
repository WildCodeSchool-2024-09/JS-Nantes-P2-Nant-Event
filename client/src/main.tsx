import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/Global.css";

import App from "./App";
import Random from "./components/Random";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import NaoNight from "./pages/NaoNight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Random",
    element: <Random />,
  },

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MapPage",
    element: <MapPage />,
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
