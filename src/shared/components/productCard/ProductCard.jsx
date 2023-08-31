import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { author, title, cover_image, _id,real_price,offer_price } = data;
  const savedPer = (((real_price - offer_price) / real_price) * 100).toFixed(0);
  return (
    <div className="w-48 p-2  hover:shadow-slate-300 hover:shadow-sm overflow-hidden">
      <div href="#" className="group relative block w-full">
        <div className="mx-auto w-44 relative">
          <img
            alt="Developer"
            src={
              cover_image || `https://i.ibb.co/Lx94QQt/book-default-data.jpg`
            }
            className="relative inset-0  w-44 h-64  transition-opacity group-hover:opacity-90"
          />
          <p className="bg-[#F23534] h-10 w-10  text-xs font-medium text-slate-50 absolute -top-2 -left-2 inline rounded-full p-2 pt-3">-{savedPer}%</p>
        </div>
        <div className="">
          <p className="font-bold primary-Color ">
            {title}
          </p>
          <p className="text-xs text-slate-600 font-medium uppercase tracking-widest">
            {author}
          </p>
          <p className="inline-block line-through text-slate-400 me-6">${real_price}</p>
          <p className="inline-block text-red font-medium">${offer_price}</p>
        </div>
        <div className="absolute top-52  w-full ">
          <div className="-translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {/* bg-gradient-to-r from-[#3cf671] via-[#1dd752]  to-teal-400  hover:bg-[#1dd752]  */}
            <button className="btn btn-sm border-none w-full  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%text-sm normal-case font-light font-mono text-white">
              <Link to={`/details/${_id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
