import Marquee from "react-fast-marquee";
import relx from '../../../assets/publications/2560px-RELX_Group_logo.svg.png';
import thomson from '../../../assets/publications/Thomson_Reuters_logo.svg.png';
import pearson from "../../../assets/publications/2560px-Pearson_logo.svg.png";
import bertelsmann from "../../../assets/publications/2560px-Bertelsmann_2011_logo.svg.png";
import wolters from '../../../assets/publications/1280px-Wolters_Kluwer_Logo.svg.png';
import hachette from '../../../assets/publications/60950d8353a8bf00040ff34c.png';
import springer from '../../../assets/publications/2560px-Springer_Nature_Logo.svg.png';
import wiley from "../../../assets/publications/wiley-2-logo-png-transparent.png";
import Heading from "../heading/Heading";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import WebsiteFeature from "./WebsiteFeature";
const Publications = () => {
    // Tonmoy start

    const { darkMode} = useContext(AuthContext);
    // Tonmoy end
  return (
    <div className={`${darkMode?"section bg-[#3C4043] mt-20":" my-20"}`}>
      <Heading title={"Our Publication Partner"}></Heading>
      <div className="mt-6">
      <Marquee  pauseOnHover>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2  rounded-md image_wrapper"
            src={relx}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={thomson}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={pearson}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={bertelsmann}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={wolters}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={hachette}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={springer}
            alt=""
          />
        </div>
        <div className="mr-4">
          <img
            className="w-48 h-16 px-3 py-2 rounded-md image_wrapper"
            src={wiley}
            alt=""
          />
        </div>
      </Marquee>
      </div>
      <WebsiteFeature/>
    </div>
  );
};

export default Publications;

