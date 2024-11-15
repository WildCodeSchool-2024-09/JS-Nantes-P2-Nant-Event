import "../styles/CardEventNight.css";
// import { dataNaonight } from "./DataNaoNight";

interface arrayEventNightI {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  place: string;
  price: string;
  style: string;
}

function CardsEventNight({ eventNight }: { eventNight: arrayEventNightI }) {
  return (
    <>
      <section className="cards-event-night">
        <figure className="figure-image">
          <img
            className="img-card-night"
            src={eventNight.imgSrc}
            alt="evenement"
          />
        </figure>
        <div className="info-card-night">
          <section className="button-rose">{eventNight.style}</section>
          <p className="title-card-night">{eventNight.title}</p>
          <p>{eventNight.description}</p>
          <p className="italic-card-night">{eventNight.date}</p>
          <p className="bold-card-night">{eventNight.place}</p>
          <p className="price-card-night">{eventNight.price}</p>
        </div>
      </section>
    </>
  );
}

export default CardsEventNight;
