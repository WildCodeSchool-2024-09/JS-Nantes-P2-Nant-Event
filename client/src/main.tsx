import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/Global.css";
import App from "./App";
import Agenda from "./pages/Agenda";
import Aleatoire from "./pages/Aleatoire";
import Evenement from "./pages/Evenement";
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
      {
        path: "Event/:id",
        element: <Evenement />,
        loader: ({ params }) =>
          fetch(
            `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=id_manif%3A${params.id}`,
          ),
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
