import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/Global.css";
import App from "./App";
import MyCalendar from "./components/Calendar";
import FavoritePage from "./components/FavoritePage";
import Agenda from "./pages/Agenda";
import Aleatoire from "./pages/Aleatoire";
import Art from "./pages/Art";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import Music from "./pages/Music";
import NaoNight from "./pages/NaoNight";
import Show from "./pages/Show";
import Sport from "./pages/Sport";
import UserPage from "./pages/UserPage";

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
        path: "Sport",
        element: <Sport />,
      },
      {
        path: "Music",
        element: <Music />,
      },
      {
        path: "Art",
        element: <Art />,
      },
      {
        path: "Show",
        element: <Show />,
      },
      {
        path: "Userpage",
        element: <UserPage />,
      },
      { path: "FavoritePage", element: <FavoritePage /> },
    ],
  },

  {
    path: "/Naonight",
    element: <NaoNight />,
  },
  {
    path: "/Calendar",
    element: <MyCalendar />,
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
