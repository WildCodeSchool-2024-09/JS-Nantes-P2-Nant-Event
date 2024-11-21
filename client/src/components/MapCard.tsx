import "../styles/MapCard.css";

interface EventData {
  id_manif: string | number;
  nom?: string;
  heure_debut?: string;
  lieu?: string;
  adresse?: string;
  media_url?: string;
}

interface MapCardProps {
  data: EventData;
}

function MapCard({ data }: MapCardProps) {
  const event = data;
  return (
    <article className="event-card">
      <time className="date" dateTime="2024-11-06">
        <span className="date-month">NOV</span>
        <span className="date-day">6</span>
      </time>
      <section className="event-info">
        <h2 className="event-title">{event?.nom}</h2>
        <div className="event-time">{event?.heure_debut}</div>
        <address className="adress">
          <h3 className="location-name">{data?.lieu}</h3>
          <p className="location-address">{event?.adresse}</p>
        </address>
      </section>
      <figure className="event-image-container">
        {event.media_url ? (
          <img
            className="event-img"
            src={event.media_url}
            alt="Affiche de l'évènement"
          />
        ) : (
          <img src="../../public/koala.jpg" alt="Koala" />
        )}
      </figure>
    </article>
  );
}

export default MapCard;
