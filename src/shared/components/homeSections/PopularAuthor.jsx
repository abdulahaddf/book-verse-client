
import Heading from '../heading/Heading';
import BookCard from '../BookCard/BookCard';
import { Link } from 'react-router-dom';

const PopularAuthor = () => {
    return (
        <div className="section">
            <div className="flex justify-between items-center">
             <Heading title={'Popular Author'} ></Heading>
                <Link className="btn-primary ">See More</Link>
               </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 content-center">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            
            </div>
               
        </div>
    );
};

export default PopularAuthor;