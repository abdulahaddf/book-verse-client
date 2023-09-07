import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import useLocalStorage from "../../hooks/useLocalStorage";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCartData } from "../payment/redux/CartSlice";

const AddToCart = () => {
  const { addToCartData, cartRefetch } = useContext(AuthContext);
  const { getValue, setValue } = useLocalStorage();
  // console.log(addToCartData);
  const [promo, setPromo] = useState([]);
  const [appliedPromo, setAppliedPromo] = useState("");
  const [payable, setPayable] = useState("");
  const [promoUpdate, setUpdate] = useState("");
  console.log(promo);
  useEffect(() => {
    fetch("https://book-verse-server-phi.vercel.app/promo")
      .then((response) => response.json())
      .then((data) => setPromo(data));
  }, [addToCartData]);

  const deleteAddToCart = (id) => {
    const cartItems = getValue("cartItems", []);
    // console.log(cartItems)

    const filterCart = cartItems.filter((res) => res?._id !== id);

    const updatedCart = [...filterCart];
    setValue("cartItems", updatedCart);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "The item deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    cartRefetch();
  };

  const incrementHandler = (id) => {
    const cartItems = getValue("cartItems", []);

    const updatedCart = cartItems.map((data) => {
      if (data._id === id) {
        data.count = data?.count + 1 || 2;

        data.real_price2 = data?.real_price2 + data?.real_price;
      }

      return data;
    });

    setValue("cartItems", updatedCart);
    cartRefetch();
  };

  const decrementHandler = (id) => {
    const cartItems = getValue("cartItems", []);

    const updatedCart = cartItems.map((data) => {
      if (data._id === id) {
        if (data?.count === 1) {
          return setValue("cartItems", updatedCart);
        }

        data.count = data?.count - 1 || 1;

        data.real_price2 = data?.real_price2 - data?.real_price;
      }

      return data;
    });

    setValue("cartItems", updatedCart);
    // cartRefetch();
  };

  let totalPrice = 0;

  for (let i of addToCartData) {
    totalPrice += i?.real_price2;
  }

  // console.log(totalPrice);

  const tax = totalPrice * 0.05;

  const deliveryCharge = 5;

  // console.log(tax);

  const amount = totalPrice + tax + deliveryCharge;

  const finalAmount = parseFloat(amount);
  // console.log(cartItems);
  {
    payable
      ? ""
      : localStorage.setItem("totalPrice", JSON.stringify(finalAmount));
  }
  // localStorage.setItem("totalPrice", JSON.stringify(finalAmount));

  const dispatch = useDispatch();

  const sendDataToPayment = () => {
    const cartData = {
      addToCartData: addToCartData, // Assuming addToCartData is already available here
      finalAmount: payable, // Assuming finalAmount is already calculated
    };

    dispatch(setCartData(cartData));
    // history.push('/payment');
  };

  //adding promo code functions - AHAD
  const setPayableWithLocalStorage = (newPayable) => {
    setPayable(newPayable);
    localStorage.setItem("totalPrice", JSON.stringify(newPayable));
  };
  const applyPromoCode = () => {
    const matchingPromo = promo.find((p) => p.promo === appliedPromo);

    if (matchingPromo) {
      const discountPercentage = parseFloat(matchingPromo.discount);
      const discountedAmount = (discountPercentage / 100) * finalAmount;
      const newFinalAmount = finalAmount - discountedAmount;

      // Update the payable state and store it in localStorage as "totalPrice"
      setPayableWithLocalStorage(newFinalAmount);
      setUpdate("The Price is reduced by $ " + discountedAmount);
      return newFinalAmount;
    } else {
      setUpdate("The Promo Code is not valid");
      // Promo code not found
      return finalAmount;
    }
  };
  // console.log(localStorage.getValue());
  return (
    <div>
      <h1 className="page-heading">My Cart</h1>
      {addToCartData[0] ? (
        <div className=" w-4/5 mx-auto lg:flex md:gap-10 lg:gap-20">
          <section className="md:w-2/3 ">
            {addToCartData?.map((data) => (
              <div
                key={data?._id}
                className=" grid lg:grid-cols-3  md:gap-10 p-3 my-10 shadow-md rounded-md"
                // style={{ boxShadow: "10px 10px 10px black" }}
              >
                <div className=" md:w-1/2 mx-auto flex justify-center items-center ">
                  <img src={data?.cover_image} className="" />
                </div>

                <div className="space-y-3">
                  <p className=" my-5 ">
                    <span className="font-semibold">Name: </span> {data?.title}{" "}
                  </p>
                  <p className="  ">
                    <span className="font-semibold">Author: </span>{" "}
                    {data?.author}
                  </p>

                  <div>
                    <div className="flex items-center justify-center border border-gray-200 rounded w-1/2 md:mt-10 text-center ">
                      <button
                        onClick={() => decrementHandler(data?._id)}
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 hover:bg-slate-300 px-3 transition hover:opacity-75 tooltip tooltip-bottom"
                        data-tip="Decrease Item"
                      >
                        -
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={data?.count || 1}
                        className="h-10 w-6 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <button
                        onClick={() => incrementHandler(data?._id)}
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 hover:bg-slate-300 px-3 transition hover:opacity-75 tooltip tooltip-bottom"
                        data-tip="Increase Item"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" my-10 text-center">
                  <p className=" text-[20px]">
                    Amount: $ <span>{data?.real_price2}</span>{" "}
                  </p>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="Delete from Cart"
                  >
                    <button onClick={() => deleteAddToCart(data?._id)}>
                      <MdDeleteForever className=" text-4xl mt-10  text-red hover:text-blue-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section
            className="text-slate-900 font-semibold my-10 py-10 px-5  space-y-5  rounded-[10px] 
             h-[450px]  md:w-1/3  sticky top-0 shadow-2xl"
          >
            <p className=" text-xl flex justify-between border-b-2">
              Subtotal:{" "}
              <span className="font-normal">
                {" "}
                $ {totalPrice} ({addToCartData.length} items)
              </span>{" "}
            </p>
            <p className=" text-xl flex justify-between border-b-2">
              Shipping Fee: <span className="font-normal">$ 5</span>{" "}
            </p>
            <p className=" text-xl flex justify-between border-b-2 ">
              Tax: <span className="font-normal">5%</span>{" "}
            </p>
            <p className=" text-xl flex justify-between border-b-2">
              Total: <span className="font-normal">${finalAmount}</span>{" "}
            </p>
            <div className="flex items-center gap-3 justify-center">
              {" "}
              <input
                type="text"
                placeholder="Enter Promo Code"
                value={appliedPromo}
                onChange={(e) => setAppliedPromo(e.target.value)}
                className="input input-bordered border-primary rounded-none input-sm w-full max-w-[150px]"
              />
              <button
                onClick={() => {
                  applyPromoCode();
                  // Update the state or perform any other actions if needed
                }}
                className="btn btn-sm text-black bg-white hover:text-white border-red hover:border-b-white
     hover:bg-red px-5 border-b-4 hover:scale-105 duration-300 rounded-none"
              >
                Apply
              </button>
            </div>
            <p className="text-center font-thin text-slate-600">
              {promoUpdate}
            </p>
            {/* TODO _________ change the final amount by fetching the dis count */}
            <p className=" text-xl flex justify-between border-b-2">
              Payable Total:{" "}
              <span className="font-normal">
                $ {payable ? payable : finalAmount}{" "}
              </span>{" "}
            </p>
            <div className="text-center">

            <Link
              to="/payment"
              // state={{ price: finalAmount , books : addToCartData  }}
              onClick={sendDataToPayment}
              className=" btn-fifth w-full md:w-[150px] lg:w-[250px]  mx-auto">
              Proceed to Checkout
            </Link>
                </div>
          </section>
        </div>
      ) : (
        <section className="flex justify-center items-center w-full  h-[80vh] ">
          <img
            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
            alt=""
            className="h-96 "
          />
        </section>
      )}
    </div>
  );
};

export default AddToCart;
