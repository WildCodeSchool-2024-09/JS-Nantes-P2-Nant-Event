import { useEffect, useState } from "react";
import "../styles/CardsEvent.css";

interface Event {
  nom: string;
  media_url: string;
  date: string;
  description_evt: string;
  lieu: string;
  url_site: string;
}

export default function CardsEvent() {
  const [event, setEvent] = useState<Event | null>(null);
  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=19",
    )
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.results[1]);
      });
  }, []);

  return (
    <>
      <section className="card-event-section">
        <img src={event?.media_url} alt="booba" />
        <div className="event-details">
          <h3>{event?.nom}</h3>
          <p>
            {event?.lieu} {event?.date}
          </p>
          <p className="hide-text">{event?.description_evt}</p>
        </div>
      </section>
    </>
  );
}
