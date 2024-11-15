import "../styles/CardsEvent.css";

export default function CardsEvent() {
  return (
    <>
      <section className="card-event-section">
        <img src="public\boobatest.jpg" alt="booba" />
        <div className="event-details">
          <h3>booba</h3>
          <p>Zenith de Nantes - 06.12.24</p>
          <p className="hide-text">
            du 18 au 25 novembre 2024, spectacles, jeux, ateliers... sont
            proposés gratuitement aux parents et aux enfants à la Maison des
            Confluences, dans le cadre de la semaine de parentalité. Pendant les
            ateliers, les enfants sont sous la surveillance des parents
            Consultez le programme complet
          </p>
        </div>
      </section>
    </>
  );
}
