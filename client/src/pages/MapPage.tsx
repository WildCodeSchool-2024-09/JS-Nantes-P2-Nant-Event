import ContainerMapCard from "../components/ContainerMapCard";
import NantesEventsMap from "../components/NantesEventsMap";
import ScrollToTopButton from "../components/Scrolltotop";

function MapPage() {
  return (
    <>
      <NantesEventsMap />
      <ContainerMapCard />
      <ScrollToTopButton />
    </>
  );
}

export default MapPage;
