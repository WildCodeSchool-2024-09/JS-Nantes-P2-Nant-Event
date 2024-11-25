import "../styles/Event.css";
import { useLoaderData } from "react-router-dom";

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

interface DataProps {
  results: Event[];
}

function Event() {
  const data = useLoaderData() as DataProps;
  // const [event, setEvent] = useState<Event | null>(null);
  // useEffect(() => {
  //   fetch(
  //     `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=id_manif%3A${id_manif}`,
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEvent(data.results[0]);
  //       console;
  //     });
  // }, []);
  return (
    <main className="page">
      <h1 className="event-title">{data?.results[0].nom}</h1>
      {data.results[0].media_url ? (
        <img
          className="event-image"
          src={data.results[0].media_url}
          alt="Affiche de l'évènement"
        />
      ) : (
        <img className="event-image" src="../../public/koala.jpg" alt="Koala" />
      )}

      <h3 className="category">{data?.results[0].themes_libelles} </h3>
      <p className="event-info">{data?.results[0].description_evt} </p>
      <hr className="separation" />
      <address className="adresse">
        <p className="event-info">{data.results[0].lieu}</p>
        <p className="event-info">{data.results[0].adresse}</p>
        <p className="event-info">{data.results[0].code_postal}</p>
      </address>
      <hr className="separation" />
      <section className="cta">
        <p className="event-info">Informations supplémentaires : </p>
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
