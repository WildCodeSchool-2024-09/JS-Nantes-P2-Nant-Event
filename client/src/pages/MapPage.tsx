import ContainerMapCard from "../components/ContainerMapCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NantesEventsMap from "../components/NantesEventsMap";

function MapPage() {
  return (
    <div className="App">
      <Header />
      <NantesEventsMap />
      <ContainerMapCard />
      <Footer />
    </div>
  );
}

export default MapPage;
