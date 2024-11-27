import { Link } from "react-router-dom";
import "../styles/CardsEvent.css";
import type { EventI } from "../types/Events";

interface CardsEventProps {
  index: number;
  data: EventI[];
}

export default function CardsEvent({ index, data }: CardsEventProps) {
  const event = data[index];
  return (
    <>
      <section className="card-event-section">
        <Link to={`/event/${event.id_manif}`}>
          {event.media_url ? (
            <img src={event.media_url} alt="Affiche de l'évènement" />
          ) : (
            <img src="/koala.jpg" alt="Koala" />
          )}
        </Link>
        <img src={event?.media_url} alt="Affiche Evenement" />
        <article className="event-details">
          <h3>{event?.nom}</h3>
          <p>
            {event?.lieu} {event.date}
          </p>
          <details className="card-event-detail">
            <summary>Plus d'informations</summary>
            {event?.description_evt}
          </details>
        </article>
      </section>
    </>
  );
}
