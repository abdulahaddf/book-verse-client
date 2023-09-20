import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Cod = () => {

    const {darkMode}=useContext(AuthContext)

    return (
        <div className={darkMode?"h-[70vh] w-11/12 md:w-1/2 mx-auto  md:p-10 text-center my-10 space-y-4 border-[1px] bg-gray ":"h-[70vh] w-11/12 md:w-1/2 mx-auto  md:p-10 text-center my-10 space-y-4 border-2 border-red shadow-2xl"}>
            <img className="w-32 mx-auto" src="https://i.ibb.co/PYJ6bm1/paid.png" alt="" />
            <h1 className="text-2xl md:text-4xl">Congratulations! You&apos;ve placed the order</h1>
            <h1 className="text-3xl">Your Order is In Progress <span className="loading loading-dots loading-md"></span></h1>
            {/* <h2 className="text-2xl">Please wait for the fastest Delivery</h2> */}
            <p className="text-3xl"><Link className="text-red hover:no-underline " to="/dashboard/purchasedBooks">Click here</Link> To Truck Your Order</p>
            <h3 className="text-xl">Thanks For Being With Us</h3>
        </div>
    );
};

export default Cod;