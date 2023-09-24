import { useSelector } from 'react-redux';

import ProductCard from '../productCard/ProductCard';
import { useEffect } from 'react';

const AllRecentSelling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const recentSellingData = useSelector(state => state.recentSelling.recentSelling);

   

    return (
        <div className='py-10'>
            <h1 className="page-heading my-8 font-bold">All Recent Selling books </h1>


            <div className="grid md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6  2xl:grid-cols-7 gap-10 content-center md:w-[90%] place-items-center mx-auto ">
                {recentSellingData?.map((book) => (
                     <ProductCard key={book._id} data={book} text='recentSelling' ></ProductCard>
                ))}
            </div>

        </div>
    );
};

export default AllRecentSelling;