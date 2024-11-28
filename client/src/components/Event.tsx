import "../styles/Event.css";
import { useLoaderData } from "react-router-dom";
import type { EventI } from "../types/Events";

interface DataProps {
  results: EventI[];
}

function Event() {
  const data = useLoaderData() as DataProps;

  return (
    <main className="page">
      <h1 className="event-global-title">{data?.results[0].nom}</h1>
      {data.results[0].media_url ? (
        <img
          className="event-image"
          src={data.results[0].media_url}
          alt="Affiche de l'évènement"
        />
      ) : (
        <img className="event-image" src="/koala.jpg" alt="Koala" />
      )}

      <h3 className="category">{data?.results[0].themes_libelles} </h3>
      <p className="event-description">{data?.results[0].description_evt} </p>
      <hr className="separation" />
      <address className="adresse">
        <p className="event-description event-other">{data.results[0].lieu}</p>
        <p className="event-description event-other">
          {data.results[0].adresse}
        </p>
        <p className="event-description event-other">
          {data.results[0].code_postal}
        </p>
      </address>
      <hr className="separation" />
      <section className="cta">
        <p className="event-description event-other">
          Informations supplémentaires :{" "}
        </p>
        <a
          className="event-link"
          href={data.results[0].url_site}
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
