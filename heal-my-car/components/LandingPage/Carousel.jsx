// Lista LOGOs do carousel:
// https://interparts.pl/userfiles/logasy/jasol_white.png
// https://interparts.pl/userfiles/logasy/castrol.png
// https://interparts.pl/userfiles/logasy/filtron.png
// https://interparts.pl/userfiles/logasy/Mobil.png
// https://interparts.pl/userfiles/logasy/NRF.png
// https://interparts.pl/userfiles/logasy/logo%20MOTUL%20small.png
// https://interparts.pl/userfiles/logasy/Logo_Monroe_white.png
// https://interparts.pl/userfiles/logasy/Valeo_white.png
// https://interparts.pl/userfiles/logasy/SACHS%20LOGO%20-%20white.png
// https://interparts.pl/userfiles/logasy/CONTINENTAL.png
// https://interparts.pl/userfiles/logasy/dayco-l.png
// https://interparts.pl/userfiles/logasy/Lemforder.png
// https://interparts.pl/userfiles/procaro_white2.png
// https://interparts.pl/userfiles/voltaro_white2.png
// https://interparts.pl/userfiles/logasy/Gates_white.png
// https://interparts.pl/userfiles/logasy/DENSO%20white.png

import { Container } from "@mui/system";
import { useRef } from "react";
import { Rerousel } from "rerousel";
import Castrol from "./img/castrol.png";

// const customers = [
//   {
//     name: "Castrol",
//     logo: "./img/castrol.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Filtron",
//     logo: "./img/filtron.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Gates",
//     logo: "./img/gates.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Motul",
//     logo: ".img/mobil.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Monroe",
//     logo: "./img/monroe.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Mobil",
//     logo: "./img/mobil.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Nissens",
//     logo: "./img/nissen.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "NRF",
//     logo: "./img/nrf.png",
//     link: "https://www.jasol.pl/",
//   },
//   {
//     name: "Valeo",
//     logo: "./img/valeo.png",
//     link: "https://www.jasol.pl/",
//   },
// ];

export default function Carousel() {
  const carouselRef = useRef(null);
  return (
    <Container>
      <Rerousel
        ref={carouselRef}
        items={customers}
        interval={1000}
        autoplay={true}
        pauseOnHover={false}
        pauseOnFocus={false}
        pauseOnClick={false}
        pauseOnKeyDown={true}
        pauseOnResize={true}
        pauseOnVisibilityChange={false}
        wrap={true}
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      />
      <img src={"./img/castrol.png"} alt="Castrol" />
      
    </Container>
  );
}
export default Carousel;
