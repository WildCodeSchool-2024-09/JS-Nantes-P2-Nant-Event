import "./App.css";

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
      <Footer />
    </>
  );
}

export default App;
