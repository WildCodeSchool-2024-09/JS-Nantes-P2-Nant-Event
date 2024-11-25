import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";
import { Link } from "react-router-dom";
import type { EventI } from "../types/Events";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar() {
  // Date handler
  const [value, setValue] = useState<Value>(new Date());
  const formattedDate =
    value instanceof Date ? value.toLocaleDateString("fr-CA") : "";

  // API handler
  const [data, setData] = useState<EventI[] | null>(null);

  const filteredArray =
    data !== null ? data.filter((el) => el.date === formattedDate) : data;

  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=100",
    )
      .then((res) => res.json())
      .then((events) => setData(events.results));
  }, []);

  return (
    <div className="agenda-page">
      <h1 className="title-agenda">Agenda</h1>
      <hr className="divider-agenda" />
      <Calendar onChange={setValue} value={value} />
      <div className="event-calendar">
        {data !== null &&
          filteredArray?.map((el) => {
            return (
              <div key={el.id} className="agenda-container">
                <div className="event-img">
                  <Link to={`/event/${el.id_manif}`}>
                    {el.media_url ? (
                      <img
                        src={el.media_url}
                        alt="Affiche de l'évènement"
                        className="img-event-date"
                      />
                    ) : (
                      <img
                        src="../../public/koala.jpg"
                        alt="Koala"
                        className="img-event-date"
                      />
                    )}
                  </Link>
                </div>
                <div className="event-text">
                  <h2 className="agenda-event-title">{el.nom}</h2>
                  <details>
                    <summary className="summary-agenda">
                      Plus d'informations
                    </summary>
                    {el.description_evt}
                  </details>
                  <p>{el.lieu}</p>
                  <p>{el.adresse}</p>
                  <p>{el.date}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MyCalendar;
