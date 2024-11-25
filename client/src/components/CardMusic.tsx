import { Link } from "react-router-dom";
import "../styles/ThemePage.css";

interface EventData {
  media_url?: string;
  types_libelles: string;
  nom?: string;
  description_evt: string;
  date: string;
  lieu?: string;
  id_manif: number;
}

interface CardEventProps {
  data: EventData;
  id: number;
  id_manif?: number;
}

function CardMusic({ data, id }: CardEventProps) {
  const event = data;
  return (
    <>
      <section className="theme-container">
        <figure className="theme-image">
          <Link to={`/event/${id}`}>
            {event.media_url ? (
              <img
                className="theme-affiche"
                src={event.media_url}
                alt="Affiche de l'évènement"
              />
            ) : (
              <img
                className="theme-affiche"
                src="../../public/koala.jpg"
                alt="Koala"
              />
            )}
          </Link>
        </figure>
        <div className="info-theme">
          <p className="theme-type">{event.types_libelles}</p>
          <p className="title-event">{event?.nom}</p>
          <details className="theme-info">
            <summary>Plus d'informations</summary>
            {event?.description_evt}
          </details>
          <p className="theme-date">{event.date}</p>
          <p className="theme-lieu">{event.lieu}</p>
        </div>
      </section>
    </>
  );
}
export default CardMusic;
