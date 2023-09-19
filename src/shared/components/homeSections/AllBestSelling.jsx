
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
            <h1 className="page-heading mb-[30px]">All Best Selling books </h1>

            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 justify-center jw-[90%] mx-auto ">
                {bestSellingData?.map((book) => (

                    <ProductCard key={book._id} data={book} text='bestSelling' ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default AllBestSelling;
