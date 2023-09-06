// import { useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";


const Payment = () => {
  // const { addToCartData: books, finalAmount: price } = useSelector(
  //   (state) => state.cart
  // );
  // console.log(addToCartData, finalAmount);


  //sslCommerce start by Tonmoy
  const { user,  } = useContext(AuthContext);
  const { getValue } = useLocalStorage();

     const totalPrice= localStorage.getItem('totalPrice');

     const price= JSON.parse(totalPrice)

    const books = getValue("cartItems", []);

  const sslCommerce = () => {

    // const info = { books: [...books], price, name: user?.displayName, email: user?.email, date: new Date(), }

    const info = { books: [...books], price, name: user?.displayName, email: user?.email, date: new Date(), }

    fetch('https://book-verse-server-phi.vercel.app/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)

        window.location.replace(res?.url)
      })
      .catch(error => console.log(error))

  }


  // sslCommerce end by  Tonmoy

  return (
    <div className="my-5">
      <h1 className="page-heading">Checkout</h1>
      <h2 className="text-center text-2xl font-serif my-2">You need to pay : {totalPrice}</h2>

      <div className="flex   w-11/12  mx-auto justify-center items-center py-10">
        <div >
          <Link className="" to="/stripePayment" >

            <img className="w-[250px] mx-auto  border-[5px] rounded-[10px]" src="https://download.logo.wine/logo/Stripe_(company)/Stripe_(company)-Logo.wine.png" alt="" />
          </Link >
        </div>

        <div >
          <button className="" onClick={sslCommerce} >
            <img className="w-[600px] mx-auto  border-[5px] p-2 rounded-[10px]" src="https://i.ibb.co/Lhwv66n/SSLCommerz-01.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
