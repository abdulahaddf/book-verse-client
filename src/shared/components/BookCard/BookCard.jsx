/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./BookCard.css";

import useLocalStorage from "../../../hooks/useLocalStorage";

import Swal from 'sweetalert2'
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import moment from "moment/moment";




// 



const BookCard = ({book,text}) => {

  const {cartRefetch}=useContext(AuthContext);
  

  const { getValue, setValue } = useLocalStorage(); // Use the custom hook

  const handleAddToCart = () => {
    const cartItems = getValue("cartItems", []);
    
    
    // Ensure cartItems is initialized as an empty array

    if(cartItems){

      const find= cartItems.find(a=> a?._id ===  book?._id)

      if(find){
        return   Swal.fire({
          title: 'The book is already added to the cart',
          
          icon: 'error',
          confirmButtonText: 'Ok'
        })


      }

     
    }
     book.real_price2=  book?.real_price
    const updatedCart = [...cartItems, book];
    setValue("cartItems", updatedCart);
    
    Swal.fire({
      position: 'top-end',
  icon: 'success',
  title: 'The book is added to the cart',
  showConfirmButton: false,
  timer: 1500
    })

    cartRefetch()
  };

  console.log(book);
  const {_id,title, author, cover_image, offer_price, rating ,count,previous_id,purchase_date } = book;
  return (
    <div className=" mx-auto    ">
      {/* card 1 start */}
      <div
        className="group book-card-container relative block bg-black  w-[300px]
            overflow-hidden "
      > 
        <img
          alt="Developer"
          src={cover_image}
          className="absolute inset-0 w-[300px] object-cover opacity-75 transition-opacity group-hover:opacity-30 h-full book-card-img "
        />

        <div className="relative px-8 flex justify-between   ">
          <div className="mt-32 sm:mt-48 lg:mt-[30%] mx-auto  ">
            <div className="translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100  duration-500  ">
              <h3 className="text-[20px] text-white my-5 h-14 ">
                Name: {title}
              </h3>
              <p className="text-[18px] text-white my-5 ">
                Author:{author}
              </p>

              <p className="text-[18px] text-white my-5">Price: ${offer_price}</p>

              {text==='bestSelling' &&  <p className="text-[18px] text-white my-5">Sold: {count}</p>}
              {text==='recentSelling' &&  <p className="text-[18px] text-white my-5">Sold: {moment(purchase_date).format('MMMM Do YYYY, h:mm:ss a')}</p>}

              <div className="flex items-center  mt-5 pb-[30px]">
                <p className="text-[18px] text-white mr-2">Rating: {rating}</p>
                <div className="flex">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>

              <div>
                

              { !text  &&   <section className=" my-5">
                  <button onClick={handleAddToCart} className="btn-card w-full ">Add to Cart</button>
                </section>}
                <section className=" my-5">
                  <Link to={`/details/${previous_id ||_id}`}><button className="btn-card w-full ">View Details</button></Link>
                </section>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;