import "../styles/CardEventNight.css";

function CardsEventNight() {
  return (
    <>
      <section className="cards-event-night">
        <figure className="figure-image">
          <img
            className="img-card-night"
            src="../public/boobatest.jpg"
            alt="evenement"
          />
        </figure>
        <div className="info-card-night">
          <section className="button-rose"> Rap Français</section>
          <p className="title-card-night">Bobba</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dapibus odio vel velit laoreet commodo. In bibendum ante sed cursus
            luctus.
          </p>
          <p className="italic-card-night">Mercredi 24 novembre</p>
          <p className="bold-card-night">Zenith de Nantes - 18h</p>
          <p className="price-card-night">à partir de 29€</p>
        </div>
      </section>
    </>
  );
}

export default CardsEventNight;
