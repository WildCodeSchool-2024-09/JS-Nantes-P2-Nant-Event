import { useEffect, useState } from "react";
import CardMusic from "./CardMusic";

interface EventData {
  id_manif: number;
  date: string;
  types_libelles: string;
  description_evt: string;
}

interface EventApi {
  results: EventData[];
  id: number;
  id_manif?: number;
}

function SportPage() {
  const [event, setEvent] = useState<EventData[]>([]);
  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3A%22Ev%C3%A8nement%20sportif%22",
    )
      .then((response) => response.json())
      .then((data: EventApi) => {
        setEvent(data.results);
      });
  }, []);

  return (
    <>
      <section className="theme-body">
        <h1 className="theme-title"> Evènement Sportifs </h1>

        {event?.map((event) => {
          return (
            <CardMusic key={event.id_manif} data={event} id={event.id_manif} />
          );
        })}
      </section>
    </>
  );
}
export default SportPage;
