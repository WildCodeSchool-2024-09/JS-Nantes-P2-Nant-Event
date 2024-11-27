import { useState } from "react";
import "../styles/HomePage.css";
import { Link, Outlet } from "react-router-dom";

function HomePage() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="accueil-logo">
        <button type="button" className="button-logo">
          <Link to={"Home"}>
            <img
              className="logo-ne"
              src="public\logo_NE.png"
              alt="Logo Nant'event"
            />
          </Link>
        </button>
      </div>
      <main>
        <Outlet context={{ counter, setCounter }} />
      </main>
    </>
  );
}

export default HomePage;
