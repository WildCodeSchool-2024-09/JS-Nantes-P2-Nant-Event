import "../styles/NantesEventsMap.css";
import type { EventI } from "../types/Events";

interface NantesEventsMapProps {
  selectedEvent: EventI | null;
}

const NantesEventsMap = ({ selectedEvent }: NantesEventsMapProps) => {
  const defaultLat = 47.218371;
  const defaultLng = -1.553621;

  const latitude = selectedEvent?.latitude || defaultLat;
  const longitude = selectedEvent?.longitude || defaultLng;

  return (
    <div className="map-container">
      <h1 className="map-title">
        <button className="btn-map" type="button">
          Aujourd'hui
        </button>
        Semaine du 4 au 10 Novembre{" "}
      </h1>
      <div className="map-wrapper">
        <iframe
          title="Carte des événements à Nantes"
          src={`https://data.opendatasoft.com/explore/embed/dataset/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/map/?disjunctive.lieu_quartier&disjunctive.emetteur&disjunctive.ville&refine.ville=Nantes&refine.lieu_quartier=Centre%20Ville&static=false&datasetcard=false&scrollWheelZoom=false&location=18,${latitude},${longitude}&basemap=jawg.streets`}
          className="map-frame"
          allow="geolocation"
        />
      </div>
    </div>
  );
};

export default NantesEventsMap;
