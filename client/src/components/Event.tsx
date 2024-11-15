import { useEffect, useState } from "react";
import "../styles/Event.css";

interface Event {
  id_manif: number;
  nom: string;
  media_url: string;
  emetteur: string;
  date: string;
  lien_agenda: string;
  themes_libelles: string;
  description_evt: string;
  lieu: string;
  adresse: string;
  code_postal: number;
  url_site: string;
}

function Event() {
  const [event, setEvent] = useState<Event | null>(null);
  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=19",
    )
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.results[6]);
      });
  }, []);

  return (
    <main className="page">
      <h1 className="event-title">{event?.nom}</h1>
      <img src={event?.media_url} alt="" />
      <h3 className="category">{event?.themes_libelles} </h3>
      <p className="event-info">{event?.description_evt} </p>
      <hr className="separation" />
      <address className="adresse">
        <p className="event-info">{event?.lieu}</p>
        <p className="event-info">{event?.adresse}</p>
        <p className="event-info">{event?.code_postal}</p>
      </address>
      <hr className="separation" />
      <section className="cta">
        <p className="event-info">Informations supplémentaires : </p>
        <a
          className="event-link"
          href={event?.url_site}
          target="_blank"
          rel="noreferrer"
        >
          Cliquez ici
        </a>
      </section>
    </main>
  );
}

export default Event;
