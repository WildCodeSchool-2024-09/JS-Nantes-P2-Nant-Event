import "./App.css";
import Carousel from "./components/Carousel";
import { data } from "./components/Data";

function App() {
  return (
    <div className="App">
      <Carousel imgSrc={data} />
    </div>
  );
}

export default App;
