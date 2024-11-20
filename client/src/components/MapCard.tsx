import "../styles/MapCard.css";

function MapCard() {
  return (
    <article className="event-card">
      <time className="date">
        <div className="date-month">NOV</div>
        <div className="date-day">6</div>
      </time>
      <section className="event-info">
        <h2 className="event-title">Concert de booba</h2>
        <div className="event-time">20 h 00</div>
        <address>
          <h3 className="location-name">Zenith</h3>
          <p className="location-address">
            1 Bd du Zénith, 44800 Saint-Herblain
          </p>
        </address>
      </section>
      <figure className="event-image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZINU-02tXnRSnrF0TFvU7D8ceF_p4VRxMXQ&s"
          alt="Concert de booba"
          className="event-img"
        />
      </figure>
    </article>
  );
}

export default MapCard;
