import { useEffect } from "react";
import UseBooks from "../../../hooks/UseBooks";
import AuthorCard from "./AuthorCard";

const AuthorsCollection = () => {
  const { books } = UseBooks();
  console.log(books);
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="p-2">
      <div className="mx-5 md:mx-16  p-6 bg-[#F1EDFF] rounded-md">
        <h2 className="text-slate-900 text-xl font-semibold">All Author's</h2>
      </div>
      <div className="p-10 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5  md:grid-cols-3 gap-5 justify-items-center">
        {books.map((card) => (
          <AuthorCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsCollection;
