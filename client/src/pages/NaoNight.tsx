// import HeaderNight from "../components/HeaderNight";
import { Outlet } from "react-router-dom";
import BodyNight from "../components/BodyNight";
import HeaderNight from "../components/HeaderNight";

import "../styles/NaoNight.css";
import Footer from "../components/Footer";

function NaoNight() {
  return (
    <>
      <section className="body-naonight">
        <HeaderNight />
        <BodyNight />
        <Footer />
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default NaoNight;
