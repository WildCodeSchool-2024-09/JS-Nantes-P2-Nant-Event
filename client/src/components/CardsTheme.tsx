import CardsEvent from "./CardsEvent";
import "../styles/CardsTheme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CardsThemeI {
  name: string;
  apiUrl: string;
  link: string;
}
interface Event {
  nom: string;
  media_url: string;
  date: string;
  description_evt: string;
  lieu: string;
  url_site: string;
}

export default function CardsTheme({ name, apiUrl, link }: CardsThemeI) {
  const [event, setEvent] = useState<Event[]>([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.results);
      });
  }, [apiUrl]);

  if (event.length < 3) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <section className="cards-theme">
        <main className="title-card-event">
          <h2 className="title-theme">{name}</h2>
          <p className="voir-plus">
            <Link to={link}> Voir plus</Link>
          </p>
        </main>
        <article className="event-align">
          <CardsEvent index={0} data={event} />
          <CardsEvent index={1} data={event} />
          <CardsEvent index={2} data={event} />
        </article>
        <p className="voir-plus-hided">voir plus</p>
      </section>
    </>
  );
}
