import "../Styles/MapCard.css";

function MapCard() {
  return (
    <div className="event-card">
      <div className="date">
        <div className="date-month">NOV</div>
        <div className="date-day">6</div>
      </div>
      <div className="event-info">
        <div className="event-title">Concert de booba</div>
        <div className="event-time">20 h 00</div>
        <div className="location-name">Zenith</div>
        <div className="location-address">
          1 Bd du Zénith, 44800 Saint-Herblain
        </div>
      </div>
      <div className="event-image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZINU-02tXnRSnrF0TFvU7D8ceF_p4VRxMXQ&s"
          alt="Concert de booba"
          className="event-img"
        />
      </div>
    </div>
  );
}

export default MapCard;
