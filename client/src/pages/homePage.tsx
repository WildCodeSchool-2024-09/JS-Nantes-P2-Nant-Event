import "../styles/homePage.css";
import { Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="accueilLogo">
        <button type="button" className="buttonLogo">
          <Link to={"Home"}>
            <img
              className="logoNE"
              src="public\logo_NE.png"
              alt="Logo Nant'event"
            />
          </Link>
        </button>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default HomePage;
