import BodyHome from "../components/BodyHome";
import Carousel from "../components/Carousel";
import { data } from "../components/Data";
import ScrollToTopButton from "../components/Scrolltotop";

function Home() {
  return (
    <>
      <div className="carousel-container">
        <Carousel imgSrc={data} />
      </div>
      <BodyHome />
      <ScrollToTopButton />
    </>
  );
}

export default Home;
