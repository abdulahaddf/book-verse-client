/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BestSellingCard = ({ data }) => {
  const { author, title, cover_image, _id ,real_price, offer_price, rating} = data;
  return (
    <div className=" my-2  ">
      <div className="flex gap-3">
       
       <div className="md:w-64">
       <img
          alt="BookCOver"
          src={cover_image || `https://i.ibb.co/Lx94QQt/book-default-data.jpg`}
          className="w-24"/>
       </div>
    
       <div className="w-full lg:w-96 space-y-2">
       <Link to={`/details/${_id}`} className="">{title}</Link>
        <p className="text-sm">{author}</p>
        <p className="">
                <span className="line-through mr-3 text-slate-500">
                  $ {real_price}
                </span>
                <span className="font-semibold ">${offer_price}</span>
                
              </p>
              <p className="flex gap-2 items-center">
               
                {rating} <FaStar />
              </p>
       
       </div>
      </div>
    </div>
  );
};

export default BestSellingCard;