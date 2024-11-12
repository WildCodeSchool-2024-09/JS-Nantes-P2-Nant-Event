import CardsTheme from "./CardsTheme";
import "../styles/BodyHome.css";

export default function BodyHome() {
  return (
    <>
      <section className="section-body-home">
        <CardsTheme name="Evènements musicaux" />
        <CardsTheme name="Evènements sportifs" />
        <CardsTheme name="Spectacles" />
        <CardsTheme name="Evènements artistiques" />
      </section>
    </>
  );
}
