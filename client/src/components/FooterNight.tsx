import "../styles/FooterNight.css";

function FooterNight() {
  return (
    <>
      <div className="footer-container">
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
              <a href="/">AGENDA</a>
            </li>
            <li>
              <a href="/">ALEATOIRE</a>
            </li>
            <li>
              <a href="/">MAP</a>
            </li>
            <li>
              <a href="/">NAO NIGHT</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy;2024 Designed by{" "}
            <span className="designer">Compo’Nantes</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterNight;
