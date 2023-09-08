/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const ProductCard = ({ data, loading }) => {
  const {
    author,
    title,
    cover_image,
    _id,
    real_price,
    offer_price,
    previous_id,
  } = data;
  const savedPer = (((real_price - offer_price) / real_price) * 100).toFixed(0);

  return (
    <Link to={`/details/${previous_id ? previous_id : _id}`} className="w-48 p-2  hover:shadow-slate-300 hover:shadow-sm overflow-hidden">
      <div href="#" className="group relative block w-full">
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
