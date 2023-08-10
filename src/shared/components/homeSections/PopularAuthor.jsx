
import Heading from '../heading/Heading';
import BookCard from '../BookCard/BookCard';

const PopularAuthor = () => {
    return (
        <div>
             <Heading title={'Popular Author'} ></Heading>
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

export default PopularAuthor;