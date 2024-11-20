import CardsEventNight from "./CardsEventNight";
import "../styles/BodyNight.css";
import { dataNaonight } from "../components/DataNaoNight";

function BodyNight() {
  return (
    <>
      <section className="body-night">
        <h2 className="title-body-night">Les Events’ aprés minuit ! </h2>
        {dataNaonight.map((eventNight) => {
          return (
            <CardsEventNight key={eventNight.title} eventNight={eventNight} />
          );
        })}
      </section>
    </>
  );
}

export default BodyNight;
