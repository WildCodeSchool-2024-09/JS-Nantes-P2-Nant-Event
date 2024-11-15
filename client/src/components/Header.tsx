import "../style/header.css";
import { useState } from "react";
import DropDown from "./Dropdown";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  const MenuItems = () => (
    <>
      <li>
        <a href="/">AGENDA</a>
      </li>
      <li>
        <DropDown options={["Item 1", "Item 2", "Item 3"]} />
      </li>
      <li>
        <a href="/">ALEATOIRE</a>
      </li>
      <li>
        <a href="/">MAP</a>
      </li>
      <li>
        <a href="/">NAONIGHT</a>
      </li>
      <li>
        <a className="heart" href="/">
          ❤
        </a>
      </li>
    </>
  );

  return (
    <div className="header">
      <nav>
        <div className="container">
          <div className="img-container">
            <img
              className="logo"
              src="/logo_nantesEvent.png"
              alt="Nantes Event Logo"
            />
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
    </div>
  );
};

export default Header;
