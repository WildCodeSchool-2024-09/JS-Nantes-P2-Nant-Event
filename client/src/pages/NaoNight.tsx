// import HeaderNight from "../components/HeaderNight";
import { Outlet } from "react-router-dom";
import BodyNight from "../components/BodyNight";
import HeaderNight from "../components/HeaderNight";

function NaoNight() {
  return (
    <>
      <HeaderNight />
      <BodyNight />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NaoNight;
