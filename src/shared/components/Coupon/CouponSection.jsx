import { useEffect, useState } from "react";
import CouponCard from "./CouponCard";

const CouponSection = () => {
  const [coupon, setCoupon] = useState([]);
  useEffect(() => {
    fetch("https://book-verse-team-project-server.up.railway.app/promo")
      .then((response) => response.json())
      .then((data) => setCoupon(data));
  }, []);
  return (
    <div className="w-full flex justify-center p-2">
      {coupon && <CouponCard data={coupon[0]} />}
    </div>
  );
};

export default CouponSection;
