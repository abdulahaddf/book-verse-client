import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";

const SSLPaymentSuccess = () => {
  const { cartRefetch, darkMode } = useContext(AuthContext);
  const { getValue } = useLocalStorage();

  const books = getValue("cartItems", []);

  console.log(books);

  if (!books) {
    return;
  }

  // Post bestSelling && recentSelling  start by Tonmoy

  const array = [];

  for (let i of books) {
    const a = {
      about_author: i?.about_author,
      author: i?.author,
      author_image: i?.author_image,
      category: i?.category,
      count: i?.count || 1,
      cover_image: i?.cover_image,
      description: i?.description,
      language: i?.language,
      offer_price: i?.offer_price,
      page_numbers: i?.page_numbers,
      published: i?.published,
      rating: i?.rating,
      real_price: i?.real_price,
      review: i?.review,
      title: i?.title,
      previous_id: i?._id,
      purchase_date: new Date().getTime(),
    };

    array.push(a);

    console.log(i);
  }

  console.log(array);

  if (array) {
    for (let a of array) {
      fetch(
        "https://book-verse-server-phi.vercel.app/bestSellingAndRecentSelling",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(a),
        }
      );
    }
  }

  localStorage.removeItem("cartItems");
  cartRefetch();

  // Post bestSelling && recentSelling  end by Tonmoy

  return (
    <div className="my-[150px]">
      <div
        className={
          darkMode
            ? " text-center w-[50%] mx-auto  bg-gray p-[20px] border-[1px] rounded-[30px] "
            : " text-center w-[50%] mx-auto  bg-gray-800 p-[20px] rounded-[30px] "
        }
        style={{ boxShadow: "10px 10px 10px black" }}
      >
        <h2 className="text-[35px] font-[500] text-white mt-[20px]">
          {" "}
          Your payment successfully done{" "}
        </h2>

        <div className="  flex justify-center">
          <Link
            className={
              darkMode
                ? "btn-fifth-dark w-[40%] mt-[50px] mb-[20px] hover:no-underline"
                : "p-[10px] rounded-md  uppercase border-none text-white hover:text-white  bg-gradient-to-r from-cyan-500 to-blue-500  text-center w-[40%] hover:no-underline font-[500] text-[16px]  mt-[50px] mb-[20px]"
            }
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SSLPaymentSuccess;
