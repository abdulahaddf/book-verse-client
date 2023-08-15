import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const singleBookDetails = useLoaderData();
    const {_id, title, cover_image, author, rating, page_numbers} = singleBookDetails;
    return (
        <div>
            
            <div className=" hero min-h-screen bg-base-200">
  <div className="w-1/2 hero-content flex-col lg:flex-row">
    <img src={cover_image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="">Author: {author}</p>
      <p className="">Rating: {rating}</p>
      <p className="">Page Number: {page_numbers}</p>
     <div className='flex justify-center items-center'>
     <button className="btn btn-primary mr-6">Rent Now</button>
      <button className="btn btn-primary">Add to Cart</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;