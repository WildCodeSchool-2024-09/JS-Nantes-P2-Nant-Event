import { useEffect, useState } from "react";
import CardsFavorite from "./CardsFavorite";
import { dataFavorite } from "./DataFavorite";

import "../styles/FavoritePage.css";

function FavoritePage() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("username");
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        setData(savedData);
      }
    }
  }, []);

  return (
    <>
      <section className="favorite-title">
        <h1 className="hello-fav">Bonjour</h1>
        <h2 className="username-fav">{data}</h2>
      </section>
      <h3 className="event-fav"> Vos événement favoris :</h3>
      <section className="body-fav">
        {dataFavorite.map((eventFavorite) => {
          return (
            <CardsFavorite
              key={eventFavorite.title}
              eventFavorite={eventFavorite}
            />
          );
        })}
      </section>
    </>
  );
}

export default FavoritePage;
