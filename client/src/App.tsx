import "./App.css";
import ArtsPage from "./components/ArtsPage";
import BodyHome from "./components/BodyHome";
import Carousel from "./components/Carousel";
import { data } from "./components/Data";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="carousel-container">
        <Carousel imgSrc={data} />
      </div>
      <BodyHome />
      <Footer />
    </>
  );
}

export default App;
