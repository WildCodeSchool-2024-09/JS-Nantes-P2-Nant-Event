import "./App.css";
import Carousel from "./components/Carousel";
import { data } from "./components/Data";
import MapCard from "./components/MapCard";
import NantesEventsMap from "./components/NantesEventsMap";

function App() {
  return (
    <div className="App">
      <Carousel imgSrc={data} />
      <MapCard />
      <NantesEventsMap />
    </div>
  );
}

export default App;
