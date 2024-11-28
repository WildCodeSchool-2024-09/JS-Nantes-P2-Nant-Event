import CardsTheme from "./CardsTheme";
import "../styles/BodyHome.css";

export default function BodyHome() {
  const urls = {
    music:
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3A%22Concert%20-%20Musique%22",
    sports:
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3A%22Ev%C3%A8nement%20sportif%22",
    shows:
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3ATh%C3%A9%C3%A2tre%20-%20Humour",
    arts: "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3AProjection",
  };

  return (
    <>
      <section className="section-body-home">
        <CardsTheme
          name="Evénements musicaux"
          apiUrl={urls.music}
          link="/Music"
        />
        <CardsTheme
          name="Evénements sportifs"
          apiUrl={urls.sports}
          link="/Sport"
        />
        <CardsTheme name="Spectacles" apiUrl={urls.shows} link="/Show" />
        <CardsTheme
          name="Evénements artistiques"
          apiUrl={urls.arts}
          link="/Art"
        />
      </section>
    </>
  );
}
