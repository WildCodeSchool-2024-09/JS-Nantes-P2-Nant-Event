import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./Dropdown";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  const MenuItems = () => (
    <>
      <li>
        <Link className="agenda" to="/Agenda">
          AGENDA
        </Link>
      </li>
      <li className="dropdown">
        <DropDown />
      </li>
      <li>
        <Link to="/Aleatoire"> ALEATOIRE </Link>
      </li>
      <li>
        <Link to="/MapPage">MAP</Link>
      </li>
      <li>
        <Link to="/NaoNight"> NAONIGHT </Link>
      </li>
      <li>
        <Link className="heart" to={""}>
          ❤
        </Link>
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
                />
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
