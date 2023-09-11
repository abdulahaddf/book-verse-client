
import { useSelector } from 'react-redux';


import ProductCard from '../productCard/ProductCard';

const AllBestSelling = () => {


    const bestSellingData = useSelector(state => state.bestSelling.bestSelling);

    console.log(bestSellingData); // Add this line

    return (

        <div>
            <h1 className="page-heading mb-[30px]">All Best Selling books </h1>

            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center w-[90%] mx-auto ">
                {bestSellingData?.map((book) => (

                    <ProductCard key={book._id} data={book} text='bestSelling' ></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default AllBestSelling;
