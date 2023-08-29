import { useState } from "react";
import { useEffect } from "react";
import OldBookCard from "../../shared/components/OldBookCard/OldBookCard";


const AllOldBooks = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/oldBooks")
        .then(res => res.json())
        .then(data => setBook(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold my-10">All Old Books</h1>
            <div className="grid md:grid-cols-4 gap-8 w-11/12 mx-auto my-20">
            {
                books?.map(book => <OldBookCard key={book._id} book={book}></OldBookCard>)
            }
        </div>
        </div>
    );
};

export default AllOldBooks;