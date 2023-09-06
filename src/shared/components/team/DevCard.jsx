import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const DevCard = ({data}) => {
    const {name,color,role,github,image}=data;
    const divStyle = {
        backgroundColor: color,
      };
    
    return (
        <div className="md:px-10 md:p-5 flex justify-between items-center border-2 shadow-lg">
            <div className="p-2 md:px-5">
            <h2 className="md:text-2xl font-semibold">{name}</h2>
            <h2 >{role} <Link to={`${github}`}><BsGithub className="inline text-xl" /></Link></h2>
            </div>
            <div>
                <img src={image} alt=""  className="h-40 w-40"/>
            </div>
            
        </div>
    );
};

export default DevCard;