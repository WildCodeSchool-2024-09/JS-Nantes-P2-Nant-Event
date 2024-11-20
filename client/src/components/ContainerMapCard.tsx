import MapCard from "./MapCard";
import "../styles/ContainerMapCard.css";

function ContainerMapCard() {
  return (
    <div className="card-container">
      <MapCard />
      <MapCard />
      <MapCard />
      <MapCard />
      <MapCard />
      <MapCard />
    </div>
  );
}

export default ContainerMapCard;
