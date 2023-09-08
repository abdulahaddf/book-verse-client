import { useState } from "react";
import { useEffect } from "react";
import DevCard from "./DevCard";
import background from '../../../assets/image/background.jpg'

const Team = () => {
  const [devs, setDevs] = useState([]);
  const divStyle = {
    backgroundImage: `url(${background})`
  };
  useEffect(() => {
    fetch("test.json")
      .then((res) => res.json())
      .then((data) => setDevs(data));
  }, []);
  console.log(devs);
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div style={divStyle} className="min-h-screen p-5 py-10 flex  justify-center items-center w-full bg-cover bg-no-repeat bg-left">
      <div>
        <h2 className="text-4xl font-sans font-extrabold">
          Meet The team <br />  Our Developers
        </h2>
        <hr className="w-48 mt-2 border-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
          {devs.map((dev) => (
            <DevCard key={dev?.id} data={dev} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
