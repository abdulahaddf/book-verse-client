import { useParams } from "react-router-dom";
import UseBooks from "../../../hooks/UseBooks";
import CategoryCard from "../CategoryCard";
import { FcApproval } from "react-icons/fc";
import { BsBookFill } from "react-icons/bs";
import AuthorCard from "./AuthorCard";
import { useEffect } from "react";

const AuthorDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const Author = useParams();
  //   console.log(Author?.name);
  const { books } = UseBooks();
  const authorDetails = books.find((book) => book.author === Author?.name);
  const authorBooks = books.filter((book) => book.author === Author?.name);
  const authorRelated = books.filter((book) => book.category === authorDetails?.category).filter((book) => book.author !== Author?.name).slice(0,3);
  console.log(authorRelated);
  return (
    <div className="min-h-screen p-10 md:px-32 md:p-20">
      {/* Author Details  */}
      <div className="card grid-cols-2 lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full p-10">
          <img
            src={authorDetails?.author_image}
            alt="Album"
            className="h-64 w-64"
          />
        </figure>
        <div className="card-body w-full">
            <h2 className="card-title font-mono text-2xl">
              {authorDetails?.author} <FcApproval className="text-2xl" />
            </h2>
          <p className="mt-3">{authorDetails?.about_author}</p>
          <h2 className="text-sm"> <BsBookFill className="inline text-xl text-teal-400" /> {authorBooks?.length} Books</h2>
        </div>
      </div>
      {/* Author Book  */}
      <div className="bg-base-100 shadow-xl my-10 md:p-10 rounded-xl">
        <h2 className="text-xl my-3 font-serif font-medium">
          {Author?.name} Books
        </h2>
        <div className="grid grid-col-1 md:p-3 justify-items-center lg:grid-cols-3">
          {authorBooks?.map((book) => (
            <CategoryCard data={book} key={book?._id} />
          ))}
        </div>
      </div>
      {/* YOU MAY ALSO LIKE…  */}
      <div className="bg-gradient-to-r from-teal-50 via-base-100 to-base-100 bg-opacity-90 shadow-xl my-10 md:p-10 rounded-xl">
        <h2 className="text-xl my-5 p-2 font-serif font-medium">You May Also Like…</h2>
        <div className="grid justify-items-center  gap-3 grid-cols-1 md:grid-cols-3">
          {authorRelated?.map(author=><AuthorCard card={author} key={author?._id} />)}
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
