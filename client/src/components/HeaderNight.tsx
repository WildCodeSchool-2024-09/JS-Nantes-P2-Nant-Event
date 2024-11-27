import "../styles/HeaderNight.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownNight from "./DropDownNight";

const HeaderNight = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  const MenuItems = () => (
    <>
      <Link className="link-style" to="/Agenda">
        AGENDA
      </Link>
      <Link className="link-style" to={""}>
        <DropDownNight options={["Item 1", "Item 2", "Item 3"]} />
      </Link>
      <Link className="link-style" to="/Aleatoire">
        ALEATOIRE
      </Link>
      <Link className="link-style" to="/MapPage">
        MAP
      </Link>
      <Link className="link-style" to={""}>
        NAONIGHT
      </Link>
      <Link className="link-style" to={""}>
        ❤
      </Link>
    </>
  );

  return (
    <nav>
      <div className="container">
        <div className="img-container">
          <Link to="/Home">
            <img
              className="logo"
              src="/logo_nao_night.png"
              alt="Nantes Event Logo"
            />
          </Link>
        </div>

        {isExpanded && (
          <ul className={`sidebar ${isExpanded ? "expanded" : ""}`}>
            <li>
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={toggle}
                className="btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 -960 960 960"
                  fill="#e8eaed"
                  role="img"
                >
                  <title>Menu</title>
                  <desc>Icône de menu hamburger à trois lignes</desc>
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </li>
            <MenuItems />
          </ul>
        )}

        <ul className="main-nav">
          <li className="menu-button">
            <button
              type="button"
              onClick={toggle}
              className="btn"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45"
                viewBox="0 -960 960 960"
                width="45"
                fill="#e8eaed"
                aria-label="Menu"
                role="img"
                aria-labelledby="menuIconTitle"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </li>
          <div className="desktop-menu">
            <MenuItems />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNight;
