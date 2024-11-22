import ContainerMapCard from "../components/ContainerMapCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NantesEventsMap from "../components/NantesEventsMap";

function MapPage() {
  return (
    <>
      <Header />
      <div>
        <NantesEventsMap />
        <ContainerMapCard />
      </div>
      <Footer />
    </>
  );
}

export default MapPage;
