import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
const AuthorCard = ({ card }) => {
  // Tonmoy start

  const { darkMode } = useContext(AuthContext);
  // Tonmoy end
  const { _id, author, author_image } = card;
  return (
    <div
      className={`${
        darkMode
          ? "p-5 group text-white bg-gray shadow-sm relative overflow-hidden  shadow-slate-100"
          : "p-5 group  relative overflow-hidden bg-stone-50 hover:shadow-4xl hover:ring-2 focus:ring-2 shadow-slate-300 "
      } `}
    >
      <img src={author_image} alt="" className="rounded-full w-48 h-48 ring-4 mx-auto" />
      <h2 className="text-lg py-3 font-mono w-48">{author}</h2>
      <div className="absolute top-48 w-full px-3 left-0">
        <div className="translate-y-8 transform opacity-0 transition-all w-full group-hover:translate-y-0 group-hover:opacity-100">
          <button className="btn btn-sm border-none bg-[#048ED6] opacity-90  hover:bg-[#048cd6da]   normal-case w-full text-white">
            <Link
              className="hover:text-white hover:no-underline hover:scale-125 duration-300"
              to={`/Author/${author}`}
            >
              Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
