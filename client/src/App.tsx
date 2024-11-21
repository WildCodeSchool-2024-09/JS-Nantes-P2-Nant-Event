import "./App.css";

import { Outlet } from "react-router-dom";
import BodyHome from "./components/BodyHome";
import Carousel from "./components/Carousel";
import { data } from "./components/Data";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="carousel-container">
        <Carousel imgSrc={data} />
      </div>
      <BodyHome />
      <Footer />
    </>
  );
}

export default App;
