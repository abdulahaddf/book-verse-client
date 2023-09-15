/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import "./checkOut.css";
import Swal from "sweetalert2";
import { ImSpinner10 } from "react-icons/im";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/UseAxiousSecure";
import useLocalStorage from "../../hooks/useLocalStorage";

const CheckOut = ({ books, price }) => {
  // console.log(price, books);
  const stripe = useStripe();
  const elements = useElements();
  const { user, cartRefetch } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paid, setPaid] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { getValue } = useLocalStorage();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const customer = getValue("customer") // getting the customer information from the checkout form 
  // console.log(customer);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }
    setTransactionId(paymentIntent.id);
    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      
      const paymentInfo = {
        books: [...books],
        transactionId: paymentIntent.id,
        mail: user?.email,
        date: new Date(),
        total_price: price,
        status : "Paid",
        customer,
      };
      axiosSecure.post("/payments", paymentInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          setProcessing(false);

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

          // Post bestSelling && recentSelling  end by Tonmoy

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Booking Successful!, TransactionId: ${paymentIntent.id}`,
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.removeItem("cartItems");
          localStorage.removeItem("totalPrice");
          setPaid(true);
          cartRefetch();
        }
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      {paid ? (
        <div className="md:my-40">
          <h1 className="text-3xl text-center mt-10">
            Congratulations!! You have Paid For All Your Books{" "}
          </h1>
          <h3 className="text-xl text-center my-5">
            Your Transaction Id :{" "}
            <span className="text-red">{transactionId}</span>
          </h3>
          <h2 className="text-2xl text-center mt-5">
            Please wait for the fastest delivery
          </h2>
        </div>
      ) : (
        <>
          <form
            className="w-1/2 p-20 mt-20 mx-auto text-white border-double border-4 border-red bg-black"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center">Hello, {user?.displayName} </h1>
            <h1 className="text-3xl text-center my-10">
              You Need to Pay{" "}
              <span className="font-semibold text-red">${price}</span> for{" "}
              <span className="font-semibold text-red">{books.length}</span>{" "}
              Books
            </h1>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button
              type="submit"
              // disabled={!stripe || !clientSecret || processing}
              className="inline-flex justify-center rounded-md border border-transparent bg-red px-4 py-2 text-sm font-medium text-white hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              {processing ? (
                <ImSpinner10 className="m-auto animate-spin" size={24} />
              ) : (
                `Pay ${price}$`
              )}
            </button>
            <div>
              {cardError && <p className="text-red-600 ">{cardError}</p>}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckOut;
