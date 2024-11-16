import "../styles/CardsEvent.css";

interface CardsEventProps {
  index: number;
  data: Event[];
}

interface Event {
  nom: string;
  media_url: string;
  date: string;
  description_evt: string;
  lieu: string;
}

export default function CardsEvent({ index, data }: CardsEventProps) {
  const event = data[index];
  return (
    <>
      <section className="card-event-section">
        <img src={event?.media_url} alt="Affiche Evenement" />
        <article className="event-details">
          <h3>{event?.nom}</h3>
          <p>
            {event?.lieu} {event?.date}
          </p>
          <details>
            <summary className="hide-text">Plus d'informations</summary>
            {event?.description_evt}
          </details>
        </article>
      </section>
    </>
  );
}
