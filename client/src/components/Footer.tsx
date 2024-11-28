import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://x.com/home" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>

        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-youtube" />
        </a>
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <Link className="agenda" to="/Agenda">
              AGENDA
            </Link>
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
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy;2024 Designed by{" "}
          <span className="designer">Compo’Nantes</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
