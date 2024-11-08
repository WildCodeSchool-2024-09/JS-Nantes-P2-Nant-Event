import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="img-container">
            <img
              className="logo"
              src="public/logo_nantesEvent.png"
              alt="logo "
            />
          </div>

          <ul>
            <li>
              <a href="/">AGENDA</a>
            </li>
            <li>
              <a href="/">THEMES</a>
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
          </ul>

          <button className="profil" type="button" />
        </nav>
      </div>
    </div>
  );
}

export default Header;
