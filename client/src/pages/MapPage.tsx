import { useState } from "react";
import ContainerMapCard from "../components/ContainerMapCard";
import NantesEventsMap from "../components/NantesEventsMap";
import ScrollToTopButton from "../components/Scrolltotop";
import type { EventI } from "../types/Events";

function MapPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventI | null>(null);

  return (
    <>
      <NantesEventsMap selectedEvent={selectedEvent} />
      <ContainerMapCard onEventSelect={setSelectedEvent} />
      <ScrollToTopButton />
    </>
  );
}

export default MapPage;
