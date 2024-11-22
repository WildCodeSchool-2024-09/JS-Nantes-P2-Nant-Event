import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/Global.css";
import App from "./App";
import Agenda from "./pages/Agenda";
import Aleatoire from "./pages/Aleatoire";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import NaoNight from "./pages/NaoNight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "Agenda",
        element: <Agenda />,
      },
      {
        path: "Aleatoire",
        element: <Aleatoire />,
      },
      {
        path: "MapPage",
        element: <MapPage />,
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
