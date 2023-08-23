import { useParams } from "react-router-dom";
import UseBooks from "../../../hooks/UseBooks";

const AuthorDetails = () => {
  const Author = useParams();
//   console.log(Author?.name);
  const {books}=UseBooks();
  const authorDetails=books.find(book=>book.author=== Author?.name)
  console.log(authorDetails)
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
          <h2 className="card-title font-mono ">{authorDetails?.author}</h2>
          <p className="mt-5">{authorDetails?.about_author}</p>
          
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
