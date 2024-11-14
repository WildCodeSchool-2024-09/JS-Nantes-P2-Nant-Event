import "./App.css";
import BodyHome from "./components/BodyHome";
import Carousel from "./components/Carousel";
import { data } from "./components/Data";

function App() {
  return (
    <>
      <div className="carousel-container">
        <Carousel imgSrc={data} />
      </div>
      <BodyHome />
    </>
  );
}

// function App() {
//   return (
//     <div className="carousel-container">
//       <Carousel imgSrc={data} />
//     </div>
//   );
// }

export default App;
