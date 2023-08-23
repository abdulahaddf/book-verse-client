import { useParams } from "react-router-dom";
import UseBooks from "../../../hooks/UseBooks";
import CategoryCard from "../CategoryCard";
import { FcApproval } from "react-icons/fc";
import { BsBookFill } from "react-icons/bs";

const AuthorDetails = () => {
  const Author = useParams();
  //   console.log(Author?.name);
  const { books } = UseBooks();
  const authorDetails = books.find((book) => book.author === Author?.name);
  const authorBooks = books.filter((book) => book.author === Author?.name);
  console.log(authorDetails);
  return (
    <div className="min-h-screen p-10 md:px-32 md:p-20">
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
          <h2 className="text-sm"> <BsBookFill className="inline text-lg" /> BOOKS {authorBooks?.length}</h2>
        </div>
      </div>
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
    </div>
  );
};

export default AuthorDetails;
