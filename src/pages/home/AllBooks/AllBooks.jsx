
import BookCard from "../../../shared/components/BookCard/BookCard";
import UseBooks from "../../../hooks/UseBooks";
import Loader from "../../../shared/components/loader/Loader";


const AllBooks = () => {
    const {books, loading} = UseBooks();
    console.log(books);
    if (loading) {
        return <Loader/>
    }
    return (
        <div className="">

        <div className="grid grid-cols-4 gap-8 w-11/12 mx-auto">
            {
                books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
            }
        </div>
            </div>
    );
};

export default AllBooks;