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
    <div className="page">
      <h1>{event?.nom}</h1>
      <img src={event?.media_url} alt="" />
      <div className="category">{event?.themes_libelles} </div>
      <p>{event?.description_evt} </p>
      <div className="separation" />
      <div className="adresse">
        <p>{event?.lieu}</p>
        <p>{event?.adresse}</p>
        <p>{event?.code_postal}</p>
      </div>
      <div className="separation" />
      <div className="cta">
        <p>Informations supplémentaires : </p>
        <a href={event?.url_site} target="_blank" rel="noreferrer">
          Cliquez ici
        </a>
      </div>
    </div>
  );
}

export default Event;
