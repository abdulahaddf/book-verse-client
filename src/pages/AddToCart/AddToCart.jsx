import { useContext } from "react";
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
    cartRefetch();
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

  const dispatch = useDispatch();

  const sendDataToPayment = () => {
    const cartData = {
      addToCartData: addToCartData, // Assuming addToCartData is already available here
      finalAmount: finalAmount, // Assuming finalAmount is already calculated
    };

    dispatch(setCartData(cartData));
    // history.push('/payment');
  };

  return (
    <div>
      <h1 className="page-heading">My Cart</h1>
      {addToCartData[0] ? (
        <div className=" w-4/5 mx-auto  lg:flex md:gap-10 lg:gap-20">
          <section className="md:w-2/3">
            {addToCartData?.map((data) => (
              <div
                key={data?._id}
                className=" grid lg:grid-cols-3  md:gap-10 p-3 my-10 "
                style={{ boxShadow: "10px 10px 10px black" }}
              >
                <div className=" md:w-1/2 mx-auto flex justify-center items-center ">
                  <img src={data?.cover_image} className="" />
                </div>

                <div className="space-y-2 ">
                  <p className=" mt-5 ">
                    <span className="font-semibold">Name: </span> {data?.title}{" "}
                  </p>
                  <p className="  ">
                    <span className="font-semibold">Author: </span>{" "}
                    {data?.author}
                  </p>

                  <div>
                    <div className="flex items-center justify-center border border-gray-200 rounded w-1/2 md:mt-5 text-center ">
                      <button
                        onClick={() => decrementHandler(data?._id)}
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 hover:bg-slate-300 px-3 transition hover:opacity-75 tooltip tooltip-bottom"
                        data-tip="Decrease Item"
                      >
                        -
                      </button>

                      <input
                        type="text"
                        // id="Quantity"
                        value={data?.count || 1}
                        className="h-10  no-underline text-center  sm:text-sm "
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
                    {" "}
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
            className=" bg-gray-900 text-white my-10 py-10 px-5 md:my-[100px] space-y-5 rounded-[10px] 
             h-[350px]  md:w-1/3 text-center sticky top-0"
            style={{ boxShadow: "10px 10px 10px black" }}
          >
            <p className=" text-xl  ">
              Your Total: $ <span className="">{totalPrice}</span>{" "}
            </p>
            <p className=" text-xl  ">
              Delivery charge: $ <span className="">5</span>{" "}
            </p>
            <p className=" text-xl  ">
              Tax: <span className="">5%</span>{" "}
            </p>
            <p className=" text-xl  ">
              Final Amount: $ <span className="">{finalAmount}</span>{" "}
            </p>
            <Link
              to="/payment"
              // state={{ price: finalAmount , books : addToCartData  }}
              onClick={sendDataToPayment}
              className=" btn-primary w-full md:w-[150px] lg:w-[200px] text-xl font-[500]"
            >
              Buy Now
            </Link>
          </section>
        </div>
      ) : (
        <section className="md:w-4/6 mx-auto">
          <h1 className="text-3xl text-center mt-5">Add your Desired Books in Cart</h1>
          <img
            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
            alt=""
          />
        </section>
      )}
    </div>
  );
};

export default AddToCart;
