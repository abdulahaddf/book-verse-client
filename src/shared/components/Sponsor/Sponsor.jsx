import Marquee from "react-fast-marquee";
import amazon from "../../../assets/sponsor/amazon.png";
import facebook from "../../../assets/sponsor/facebook.png";
import google from "../../../assets/sponsor/google.png";
import linkedin from "../../../assets/sponsor/linkedin.png";
import airbnb from "../../../assets/sponsor/airbnb.png";
import microsoft from "../../../assets/sponsor/microsoft.png";
import "./Sponsor.css";
const Sponsor = () => {
  return (
    <div className="my-20">
    
      <Marquee  pauseOnHover>
        <div>
          <img
            className="w-48 h-16 px-3 py-2 bg-slate-100 rounded-md image_wrapper"
            src={amazon}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-48 h-16 px-3 py-2 bg-slate-100 rounded-md image_wrapper"
            src={google}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-48 h-16 px-3 py-2 bg-slate-100 rounded-md image_wrapper"
            src={facebook}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-48 h-16 px-3 py-2 bg-slate-100 rounded-md image_wrapper"
            src={linkedin}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-48 h-16 px-3 py-2 bg-slate-100 rounded-md image_wrapper"
            src={microsoft}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-48 h-16 px-3 py-2 bg-slate-100 rounded-md image_wrapper"
            src={airbnb}
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsor;

