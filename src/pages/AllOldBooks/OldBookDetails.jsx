/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useLocalStorage from "../../hooks/useLocalStorage";
import Swal from "sweetalert2";
import UseSingleUser from "../../hooks/useSingleUser";

const OldBookDetails = () => {

  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
     
      const {user, cartRefetch } = useContext(AuthContext);
      
      const { getValue, setValue } = useLocalStorage();
      const [agree, setAgree] = useState(false);
    const book = useLoaderData();
    const {author, title, cover_image, _id , postDate, offer_price ,language, description,seller,sellerPhoto , sellerMail, sellerAddress, sellerPhone
    }= book;
    console.log(book);
    const checkboxHandler = () => {
        setAgree(!agree);
      };
    
      
    
    
      const handleAddToCart = () => {
    
        const cartItems = getValue("cartItems", []);
    
        if (cartItems) {
          const find = cartItems.find((a) => a?._id === book?._id);
    
          if (find) {
            return Swal.fire({
              title: "The book is already added to the cart",
    
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        }
        book.offer_price2 = book?.offer_price;
        const updatedCart = [...cartItems, book];
        setValue("cartItems", updatedCart);
    
        Swal.fire({
          position: "center",
          icon: "success",
          title: "The book is added to the cart",
          showConfirmButton: false,
          timer: 1500,
        });
    
        cartRefetch();
      };

// strat Tonmoy


const [singleUser, singleUserRefetch]=UseSingleUser(user?.email);

const navigate=useNavigate()

const contactWithSellerHandler=()=>{

  if(!user){
    return Swal.fire({
      title: "Please login",

      icon: "error",
     
    });
  }

  navigate(`/dashboard/ContactWithSeller/${_id}` )


}


console.log(singleUser?.role)

// end Tonmoy
    return (
        <div className="h-[100vh] w-full">
        
            <div className="w-11/12 mx-auto">
      <div className="my-10 ">
        <div className="md:flex justify-center gap-10 w-11/12 mx-auto ">
          <img
            src={cover_image}
            className=" md:w-2/12 my-5 rounded-lg shadow-2xl"
          />
          <div className="ms-3 space-y-3">
            <h1 className="text-2xl md:text-5xl font-bold font-serif">{title}</h1>

            <p >
              <span className="font-semibold">Author:</span> {author}
            </p>
            <p >
              <span className="font-semibold">Price:</span> ${offer_price}
            </p>
           
            <p >
              <span className="font-semibold">Language:</span> {language}
            </p>
            <p >
              <span className="font-semibold">Posted on : </span> {postDate}
            </p>


           
             
          </div>
          
        </div>
        <div className="w-11/12 mx-auto md:flex justify-center gap-10">
        <button className="btn-primary md:mt-10" onClick={handleAddToCart}>
                Add to Cart
              </button>
             
        </div>
      </div>

      <div className="  flex justify-around mt-6 mx-auto w-4/5 gap-20">
      <div>
            <h2 className="text-2xl font-semibold my-3">Book Description</h2>
            <p>{description}</p>
          </div>
          <div className="">
          <h2 className="text-2xl font-semibold my-3">Seller Information</h2>

           <div className="flex gap-10">
           <img
              className="w-[150px] h-[150px] rounded-lg shadow-2xl"
              src={sellerPhoto}
              alt=""
            />
            <div className="my-3">
              <h2 className="font-semibold">{seller}</h2>
              <p>{sellerMail}</p>
              <p>{sellerPhone}</p>
              <p>{sellerAddress}</p>
            </div>
           </div>
          { _id &&    <button onClick={contactWithSellerHandler} className="btn-custom mt-5 flex justify-center" disabled={(user?.email === sellerMail || singleUser?.role ==='admin')?true : false}>Contact with seller</button> }
          </div>
      </div>

      






    </div>
        </div>
    );
};

export default OldBookDetails;