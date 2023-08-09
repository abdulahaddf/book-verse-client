import BookCard from "../BookCard/BookCard";
import Heading from "../heading/Heading";


const FeaturedBooks = () => {
    return (
        <div>
            <Heading title={'Featured Books'} ></Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 content-center">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </div>
    );
};

export default FeaturedBooks;