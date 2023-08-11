
import Heading from '../heading/Heading';
import BookCard from '../BookCard/BookCard';
import { Link } from 'react-router-dom';

const PopularAuthor = () => {
    return (
        <div className="section">
             <Heading title={'Popular Author'} ></Heading>
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

export default PopularAuthor;