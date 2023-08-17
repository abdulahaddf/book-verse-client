
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';


const BookDetails = () => {
    const singleBookDetails = useLoaderData();
    const {
        title,
        cover_image,
        author,
        rating,
        page_numbers,
        category,
        published,
        language,
        description,
        real_price,
        author_image,
        about_author
    } = singleBookDetails;

    const [activeTab, setActiveTab] = useState('description');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
      
      
        <div>
          <Navbar></Navbar>
            <div className="hero   ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={cover_image} className=" w-[300px] h-[350px] rounded-lg shadow-2xl" />
                    <div className='ms-3'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                       
                        <p className="mt-1"><span className='font-semibold'>Price:</span> ${real_price}</p>
                        <p className="mt-1"><span className='font-semibold'>Rating:</span> {rating}</p>
                        <p className="mt-1"><span className='font-semibold'>Total Page:</span> {page_numbers}</p>
                        <p className="mt-1"><span className='font-semibold'>Category:</span> {category}</p>
                        <p className="mt-1"><span className='font-semibold'>Language:</span> {language}</p>
                        <p className="mt-1"><span className='font-semibold'>Published:</span> {published}</p>
                        
                        <div className='flex justify-center items-center mt-6'>
                            <button className="btn btn-primary mr-6 ">Rent Now</button>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs mt-6 mx-auto w-1/2">
                <button
                    className={`tab tab-lifted ${activeTab === 'description' ? 'tab-active' : ''}`}
                    onClick={() => handleTabChange('description')}
                >
                    Description
                </button>
                <button
                    className={`tab tab-lifted ${activeTab === 'price' ? 'tab-active' : ''}`}
                    onClick={() => handleTabChange('price')}
                >
                    Author
                </button>
            </div>
            
            <div className="tab-content mt-3 mx-auto w-1/2 mb-20">
                {activeTab === 'description' && (
                    <div>
                        {/* <h2>Description</h2> */}
                        <p>{description}</p>
                    </div>
                )}
                {activeTab === 'price' && (
                    <div className='flex'>
                       
                      
                       <img className='w-[250px] h-[250px] rounded-lg shadow-2xl' src={author_image} alt="" />
                      
                      <div className='ml-10'>
                      <h2 className='font-semibold'>{author}</h2>
                        <p>{about_author}</p>
                      </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BookDetails;











// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const BookDetails = () => {
//     const singleBookDetails = useLoaderData();
//     const {_id, title, cover_image, author, rating, page_numbers, category,published, language, description, real_price} = singleBookDetails;
//     return (
//         <div>
            
//             <div className=" hero min-h-screen bg-base-200">
//   <div className=" hero-content flex-col lg:flex-row">
//     <img src={cover_image} className="max-w-sm rounded-lg shadow-2xl" />
//     <div className='ms-3'>
//       <h1 className="text-5xl font-bold">{title}</h1>
//       <p className="mt-3"><span className='font-semibold'>Author:</span> {author}</p>
//       <p className="mt-1"><span className='font-semibold'>Price:</span> ${real_price}</p>
//       <p className="mt-1"><span className='font-semibold'>Rating:</span> {rating}</p>
//       <p className="mt-1"><span className='font-semibold'>Total Page:</span> {page_numbers}</p>
//       <p className="mt-1"><span className='font-semibold'>Category:</span> {category}</p>
//       <p className="mt-1"><span className='font-semibold'>Language:</span> {language}</p>
//       <p className="mt-1"><span className='font-semibold'>Published:</span> {published}</p>
//       <p className="mt-1"><span className='font-semibold'>Description:</span>  {description}</p>
//      <div className='flex justify-center items-center mt-6'>
//      <button className="btn btn-primary mr-6 ">Rent Now</button>
//       <button className="btn btn-primary">Add to Cart</button>
//      </div>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default BookDetails;