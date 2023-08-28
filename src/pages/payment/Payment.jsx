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
  const { user } = useContext(AuthContext);
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
    <div className="my-10">
      <h1 className="page-heading">Payment System</h1>

      <div className="flex  gap-10 w-[50%] mx-auto justify-center py-[100px]">
        <div>
          <Link className="" to="/stripePayment" >

            <img className="w-[100px] h-[100px] border-[5px] rounded-[10px]" src="https://download.logo.wine/logo/Stripe_(company)/Stripe_(company)-Logo.wine.png" alt="" />
          </Link >
        </div>

        <div>
          <button className="" onClick={sslCommerce} >
            <img className="w-[100px] h-[100px] border-[5px] p-2 rounded-[10px]" src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/352511138_1446861699422076_8741241725393318128_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF66sraQ7E1JKXwb_GLwC61qIgfnad76oeoiB-dp3vqhy5DZ5cm73ehCk8ivIQfE-xBOYarSFT47fStRm12uj7o&_nc_ohc=b-V59alSj_wAX_pDj8e&_nc_ht=scontent.fdac31-1.fna&oh=00_AfBb_ZZ9CJD9nVXfSbtfbS3BQFqtCxPwWFRPdChWxLaW_w&oe=64EA5219" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
