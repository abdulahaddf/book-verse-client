/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { FaStar } from "react-icons/fa";


import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import moment from "moment";


const ProductCard = ({ data, loading, text }) => {
  const {
    author,
    title,
    cover_image,
    _id,
    real_price,
    offer_price,
    previous_id
  } = data;
  const savedPer = (((real_price - offer_price) / real_price) * 100).toFixed(0);

  // tonmoy start 



  const allRating = data?.review?.map((a) => a?.rating)

  const sumOfRating = allRating?.reduce((a, b) => a + b, 0)

  const rating = sumOfRating / data?.review?.length;

  const realRating = parseFloat(rating).toFixed(2)




  const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  )

  const myStyles = {
    itemShapes: Star,




    activeFillColor: '#10aade',


    inactiveFillColor: '#10abde3a',


  }



  // tonmoy end 

  return (
    <Link to={`/details/${previous_id ? previous_id : _id}`} className="w-48 p-2  hover:shadow-slate-300 hover:shadow-sm overflow-hidden">
      <div href="#" className="group relative block px-auto w-44">
        <div className="mx-auto w-44 relative">
          {loading ? (
            <Skeleton height={256} width={352} />
          ) : (
            <>
              <img
                alt="Developer"
                src={
                  cover_image ||
                  "https://i.ibb.co/Lx94QQt/book-default-data.jpg"
                }
                className="relative inset-0  w-44 h-64  transition-opacity group-hover:opacity-90"
              />
              <p className="bg-[#F23534] h-10 w-10  text-xs font-medium text-slate-50 absolute -top-2 -left-2 inline rounded-full p-2 pt-3">
                -{savedPer}%
              </p>
              <p className={`bg-[#FFA41C] h-6 w-12  text-xs font-medium text-slate-50 absolute top-2 right-0  rounded-s-full pt-1 ${!rating && "hidden"}`}>
                <span className="ms-2 flex items-center gap-0.5"><FaStar className="inline hover:animate-ping pb-0.5"/> {rating && rating}</span>
              </p>
            </>
          )}
        </div>
        <div className="">
          {loading ? (
            <>
              <Skeleton height={20} width={200} />
              <Skeleton height={16} width={150} />
              <Skeleton height={16} width={100} />
            </>
          ) : (
            <>
              <p className="font-bold primary-Color">{title}</p>
              <p className="text-xs text-slate-600 font-medium uppercase tracking-widest">
                {author}
              </p>
              {/* tonmoy start */}
              <div className="my-2">

                {text === 'bestSelling' && <p className="text-xs text-slate-500 my-3 font-medium uppercase tracking-widest">
                  total sold  <span className="text-xs text-blue-500">({data?.count})</span> 
                </p>}

                {text === 'recentSelling' && <p className="text-xs text-slate-500 my-3 font-medium uppercase tracking-widest">
                 
                   <span className="text-xs text-slate-500">
                     purchase : {/* {moment(data?.purchase_date).format('MMMM Do YYYY, h:mm:ss a')} */}
                  
                  {new Date(data?.purchase_date)?.toISOString().split("T")[0]}</span>
                </p>}

                {/* <Rating readOnly value={realRating > 0 ? realRating : 1} style={{ maxWidth: 100 }} itemStyles={myStyles} /> */}



              </div>
              {/* tonmoy end*/}
              <p className="inline-block line-through text-slate-400 me-6">
                ${real_price}
              </p>
              <p className="inline-block text-red font-medium">
                ${offer_price}
              </p>
            </>
          )}
        </div>
        <div className="absolute top-52 w-full ">
          <div className="-translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button className="btn btn-sm border-none w-full  bg-gradient-to-r from-[#10aade] via-[#126e9d]  to-[#10aade] text-sm normal-case font-light font-mono text-white ">
              {/* issue to redirect link privious_id/_id  */}

              <Link className="hover:text-white hover:no-underline hover:scale-125 duration-300" to={`/details/${previous_id ? previous_id : _id}`}>
                Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
