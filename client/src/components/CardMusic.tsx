import "../styles/ThemePage.css";

interface EventData {
  media_url?: string;
  types_libelles: string;
  nom?: string;
  description_evt: string;
  date: string;
  lieu?: string;
}

interface CardEventProps {
  data: EventData;
}

function CardMusic({ data }: CardEventProps) {
  const event = data;
  return (
    <>
      <section className="theme-container">
        <figure className="theme-image">
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
