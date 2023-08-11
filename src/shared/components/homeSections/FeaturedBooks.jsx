import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import Heading from "../heading/Heading";


const FeaturedBooks = () => {
    return (
        <div className="section">
            <Heading title={'Featured Books'} ></Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 content-center">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            
            </div>
               <div className="flex justify-center items-center">
                <Link className="btn-primary ">See More</Link>
               </div>
        </div>
    );
};

export default FeaturedBooks;