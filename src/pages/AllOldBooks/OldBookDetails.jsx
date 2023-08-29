import { useLocation } from "react-router-dom";

const OldBookDetails = () => {
    const location = useLocation();
    const book = location.state; 
    const {author,title,cover_image,_id, postDate}= book;
    console.log(book);
    return (
        <div className="h-[100vh] w-full">
            <h1 className="my-10 text-center text-3xl">Old Book Details :{title}</h1>
        </div>
    );
};

export default OldBookDetails;