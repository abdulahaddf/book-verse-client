// import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Payment = () => {
  const { addToCartData: books, finalAmount: price } = useSelector(
    (state) => state.cart
  );
  // console.log(addToCartData, finalAmount);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div className="my-10">
      <h1 className="page-heading">Payment System</h1>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOut price={price} books={books}></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
