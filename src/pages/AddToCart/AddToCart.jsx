import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../../shared/navbar/Navbar";
import { MdDeleteForever } from "react-icons/md";
import useLocalStorage from "../../hooks/useLocalStorage";
import Swal from "sweetalert2";
import Footer from "../../shared/footer/Footer";

const AddToCart = () => {
  const { addToCartData, cartRefetch } = useContext(AuthContext);
  const { getValue, setValue } = useLocalStorage();

  const deleteAddToCart = (id) => {
    const cartItems = getValue("cartItems", []);

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

  console.log(totalPrice);

  const tax = totalPrice * 0.05;

  const deliveryCharge = 5;

  console.log(tax);

  const amount = totalPrice + tax + deliveryCharge;

  const finalAmount = parseFloat(amount);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-4xl  borer border-b-2 border-red w-fit mx-auto pb-2">
        My Cart
      </h1>
      <div className=" w-4/5 mx-auto  lg:flex gap-20">
        <section>
          {addToCartData?.map((data) => (
            <div
              key={data?._id}
              className=" grid lg:grid-cols-3  md:gap-10 p-3 my-20 "
              style={{ boxShadow: "10px 10px 10px black" }}
            >
              <div className=" md:w-1/2 mx-auto flex justify-center items-center ">
                <img src={data?.cover_image} className="" />
              </div>

              <div className="space-y-2">
                <p className=" mt-5 ">
                  <span className="font-semibold">Name: </span> {data?.title}{" "}
                </p>
                <p className="  ">
                  <span className="font-semibold">Author: </span> {data?.author}
                </p>

                <div>
                  <div className="flex items-center justify-center border border-gray-200 rounded w-1/2 md:mt-10 text-center px-14">
                    <button
                      onClick={() => decrementHandler(data?._id)}
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      value={data?.count || 1}
                      className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <button
                      onClick={() => incrementHandler(data?._id)}
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
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
                <div className="">
                  <button onClick={() => deleteAddToCart(data?._id)}>
                    <MdDeleteForever className=" text-4xl mt-10  text-red hover:text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {addToCartData[0] ? (
          <section
            className=" text-center bg-gray-900 py-20 px-10 my-[100px] space-y-10 rounded-[10px] 
            
            
            h-[600px]  "
            style={{ boxShadow: "10px 10px 10px black" }}
          >
            <p className=" text-[30px] text-center text-white">
              Your Total: $ <span className="">{totalPrice}</span>{" "}
            </p>
            <p className=" text-[25px] text-center text-white">
              Delivery charge: $ <span className="">5</span>{" "}
            </p>
            <p className=" text-[25px] text-center text-white">
              Tax: <span className="">5%</span>{" "}
            </p>
            <p className=" text-[35px] text-center text-white">
              Final Amount: $ <span className="">{finalAmount}</span>{" "}
            </p>

            <button className=" btn-primary w-[200px] md:w-[250px] lg:w-[200px] text-xl font-[500]">
              Buy Now
            </button>
          </section>
        ) : (
          <section>
            <img
              src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
              alt=""
            />
          </section>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddToCart;
