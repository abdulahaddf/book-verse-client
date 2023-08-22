import { useState, useEffect } from "react";

const UseBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://book-verse-server-phi.vercel.app/allBooks')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
        
            return res.json();
        })
        .then(data => {
            setBooks(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
        
    }, []);

    return { books, loading, error };
}

export default UseBooks;
