
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
<h1 className="text-3xl text-center font-semibold my-5" >All Your Books</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 content-center my-5 w-11/12 mx-auto">
            {
                books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
            }
        </div>
            </div>
    );
};

export default AllBooks;