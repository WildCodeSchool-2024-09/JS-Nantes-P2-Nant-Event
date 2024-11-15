import ContainerMapCard from "../components/ContainerMapCard";
import NantesEventsMap from "../components/NantesEventsMap";

function MapPage() {
  return (
    <div className="App">
      <NantesEventsMap />
      <ContainerMapCard />
    </div>
  );
}

export default MapPage;
