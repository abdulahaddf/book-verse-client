
import { useSelector } from 'react-redux';


import ProductCard from '../productCard/ProductCard';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const AllBestSelling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const bestSellingData = useSelector(state => state.bestSelling.bestSelling);

    console.log(bestSellingData); // Add this line

    return (

        <div >
            <Helmet>
          <title>Book Verse | Best Selling Books</title>
        </Helmet>
            <h1 className="page-heading mb-8 py-3 font-bold">Best Selling books </h1>

            <div className="grid  md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6  2xl:grid-cols-7 gap-10 content-center place-items-center md:w-[90%] mx-auto ">
                {bestSellingData?.map((book) => (

                    <ProductCard key={book._id} data={book} text='bestSelling' ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default AllBestSelling;
