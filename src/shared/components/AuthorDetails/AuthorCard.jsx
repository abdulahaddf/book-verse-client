const AuthorCard = ({ card }) => {
  const { _id, author, author_image } = card;
  return (
    <div className="p-5 group  relative overflow-hidden bg-[#F1EDFF]">
      <img src={author_image} alt="" className="rounded-full w-48 h-48" />
      <h2 className="text-lg py-3 font-mono">{author}</h2>
      <div className="absolute top-40 w-full px-3 left-0">
        <div className="translate-y-8 transform opacity-0 transition-all w-full group-hover:translate-y-0 group-hover:opacity-100">
          <button className="btn border-none  hover:bg-[#d71d24] hover:opacity-90  btn-ghost normal-case w-full text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
