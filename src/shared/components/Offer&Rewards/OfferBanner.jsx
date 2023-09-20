import { ImGift } from "react-icons/im";
import banner4 from '../../../assets/image/banners04.jpg'
import CouponSection from "../Coupon/CouponSection";

const OfferBanner = () => {
  const divStyle = {
    backgroundImage: `url(${banner4})`
  };
  return (
    // <div style={divStyle} className="h-[28rem] w-full rounded-lg shadow-lg bg-cover bg-no-repeat">
    //   <div className="flex justify-center p-3 items-end md:items-center h-full md:justify-end">
    //     <div className="bg-[#F9F871] rounded-lg bg-opacity-80 p-5">
    //       <h2 className="text-xl font-medium text-slate-600"><ImGift className="inline text-3xl animate-pulse text-red" /> Unlock
    //         Exclusive Offers and Rewards!
    //       </h2>
    //       <p className="my-2 text-slate-600 text-xs">Login to Your Account and Claim Your Exclusive Rewards!</p>
    //     </div>
    //   </div>
    // </div>
    <CouponSection/>
  );
};

export default OfferBanner;
