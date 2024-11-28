import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import "./styles/Global.css";
import App from "./App";
import Agenda from "./pages/Agenda";
import Aleatoire from "./pages/Aleatoire";
import Art from "./pages/Art";
import Evenement from "./pages/Evenement";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import Music from "./pages/Music";
import NaoNight from "./pages/NaoNight";
import Show from "./pages/Show";
import Sport from "./pages/Sport";

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
        path: "Music",
        element: <Music />,
      },
      {
        path: "Sport",
        element: <Sport />,
      },
      {
        path: "Show",
        element: <Show />,
      },
      {
        path: "Art",
        element: <Art />,
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

const supabase = createClient(
  "https://euowdjtjzqexuaoylmyf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1b3dkanRqenFleHVhb3lsbXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NzU3MDcsImV4cCI6MjA0NzE1MTcwN30.IHb_RTGTvxI05M6ClA6LmTrzE1Ycd8XFlT-DVdPzO-I",
);

createRoot(rootElement).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <RouterProvider router={router} />
    </SessionContextProvider>
  </StrictMode>,
);
