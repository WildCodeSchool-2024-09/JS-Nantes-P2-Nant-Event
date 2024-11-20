import "../styles/HeaderNight.css";
import { Link } from "react-router-dom";

function HeaderNight() {
  return (
    <>
      <section className="header-naonight">
        <img
          className="logo-naonight"
          src="../public/logo_nao_night.png"
          alt="logo NaoNight"
        />
        <ul className="list-header-naonight">
          <Link className="link-style" to={""}>
            AGENDA
          </Link>

          <Link to={""} className="link-style">
            THEMES
          </Link>

          <Link to={""} className="link-style">
            ALEATOIRE
          </Link>

          <Link to={""} className="link-style">
            MAP
          </Link>

          <Link to={""} className="link-style">
            NAONIGHT
          </Link>

          <Link to={""} className="link-style">
            ❤
          </Link>
        </ul>
      </section>
    </>
  );
}

export default HeaderNight;
