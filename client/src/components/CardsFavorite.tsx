import "../styles/CardFavorite.css";

interface arrayEventNightI {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  place: string;
  price: string;
  style: string;
}

function CardsFavorite({ eventFavorite }: { eventFavorite: arrayEventNightI }) {
  return (
    <>
      <section className="cards-event-fav">
        <figure className="figure-image">
          <img
            className="img-card-night"
            src={eventFavorite.imgSrc}
            alt="evenement"
          />
        </figure>
        <div className="info-card-night">
          <section className="button-orange">{eventFavorite.style}</section>
          <p className="title-card-night">{eventFavorite.title}</p>
          <p>{eventFavorite.description}</p>
          <p className="italic-card-night">{eventFavorite.date}</p>
          <p className="bold-card-fav">{eventFavorite.place}</p>
          <p className="price-card-night">{eventFavorite.price}</p>
        </div>
      </section>
    </>
  );
}

export default CardsFavorite;
