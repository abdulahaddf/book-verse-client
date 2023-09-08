import { Link } from "react-router-dom";
const AuthorCard = ({ card }) => {
  const { _id, author, author_image } = card;
  return (
    <div className="p-5 group  relative overflow-hidden bg-stone-50 hover:shadow-xl shadow-slate-300">
      <img src={author_image} alt="" className="rounded-full w-48 h-48" />
      <h2 className="text-lg py-3 font-mono">{author}</h2>
      <div className="absolute top-48 w-full px-3 left-0">
        <div className="translate-y-8 transform opacity-0 transition-all w-full group-hover:translate-y-0 group-hover:opacity-100">
          <button className="btn btn-sm border-none bg-[#048ED6] opacity-90  hover:bg-[#048cd6da]   normal-case w-full text-white">
            <Link to={`/Author/${author}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
