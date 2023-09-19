/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const OldBookCard = ({book}) => {
    console.log(book)

    const {darkMode}=useContext(AuthContext)
    const {author,title,cover_image,_id, postDate, offer_price}= book;
    return (
        <div className={darkMode?"h-96 hover:rounded-sm hover:shadow-white/50 shadow-md overflow-hidden":"h-96 hover:rounded-sm hover:shadow-red shadow-md overflow-hidden   "}>
      <div href="#" className="group relative block bg-black ">
        <img
          alt="Developer"
          src={cover_image ||`https://i.ibb.co/Lx94QQt/book-default-data.jpg`}
          className="relative inset-0  w-full h-96  opacity-75 transition-opacity group-hover:opacity-50 rounded-[]"
        />
        <div className="absolute bottom-0 p-5 w-full ">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <div className="mx-2">
              <p className="text-cyan-200 text-lg font-mono">Book Name: {title}</p>
              <p className="text-teal-50  text-sm">Author: {author}</p>
              <p className="text-teal-50 text-sm">
                Offer price: $ {offer_price}
              </p>
              <p className="text-teal-50  text-sm">
                Posted on : {new Date(postDate).toISOString().split("T")[0]}
              </p>
            </div>

            
            <div className=' flex justify-center' >
            <Link className='btn-primary-2 normal-case " hover:text-white hover:no-underline' to={`/old-books-details/${_id}`}>Details</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    
 
    );
};

export default OldBookCard;
