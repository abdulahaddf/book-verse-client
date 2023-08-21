
/* eslint-disable react/no-unescaped-entities */

import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import useLocalStorage from "../../../hooks/useLocalStorage";

const BookDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    about_author,
  } = singleBookDetails;

  const [activeTab, setActiveTab] = useState("description");
  const { cartRefetch } = useContext(AuthContext);
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
  return (
    <div>
      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={cover_image}
            className=" w-[300px] h-[350px] rounded-lg shadow-2xl"
          />
          <div className="ms-3">
            <h1 className="text-5xl font-bold">{title}</h1>

            <p className="mt-1">
              <span className="font-semibold">Price:</span> ${real_price}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Rating:</span> {rating}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Total Page:</span> {page_numbers}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Language:</span> {language}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Published:</span> {published}
            </p>

            <div className="flex justify-center items-center mt-6">
              <button
                className="btn-primary w-[200px] mr-6 "
                onClick={() => window.my_modal_5.showModal()}
              >
                Rent Now
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">
                    Are you sure? Please read terms and conditions.
                  </h3>
                  <p className="py-4 font-bold">
                    Book Rental Terms and Conditions
                  </p>
                  <p>
                    By renting books from us, you agree to the following simple
                    terms: <br />
                    1. Renting Books: When you rent a book, you're entering into
                    an agreement with us. This agreement is based on the rules
                    below.
                    <br />
                    2. How Long You Can Keep the Book: You can enjoy the book
                    from the day you get it until the due date we told you. If
                    you need more time, let us know. We might be able to extend
                    your rental period for a small fee. <br />
                    3. What You Pay: You'll pay the rental fee we agreed upon
                    when you booked the book. If you bring it back late, there
                    might be extra charges. <br />
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
                      className="btn-primary w-[250px]"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                    <button className="btn btn-primary">Close</button>
                  </div>
                </form>
              </dialog>
              <button className="btn-primary w-[200px]" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs mt-6 mx-auto w-1/2">
        <button
          className={`tab tab-lifted ${
            activeTab === "description" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("description")}
        >
          Description
        </button>
        <button
          className={`tab tab-lifted ${
            activeTab === "price" ? "tab-active" : ""
          }`}
          onClick={() => handleTabChange("price")}
        >
          Author
        </button>
      </div>

      <div className="tab-content mt-3 mx-auto w-1/2 mb-20">
        {activeTab === "description" && (
          <div>
            {/* <h2>Description</h2> */}
            <p>{description}</p>
          </div>
        )}
        {activeTab === "price" && (
          <div className="flex">
            <img
              className="w-[250px] h-[250px] rounded-lg shadow-2xl"
              src={author_image}
              alt=""
            />

            <div className="ml-10">
              <h2 className="font-semibold">{author}</h2>
              <p>{about_author}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default BookDetails;
