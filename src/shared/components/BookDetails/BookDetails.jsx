/* eslint-disable react/no-unescaped-entities */

import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import useLocalStorage from "../../../hooks/useLocalStorage";
// import { Rating } from "@smastrom/react-rating";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import UseBooks from "../../../hooks/UseBooks";
import RecommendedCard from "./RecommendedCard";
import Loader from "../loader/Loader";
import './BookDetails.css'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const BookDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { books, loading } = UseBooks();
  const singleBookDetails = useLoaderData();
  console.log(singleBookDetails);
  const {
    title,
    cover_image,
    author,
    
    page_numbers,
    category,
    published,
    language,
    description,
    real_price,
    offer_price,
    author_image,
    about_author,
    review,
  } = singleBookDetails;

  const saved = real_price - offer_price;
  const savedPer = (((real_price - offer_price) / real_price) * 100).toFixed(2);

  const [activeTab, setActiveTab] = useState("description");
  const { cartRefetch,darkMode } = useContext(AuthContext);
  const { getValue, setValue } = useLocalStorage();
  const [agree, setAgree] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // add to cart by Tonmoy

  const handleAddToCart = () => {
    const cartItems = getValue("cartItems", []);

    if (cartItems) {
      const find = cartItems.find((a) => a?._id === singleBookDetails?._id);

      if (find) {
        return Swal.fire({
          title: "The book is already added to the cart",

          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
    singleBookDetails.real_price2 = singleBookDetails?.real_price;
    const updatedCart = [...cartItems, singleBookDetails];
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

  //   add to cart end


  // tonmoy start 

   

    const allRating= singleBookDetails?.review?.map((a)=> a?.rating) 

    const sumOfRating= allRating?.reduce((a,b)=> a+b ,0)

    const rating= sumOfRating / singleBookDetails?.review?.length;

    const realRating=parseFloat(rating).toFixed(2)

   


    const Star = (
      <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
    )
    
    const myStyles = {
      itemShapes: Star,
      

      
    
      activeFillColor: '#10aade',
    
    
      inactiveFillColor: '#10abde3a',
     
   
    }

   
  
  

  

  const linkName = readMore ? "Read Less << " : "...Read More >> ";

  const extraContent = (
    <div>
      <p>
        4. Taking Care of the Book: Please treat the book kindly. Keep it safe
        from spills, damage, and writing. We want it back in the same condition
        you got it. <br />
        5. Returning the Book Late: If the book is late, you might have to pay a
        late fee. Let's try to avoid that by returning it on time!
        <br />
        6. Extending Your Rental: If you want to keep the book longer, ask us
        before the due date. We'll see if we can help you extend your rental
        time.
        <br />
        7. If You Lose the Book: If the book goes missing, you'll have to cover
        the cost of replacing it. Let's keep track of it together!
        <br />
        8. Changing Your Mind: If you decide you don't want the book after all,
        there might be a small fee if you cancel before the rental period
        starts. But once it begins, we can't cancel.
        <br />
        9. Keeping Your Info Safe: We'll take care of your personal info. You
        can read how we handle it in our privacy policy.
        <br />
        10. Our Responsibility: We're here to give you great books, but we're
        not responsible for any problems the books might cause or any losses you
        might have.
        <br />
        11. Where the Law Applies: If there's a disagreement, the laws of
        [Jurisdiction] will apply, and we'll work it out in the courts there.
        <br />
        12. Changes to These Terms: We might update these terms, but we'll let
        you know. The new terms will start when we post them.
      </p>
    </div>
  );
  if (loading) return <Loader />;
  return (
    <div className="w-11/12 mx-auto">
      <div className="lg:flex justify-center gap-8 my-10">
        <div className={darkMode?" md:w-4/6 bg-white/10  border-[1px] rounded-md p-5":" md:w-4/6 shadow-md p-5"}>
          <div className="md:flex justify-center gap-10 items-start ">
           <div className={darkMode?"bg-slate-300 box rounded-md min-w-[244px]":"bg-slate-300 box min-w-[244px]"}>
            {darkMode? <img
              src={cover_image}
              className="max-h-96 rounded-md min-h-[383px] w-full  shadow-2xl imgBox"
            />: <img
            src={cover_image}
            className="max-h-96 min-h-[383px] w-full  shadow-2xl imgBox"
          />}
           </div>
            <div className="ms-3 space-y-3">
              <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
              <h2>
                by <span className="text-md font-medium">{author}</span>{" "}
              </h2>
              <p className="text-3xl">
                <span className="line-through mr-3 text-slate-500">
                  $ {real_price}
                </span>
                <span className="font-semibold ">${offer_price}</span>
                <span className="text-sm ml-3 text-slate-400">
                  You saved $ {saved} ({savedPer} %)
                </span>
              </p>
              {/* <p className="flex gap-2 items-center">
                <span className="font-semibold flex items-center gap-3">
                  Rating:{" "}
                </span>{" "}
                {rating} <FaStar />( {review ? <>{review?.length}</> : ""}{" "}
                reviews)
              </p> */}

              {/* Tonmoy start  */}
              <p className="flex gap-2 items-center">
                <span className="font-semibold flex items-center gap-3">
                  Rating:{" "}
                </span>{" "}
                <Rating readOnly value={realRating > 0 ? realRating : 1} style={{ maxWidth: 150}}  itemStyles={myStyles} />
                 
                
                ( {review ? <>{review?.length}</> : ""}{" "}
                reviews)
              </p>

              {/* Tonmoy end */}
              <p>
                <span className="font-semibold">Total Page:</span>{" "}
                {page_numbers}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Language:</span> {language}
              </p>
              <p>
                <span className="font-semibold">Published:</span> {published}
              </p>
              <p className="flex items-center gap-2 text-lg ">
                <FaCheckCircle className="text-green-600" />{" "}
                <span className="">In Stock</span>{" "}
              </p>

              <div className="flex justify-center items-center mt-6">
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle "
                >
                  <form method="dialog" className={darkMode?"modal-box bg-gray-200 border-[1px] text-black":"modal-box"}>
                    <h3 className="font-bold text-lg">
                      Are you sure? Please read terms and conditions.
                    </h3>
                    <p className="py-4 font-bold">
                      Book Rental Terms and Conditions
                    </p>
                    <p>
                      By renting books from us, you agree to the following
                      simple terms: <br />
                      1. Renting Books: When you rent a book, you're entering
                      into an agreement with us. This agreement is based on the
                      rules below.
                      <br />
                      2. How Long You Can Keep the Book: You can enjoy the book
                      from the day you get it until the due date we told you. If
                      you need more time, let us know. We might be able to
                      extend your rental period for a small fee. <br />
                      3. What You Pay: You'll pay the rental fee we agreed upon
                      when you booked the book. If you bring it back late, there
                      might be extra charges.  <br />
                    </p>
                    <a
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      <h2 className="font-bold">{linkName}</h2>
                    </a>
                    {readMore && extraContent}
                    <div>
                      <input
                        type="checkbox"
                        id="agree"
                        onChange={checkboxHandler}
                      />
                      <label htmlFor="agree">
                        {" "}
                        I agree to <b>terms and conditions</b>
                      </label>
                    </div>
                    <div className="modal-action">
                      <button
                        disabled={!agree}
                        className="btn-fifth w-[250px]"
                        onClick={handleAddToCart}
                      >
                        Add to Cart 
                      </button>
                      <button className="btn-primary">Close</button>
                    </div>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto md:flex justify-center gap-2">
            <button
              className={darkMode?"btn-fifth-dark md:mt-10":"btn-primary md:mt-10"}
              onClick={handleAddToCart}
            >
              Add to 
            </button>
            <button
              className={darkMode?"btn-fifth-dark mr-6 mt-5 md:mt-10":"btn-fifth mr-6 mt-5 md:mt-10"}
              onClick={() => window.my_modal_5.showModal()}
            >
              Rent Now
            </button>
          </div>
        </div>


        {/* Recommended Books Section -AHAD*/}


        <div className={darkMode?"border-[1px] px-5 bg-white/10  rounded-lg lg:w-1/4 my-10 lg:my-0":"shadow-lg py-2 px-5 rounded-lg lg:w-1/4 my-10 lg:my-0"}>
          <h1 className="text-xl text-center my-5">You may also like</h1>

          <div className="md:h-1/2">
            {books
              .filter((book) => book?.category === category)
              .slice(0, 3)
              .map((book) => (
                <RecommendedCard key={book._id} data={book} />
              ))}
          </div>
        </div>
      </div>

      <section className={darkMode?"md:mx-10 bg-white/10  rounded-md  border-b-[1px]  ":"md:mx-10 shadow-lg"}>
        <div className="tabs mt-6  text-center ">
          <button
            className={`tab tab-lifted ${activeTab === "description" ? "tab-active" : darkMode?"text-white":''
              }`}
            onClick={() => handleTabChange("description")}
          >
            Description
          </button>
          <button
            className={`tab tab-lifted ${activeTab === "price" ? "tab-active" : darkMode?"text-white":''
              }`}
            onClick={() => handleTabChange("price")}
          >
            Author
          </button>
        </div>

        <div className="tab-content mx-auto p-5   mb-20">
          {activeTab === "description" && (
            <div>
              <p>{description}</p>
            </div>
          )}
          {activeTab === "price" && (
            <div className="md:flex">
              <img
                className="w-48 md:w-[250px] md:h-[250px] rounded-lg shadow-2xl"
                src={author_image}
                alt=""
              />

              <div className="md:ml-10">
                <h2 className="font-semibold">{author}</h2>
                <p>{about_author}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Review Section---------------------------------------- */}
      <div className={darkMode?"my-10 bg-black/0  rounded-s-md p-10 md:mx-10 ":"my-10 shadow-lg md:mx-10 "}>
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="py-2">
          {review?.length > 0 ? (
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mx-auto max-w-screen-xl px-4  sm:px-6 py-2 md:py-10 lg:px-8">
              {" "}
              {review?.map((r) => (
                <div key={r.postDate}>
                  <div className={darkMode?"rounded-lg border-[1px]  bg-white/10  p-8":"rounded-lg bg-gray-100 p-8"}>
                    <div className="flex  gap-4">
                      <img
                        alt="Reviewer"
                        src={r.photo}
                        className="h-16 w-16 rounded-full object-cover"
                      />

                      <div className="">
                        <p className={darkMode?"mt-1 text-md font-medium text-white":"mt-1 text-md font-medium text-gray-800"}>
                          By - {r.name}{" "}
                        </p>

                        {r.postDate ? (
                          <span className={darkMode?"text-white":"text-gray-500"}>
                            {new Date(r.postDate).toISOString().split("T")[0]}
                          </span>
                        ) : (
                          ""
                        )}
                         {darkMode?  <><Rating value={r.rating} readOnly  itemStyles={myStyles} />
                        <p>Rating : {r.rating}</p></>
                        :<><Rating value={r.rating} readOnly   />
                        <p>Rating : {r.rating}</p></>
                       }
                     
                      </div>
                    </div>

                    <p className={darkMode?"line-clamp-2 sm:line-clamp-none mt-4 text-white":"line-clamp-2 sm:line-clamp-none mt-4 text-gray-500"}>
                      {r.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center my-10 flex justify-center items-center">
              No Reviews given yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
