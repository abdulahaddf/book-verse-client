import UseBooks from "../../hooks/UseBooks";
import Loader from "../../shared/components/loader/Loader";
import ManageBooksCard from "./ManageBooksCard";
const ManageBooks = () => {
  const { books, setBooks, loading } = UseBooks();
  console.log(books);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-full ps-4 lg:p-4 md:mt-6">
      <h2 className="text-4xl font-bold text-center">Books management</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <ManageBooksCard
            key={book._id}
            book={book}
            books={books}
            setBooks={setBooks}
          ></ManageBooksCard>
        ))}
      </div>
    </div>
  );
};

export default ManageBooks;
