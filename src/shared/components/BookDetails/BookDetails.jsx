import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const singleBookDetails = useLoaderData();
    const {_id, title, cover_image, author, rating, page_numbers, category,published, language, description, real_price} = singleBookDetails;
    return (
        <div>
            
            <div className=" hero min-h-screen bg-base-200">
  <div className=" hero-content flex-col lg:flex-row">
    <img src={cover_image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='ms-3'>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mt-3"><span className='font-semibold'>Author:</span> {author}</p>
      <p className="mt-1"><span className='font-semibold'>Price:</span> ${real_price}</p>
      <p className="mt-1"><span className='font-semibold'>Rating:</span> {rating}</p>
      <p className="mt-1"><span className='font-semibold'>Total Page:</span> {page_numbers}</p>
      <p className="mt-1"><span className='font-semibold'>Category:</span> {category}</p>
      <p className="mt-1"><span className='font-semibold'>Language:</span> {language}</p>
      <p className="mt-1"><span className='font-semibold'>Published:</span> {published}</p>
      <p className="mt-1"><span className='font-semibold'>Description:</span>  {description}</p>
     <div className='flex justify-center items-center mt-6'>
     <button className="btn btn-primary mr-6 ">Rent Now</button>
      <button className="btn btn-primary">Add to Cart</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;