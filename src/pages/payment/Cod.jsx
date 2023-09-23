import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import animationData from "../../../public/confirm-order.json";
import Lottie from "react-lottie";

const Cod = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { darkMode } = useContext(AuthContext);

  return (
    <div
      className={
        darkMode
          ? "h-[70vh] w-11/12 md:w-1/2 mx-auto  md:p-10 text-center my-10 space-y-4 border-[1px] bg-gray "
          : "h-[70vh] w-11/12 md:w-1/2 mx-auto  md:p-10 text-center my-10 space-y-4 border-2 border-red shadow-2xl"
      }
    >
      <div className="w-1/2 mx-auto">
        <Lottie options={defaultOptions} />
      </div>

      <h1 className="text-3xl">
        Your Order is In Progress{" "}
        <span className="loading loading-dots loading-md"></span>
      </h1>
      <p className="text-3xl">
        <Link
          className="text-red hover:no-underline "
          to="/dashboard/purchasedBooks"
        >
          Click here
        </Link>{" "}
        To Truck Your Order
      </p>
      <h3 className="text-xl">Thanks For Being With Us</h3>
    </div>
  );
};

export default Cod;
