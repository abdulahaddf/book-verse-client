
import { useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';

const AllBestSelling = () => {
    const bestSellingData = useSelector(state => state.bestSelling.bestSelling);

    console.log(bestSellingData); // Add this line

    return (
        <div className='py-[100px]'>
            <h1 className="page-heading mb-[30px]">All Best Selling books </h1>

            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center w-[90%] mx-auto ">
                {bestSellingData?.map((book) => (
                    <BookCard key={book._id} book={book} text='bestSelling'></BookCard>
                ))}
            </div>
        </div>
    );
};

export default AllBestSelling;
