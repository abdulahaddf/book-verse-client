import { useSelector } from 'react-redux';

import ProductCard from '../productCard/ProductCard';

const AllRecentSelling = () => {
    const recentSellingData = useSelector(state => state.recentSelling.recentSelling);

    console.log(recentSellingData); // Add this line

    return (
        <div className='py-[100px]'>
            <h1 className="page-heading mb-[30px]">All Recent Selling books </h1>


            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center w-[90%] mx-auto ">
                {recentSellingData?.map((book) => (
                     <ProductCard key={book._id} data={book} text='recentSelling' ></ProductCard>
                ))}
            </div>

        </div>
    );
};

export default AllRecentSelling;