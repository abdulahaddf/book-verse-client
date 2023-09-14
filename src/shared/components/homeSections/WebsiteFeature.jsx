import React, { useContext, useEffect, useState } from "react";
import { useCountUp } from "react-countup";
// import CountUp from 'react-countup/build/CountUp';
import { FaBookOpen, FaFeatherAlt, FaStoreAlt, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { AuthContext } from "../../../provider/AuthProvider";

const WebsiteFeature = () => {
  const { darkMode} = useContext(AuthContext);
    const delayInSeconds = 10; // Change this to your desired delay duration in seconds

  const [shouldStartCounter, setShouldStartCounter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldStartCounter(true);
    }, delayInSeconds * 1000); // Convert delayInSeconds to milliseconds

    // Clear the timer if the component unmounts or when the delay is no longer needed
    return () => clearTimeout(timer);
  }, [delayInSeconds]);
  return (
    <div className={`${darkMode?" bg-[#3C4043] grid grid-cols-2 gap-4 md:grid-cols-4 place-items-center w-4/5 mx-auto my-10 p-5 space-y-5":"grid grid-cols-2 gap-4 md:grid-cols-4 place-items-center w-4/5 mx-auto my-10 p-5 space-y-5"}`}>
      <div className="text-center flex flex-col items-center">
        <FaUsers className="text-6xl text-[#1e97d4]"></FaUsers>
        <h1 className="font-bold text-2xl py-1">
          {shouldStartCounter && (
          <CountUp
            start={0}
            end={200}
            duration={3}
            separator=","
            decimals={0}
            suffix="+"
          />)}
        </h1>
        <p>Happy Customers</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <FaBookOpen className="text-6xl text-[#1e97d4]"></FaBookOpen>
        <h1 className="font-bold text-2xl py-1">
          {shouldStartCounter && (
          <CountUp
            start={0}
            end={50000}
            duration={3}
            separator=","
            decimals={0}
            suffix="+"
          />)}
        </h1>
        <p>Books Collections</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <FaStoreAlt className="text-6xl text-[#1e97d4]"></FaStoreAlt>
        <h1 className="font-bold text-2xl py-1">
          {shouldStartCounter && (
          <CountUp
            start={0}
            end={120}
            duration={3}
            separator=","
            decimals={0}
            suffix="+"
          />)}
        </h1>
        <p>Store Round World</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <FaFeatherAlt className="text-6xl text-[#1e97d4]"></FaFeatherAlt>
        <h1 className="font-bold text-2xl py-1">
          {shouldStartCounter && (
          <CountUp
            start={0}
            end={450}
            duration={3}
            separator=","
            decimals={0}
            suffix="+"
          />)}
        </h1>
        <p>Famous Writers</p>
      </div>
    </div>
  );
};

export default WebsiteFeature;
