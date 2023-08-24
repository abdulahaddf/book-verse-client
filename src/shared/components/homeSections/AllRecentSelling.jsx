import { useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';

const AllRecentSelling = () => {
    const recentSellingData = useSelector(state => state.recentSelling.recentSelling);

    console.log(recentSellingData); // Add this line

    return (
        <div className='py-[100px]'>
            <h1 className="page-heading mb-[30px]">All Recent Selling books </h1>


            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center w-[90%] mx-auto ">
                {recentSellingData?.map((book) => (
                    <BookCard key={book._id} book={book} text='recentSelling'></BookCard>
                ))}
            </div>

        </div>
    );
};

export default AllRecentSelling;