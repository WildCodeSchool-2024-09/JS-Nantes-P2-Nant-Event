import BodyHome from "../components/BodyHome";
import Carousel from "../components/Carousel";
import { data } from "../components/Data";

function Home() {
  return (
    <>
      <div className="carousel-container">
        <Carousel imgSrc={data} />
      </div>
      <BodyHome />
    </>
  );
}

export default Home;
