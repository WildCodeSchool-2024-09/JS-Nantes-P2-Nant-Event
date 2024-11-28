import { Link } from "react-router-dom";
import "../styles/MapCard.css";
import type { EventI } from "../types/Events";

interface MapCardProps {
  data: EventI;
  onSelect: (event: EventI) => void;
}

function MapCard({ data, onSelect }: MapCardProps) {
  const event = data;
  const dateString = event?.date || "";
  const [_, month, day] = dateString.split("-");

  const getMonthName = (monthNumber: string) => {
    const months = [
      "JAN",
      "FEV",
      "MAR",
      "AVR",
      "MAI",
      "JUN",
      "JUL",
      "AOU",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return months[Number.parseInt(monthNumber) - 1] || "";
  };

  return (
    <article className="event-card">
      <time className="date" dateTime={event?.date}>
        <span className="date-month">{getMonthName(month)}</span>
        <span className="date-day">{Number.parseInt(day) || "6"}</span>
      </time>
      <section className="event-info">
        <h2 className="event-title">{event?.nom}</h2>
        <div className="event-time">{event?.heure_debut}</div>

        <button
          type="button"
          onClick={() => onSelect(event)}
          className="btn-container"
        >
          <address className="adress">
            <h3 className="location-name">{data?.lieu}</h3>
            <p className="location-address">{event?.adresse}</p>
          </address>
        </button>
      </section>
      <figure className="event-image-container">
        <Link to={`/event/${event.id_manif}`}>
          {event.media_url ? (
            <img
              className="event-img"
              src={event.media_url}
              alt="Affiche de l'évènement"
            />
          ) : (
            <img className="event-img" src="/koala.jpg" alt="Koala" />
          )}
        </Link>
      </figure>
    </article>
  );
}

export default MapCard;
