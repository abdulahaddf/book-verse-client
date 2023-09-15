/* eslint-disable no-unused-vars */
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import UseUser from "../../hooks/UseUser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [submitText, setSubmitText] = useState("Please Submit all information then pay");
  const { user,darkMode } = useContext(AuthContext);
  const [userinfo, isLoading] = UseUser();
  const { getValue } = useLocalStorage();
  const totalPrice = localStorage.getItem("totalPrice");
  const price = JSON.parse(totalPrice);
  const books = getValue("cartItems", []);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customer = getValue("customer"); // getting the customer information from the checkout form

  //sslCommerce start by Tonmoy
  const sslCommerce = () => {
    const info = {
      books: [...books],
      price,
      name: user?.displayName,
      email: user?.email,
      date: new Date(),
      customer, //add it to server tonmoy vai----------------------------------------------
    };
    fetch("https://book-verse-server-phi.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        window.location.replace(res?.url);
      })
      .catch((error) => console.log(error));
  };

  // sslCommerce end by  Tonmoy

  // COD by AHAD
  const cod = () => {
    const info = {
      books: [...books],
      price,
      name: user?.displayName,
      mail: user?.email,
      date: new Date(),
      status: "Cash On Delivery",
      customer,
    };
    fetch("https://book-verse-server-phi.vercel.app/payments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Order Successfully Placed!",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalPrice");
        navigate("/cash-on-delivery");
      })
      .catch((error) => console.log(error));
  };

  //Checkout by AHAD----------------------------------------------------------------
  const updateProfile = (data) => {
    console.log(data);

    const { name, address, receive, phoneNumber } = data;
    const profile = {
      receive: receive,
      displayName: name,
      address: address,
      phoneNumber: phoneNumber,
    };
    setSubmitText("All Information Submitted !");
    localStorage.setItem("customer", JSON.stringify(profile));
    setButtonDisabled(false);
  };


  return (
    <div className="my-5">
      <h1 className="page-heading">Checkout</h1>
      <h2 className="text-center text-2xl font-sans my-2">
        You need to pay : {totalPrice}
      </h2>
      <div className="w-11/12 mx-auto my-5 md:flex gap-10">
        {/* Checkout form starts here */}

      <div className={darkMode?" bg-slate-200 w-11/12 md:w-1/3 mx-auto my-5 p-3 md:p-8 rounded shadow-xl border-t-2 border-red py-20":" bg-slate-200 w-11/12 md:w-1/3 mx-auto my-5 p-3 md:p-8 rounded shadow-xl border-t-2 border-red py-20"}>
     
   
              <h1 className="text-2xl font-semibold text-center text-red uppercase">
              Shipping Information
              </h1>
              <form onSubmit={handleSubmit(updateProfile)} className="mt-6">
              <div className=" flex items-center gap-5">
  <label
    className="block text-sm font-semibold text-gray-800"
  >
    Pick Up Your Parcel From:
  </label>
  <div className=" space-x-4">
    <label className="inline-flex items-center text-lg">
      <input
        type="radio"
        {...register("receive", { required: true })}
        value="home"
        className="radio text-red focus:ring-red focus:ring-opacity-40"
      />
      <span className="ml-2 text-gray-600">Home</span>
    </label>
    <label className="inline-flex items-center text-lg">
      <input
        type="radio"
        {...register("receive")}
        value="office"
        className="radio text-red focus:ring-red focus:ring-opacity-40"
      />
      <span className="ml-2 text-gray-600">Office</span>
    </label>
  </div>
</div>
{errors.receive && <span className="error font-light text-xs">Pick up information is required</span>}

            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={userinfo?.displayName}
                {...register("name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.name && (
              <span className="error font-light text-xs">
                Please fill your Name
              </span>
            )}
            <div className="mb-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                defaultValue={userinfo?.phoneNumber}
                {...register("phoneNumber")}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.phoneNumber && (
              <span className="error font-light text-xs">
                Please Enter your Phone Number
              </span>
            )}

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={userinfo?.email}
                {...register("email", { disabled: true })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-800"
              >
                Delivery Address
              </label>
              <input
                type="text"
                id="address"
                defaultValue={userinfo?.address}
                {...register("address", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.address && (
              <span className="error font-light text-xs">
                Please give Delivery address
              </span>
            )}

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red"
                  >
                    Submit
                  </button>
                  <p className="text-center my-3 text-gray-600">{submitText}</p>
                </div>
              </form>
            
      
    </div>


        {/* Checkout form ends here */}

        <div className="w-1/2 mx-auto my-5  bg-slate-200 py-10 rounded-lg ">
          {/* Payment method selection */}
          <div className="flex flex-col items-center justify-center gap-10  ">
            <h1 className="text-xl my-3">Payment Method</h1>

            {/* Radio button for SSLCommerz payment */}
            <label className="flex items-center text-lg bg-white w-11/12 p-2 rounded-lg ">
              <input
                type="radio"
                value="sslCommerz"
                checked={selectedPaymentMethod === "sslCommerz"}
                onChange={() => setSelectedPaymentMethod("sslCommerz")}
                className="radio text-red focus:ring-red focus:ring-opacity-40"
              />
              <span className="ml-2">
                <img
                  className=" rounded-[10px]"
                  src="https://i.ibb.co/Lhwv66n/SSLCommerz-01.png"
                  alt=""
                />
              </span>
            </label>

            {/* Radio button for Stripe payment */}
            <label className="flex items-center text-lg bg-white w-11/12 p-2 rounded-lg">
              <input
                type="radio"
                value="stripe"
                checked={selectedPaymentMethod === "stripe"}
                onChange={() => setSelectedPaymentMethod("stripe")}
                className="radio text-2xl  text-red focus:ring-red focus:ring-opacity-40"
              />
              <span className="w-96 mx-auto ">
                <img
                  className="h-32 mx-auto border-[5px] rounded-[10px]"
                  src="https://i.ibb.co/Gt49fxP/stripe-badge-transparent.png"
                  alt=""
                />
              </span>
            </label>
            {/* Radio button for COD payment */}
            <label className="flex items-center text-lg bg-white w-11/12 p-2 rounded-lg ">
              <input
                type="radio"
                value="cod"
                checked={selectedPaymentMethod === "cod"}
                onChange={() => setSelectedPaymentMethod("cod")}
                className="radio text-red focus:ring-red focus:ring-opacity-40"
              />
              <span className="w-4/5 mx-auto ml-2">
                <img
                  className="h-32 mx-auto rounded-[10px]"
                  src="https://i.ibb.co/RpP1krV/cod-transformed-removebg-preview.png"
                  alt=""
                />
              </span>
            </label>
          </div>

          {/* Pay Now button */}
          <div className="text-center w-fit mx-auto mt-10">
            <button
              onClick={() => {
                // Handle payment selection and redirection here
                if (selectedPaymentMethod === "stripe") {
                  navigate("/stripePayment");
                } else if (selectedPaymentMethod === "cod") {
                  cod();
                  navigate("/cash-on-delivery");
                } else if (selectedPaymentMethod === "sslCommerz") {
                  // Call the function for SSLCommerz payment
                  sslCommerce();
                }
              }}
              className={`btn  ${
                buttonDisabled
                  ? "disabled px-10 py-1 text-slate-900 hover:text-slate-400"
                  : "btn-card bg-red hover:text-white"
              }`}
              disabled={buttonDisabled}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
