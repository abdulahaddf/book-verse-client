import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import useLocalStorage from "../../hooks/useLocalStorage";


const StripePayment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    const { getValue } = useLocalStorage();

    const totalPrice = localStorage.getItem('totalPrice');

    const price = JSON.parse(totalPrice)

    const books = getValue("cartItems", []);

    console.log(price)

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut price={price} books={books}></CheckOut>
            </Elements>
        </div>
    );
};

export default StripePayment;