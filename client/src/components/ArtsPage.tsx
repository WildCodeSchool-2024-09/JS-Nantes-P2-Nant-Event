import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CardMusic from "./CardMusic";

interface EventData {
  id_manif: string;
  date: string;
  types_libelles: string;
  description_evt: string;
}

interface EventApi {
  results: EventData[];
}

function ArtsPage() {
  const [event, setEvent] = useState<EventData[]>([]);
  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3AProjection",
    )
      .then((response) => response.json())
      .then((data: EventApi) => {
        setEvent(data.results);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="theme-body">
        <h1 className="theme-title"> Evènement Artistiques </h1>

        {event?.map((el) => {
          return <CardMusic key={el.id_manif} data={el} />;
        })}
      </section>
      <Footer />
    </>
  );
}
export default ArtsPage;
