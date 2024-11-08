import CardsEvent from "./CardsEvent";
import "../styles/CardsTheme.css";

interface CardsThemeI {
  name: string;
}

export default function CardsTheme({ name }: CardsThemeI) {
  return (
    <>
      <section className="CardsTheme">
        <div className="TitleCardEvent">
          <h2 className="titleTheme">{name}</h2>
          <p className="voirPlus">voir plus</p>
        </div>
        <div className="EventAlign">
          <CardsEvent />
          <CardsEvent />
          <CardsEvent />
        </div>
      </section>
    </>
  );
}
