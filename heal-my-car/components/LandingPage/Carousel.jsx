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

const customers = [
  <img
    src="https://interparts.pl/userfiles/logasy/jasol_white.png"
    alt="Jasol"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/castrol.png"
    alt="Castrol"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/filtron.png"
    alt="Filtron"
  />,
  <img src="https://interparts.pl/userfiles/logasy/Mobil.png" alt="Mobil" />,
  <img src="https://interparts.pl/userfiles/logasy/NRF.png" alt="NRF" />,
  <img
    src="https://interparts.pl/userfiles/logasy/logo%20MOTUL%20small.png"
    alt="Motul"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/Logo_Monroe_white.png"
    alt="Monroe"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/Valeo_white.png"
    alt="Valeo"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/SACHS%20LOGO%20-%20white.png"
    alt="Sachs"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/CONTINENTAL.png"
    alt="Continental"
  />,
  <img src="https://interparts.pl/userfiles/logasy/dayco-l.png" alt="Dayco" />,
  <img
    src="https://interparts.pl/userfiles/logasy/Lemforder.png"
    alt="Lemforder"
  />,
  <img
    src="https://interparts.pl/userfiles/procaro_white2.png"
    alt="Procaro"
  />,
  <img
    src="https://interparts.pl/userfiles/voltaro_white2.png"
    alt="Voltaro"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/Gates_white.png"
    alt="Gates"
  />,
  <img
    src="https://interparts.pl/userfiles/logasy/DENSO%20white.png"
    alt="Denso"
  />,
];

export default function Carousel() {
    const carouselRef = useRef(null);
    return (
        <Container>
        <Rerousel
            ref={carouselRef}
            items={customers}
            interval={5000}
            autoplay={true}
            pauseOnHover={true}
            pauseOnFocus={true}
            pauseOnClick={true}
            pauseOnKeyDown={true}
            pauseOnResize={true}
            pauseOnVisibilityChange={true}
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
        <img color="black" src="https://interparts.pl/userfiles/logasy/logo%20MOTUL%20small.png" alt="Motul" />
            
        </Container>
    );
    }
// export default Carousel;
