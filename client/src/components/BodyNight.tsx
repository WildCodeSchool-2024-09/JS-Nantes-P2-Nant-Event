import CardsEventNight from "./CardsEventNight";
import "../styles/BodyNight.css";

// const eventNaoNight = [
//   {
//     imgSrc: "/public/naonight-images/boomin_naonight.jpg",
//     name: "Boomin Nantes",
//     style: "Electro - DJ set",
//     describe: "blablba",
//     place: "Zenith de Nantes",
//     date: "23 novembre - à partir de 19h"
//     price: "49 à 59€",
//   },
//   {
//     name: "Blink 182",
//     style: "Punk",
//     describe: "blablba",
//     place: "Zenith de Nantes - 18h",
//     price: "24€",
//   },
//   {
//     name: "Blink 182",
//     style: "Punk",
//     describe: "blablba",
//     place: "Zenith de Nantes - 18h",
//     price: "24€",
//   },
//   {
//     name: "Blink 182",
//     style: "Punk",
//     describe: "blablba",
//     place: "Zenith de Nantes - 18h",
//     price: "24€",
//   },
//   {
//     name: "Blink 182",
//     style: "Punk",
//     describe: "blablba",
//     place: "Zenith de Nantes - 18h",
//     price: "24€",
//   },
// ];

function BodyNight() {
  return (
    <>
      <section className="body-night">
        <h2 className="title-body-night">Les Events’ aprés minuit ! </h2>
        <CardsEventNight />
        <CardsEventNight />
        <CardsEventNight />
        <CardsEventNight />
        <CardsEventNight />
      </section>
    </>
  );
}

export default BodyNight;
