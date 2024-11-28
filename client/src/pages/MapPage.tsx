import ContainerMapCard from "../components/ContainerMapCard";
import NantesEventsMap from "../components/NantesEventsMap";
import ScrollToTopButton from "../components/Scrolltotop";

function MapPage() {
  return (
    <>
      <div>
        <NantesEventsMap />
        <ContainerMapCard />
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default MapPage;
