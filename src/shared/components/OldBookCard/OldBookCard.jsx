/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const OldBookCard = ({book}) => {
    console.log(book)
    const {author,title,cover_image,_id, postDate, offer_price}= book;
    return (
        <div className="h-96 hover:rounded-sm hover:shadow-red shadow-md overflow-hidden">
      <div href="#" className="group relative block bg-black">
        <img
          alt="Developer"
          src={cover_image ||`https://i.ibb.co/Lx94QQt/book-default-data.jpg`}
          className="relative inset-0  w-full h-96  opacity-75 transition-opacity group-hover:opacity-50"
        />
        <div className="absolute bottom-0 p-5 w-full ">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
           
            <p className="text-cyan-50 text-lg">Book Name: {title}</p>
            <p className="text-teal-50 py-5 text-sm">Author: {author}</p>
            <p className="text-teal-50 py-5 text-sm">Offer price: {offer_price}</p>
            <p className="text-teal-50 py-5 text-sm">Posted on : {new Date(postDate).toISOString().split("T")[0]}</p>

            <button className="btn-primary normal-case w-full">
              <Link className='hover:text-white hover:no-underline' to={`/old-books-details/${_id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OldBookCard;