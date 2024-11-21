import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/Global.css";

import App from "./App";
import MyCalendar from "./components/Calendar";
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
