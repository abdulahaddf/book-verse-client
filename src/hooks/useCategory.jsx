import UseBooks from "./UseBooks";

const useCategory = (category) => {
    const {books}=UseBooks();
    const subBooks =books.filter(book=>book.category === category) 
    return subBooks;
};

export default useCategory;