import { useEffect, useState } from "react";
import MapCard from "./MapCard";
import "../styles/ContainerMapCard.css";
import type { EventI } from "../types/Events";

interface ContainerMapCardProps {
  onEventSelect: (event: EventI) => void;
}

interface APIResponse {
  results: EventI[];
}

function ContainerMapCard({ onEventSelect }: ContainerMapCardProps) {
  const [events, setEvents] = useState<EventI[]>([]);

  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3A%22Concert%20-%20Musique%22",
    )
      .then((response) => response.json())
      .then((data: APIResponse) => {
        setEvents(data.results);
      });
  }, []);

  return (
    <div className="card-container">
      {events?.map((el) => (
        <MapCard key={el.id_manif} data={el} onSelect={onEventSelect} />
      ))}
    </div>
  );
}

export default ContainerMapCard;
