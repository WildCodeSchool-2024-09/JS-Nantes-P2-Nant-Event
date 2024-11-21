import { useEffect, useState } from "react";
import "../styles/Random.css";
import Footer from "./Footer";
import Header from "./Header";

interface Event {
  id_manif: number;
  nom: string;
  media_url: string;
  emetteur: string;
  date: string;
  lien_agenda: string;
}

function Random() {
  const [events, setEvents] = useState<[] | Event[]>([]);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=ville%3A%22Saint-Herblain%22",
    )
      .then((response) => response.json())
      .then((data) => {
        const results: Event[] = data.results;

        const singleIds: Record<number, number> = {};

        const final = results.filter((event) => {
          if (!singleIds[event.id_manif]) singleIds[event.id_manif] = 0;

          singleIds[event.id_manif] += 1;

          if (singleIds[event.id_manif] <= 1) {
            return event;
          }
        });
        setEvents(final);
        setRandomIndex(Math.floor(Math.random() * final.length));
      });
  }, []);

  const handleRefresh = () => {
    if (events.length > 0) {
      setRandomIndex(Math.floor(Math.random() * events.length));
    }
  };

  if (randomIndex === null || !events[randomIndex]) {
    return <div>Loading...</div>;
  }

  const currentEvent = events[randomIndex];

  return (
    <>
      <Header />
      <div className="random">
        <h1 className="title">Pas d'idée de sortie ? </h1>
        {currentEvent.media_url ? (
          <img
            src={currentEvent.media_url}
            alt="Affiche évènement"
            className="poster"
          />
        ) : (
          <img src="/koala.jpg" alt="no response" className="poster" />
        )}
        <h2 className="event_title">{currentEvent.nom}</h2>
        <p className="event_info">{currentEvent.emetteur}</p>
        <p className="event_info">{currentEvent.date}</p>
        <button type="button" onClick={handleRefresh} className="cta">
          Relancer
        </button>
        <a
          href={currentEvent.lien_agenda}
          target="_blank"
          rel="noopener noreferrer"
          className="event_url"
        >
          Plus d'infos
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Random;
