import CardsEvent from "./CardsEvent";
import "../styles/CardsTheme.css";

interface CardsThemeI {
	name: string;
}

export default function CardsTheme({ name }: CardsThemeI) {
	return (
		<>
			<section className="cards-theme">
				<div className="title-card-event">
					<h2 className="title-theme">{name}</h2>
					<p className="voir-plus">voir plus</p>
				</div>
				<div className="event-align">
					<CardsEvent />
					<CardsEvent />
					<CardsEvent />
				</div>
			</section>
		</>
	);
}
