import CardsEvent from "./CardsEvent";
import "../styles/CardsTheme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { EventI } from "../types/Events";

interface CardsThemeI {
  name: string;
  apiUrl: string;
  link: string;
}

export default function CardsTheme({ name, apiUrl, link }: CardsThemeI) {
  const [event, setEvent] = useState<EventI[]>([]);
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
