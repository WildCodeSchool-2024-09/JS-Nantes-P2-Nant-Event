import { useEffect, useState } from "react";
import type { EventI } from "../types/Events";
import type { EventApi } from "../types/Events";
import CardMusic from "./CardMusic";

function SportPage() {
  const [event, setEvent] = useState<EventI[]>([]);
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
            <CardMusic
              key={event.id_agenda_in}
              data={event}
              id={event.id_manif}
            />
          );
        })}
      </section>
    </>
  );
}
export default SportPage;
