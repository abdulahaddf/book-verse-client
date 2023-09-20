import { useRef, useState } from "react";
import usePaymentHistory from "../../hooks/usePayments";
import { TfiCrown } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


import Invoice from "./Invoice";
import 'jspdf-autotable';



// import { useForm } from "react-hook-form";

const ManageOrder = () => {
  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy end

  const handleForm = (event, id) => {
    event.preventDefault();
    console.log(id);
    const value = event.target.select.value;
    const data = {
      status: value,
    };
    console.log(data);
    fetch(`https://book-verse-server-phi.vercel.app/paymentStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data,id) => {
  //   console.log(data);
  //   console.log(id)
  // }

  const [payments, refetch] = usePaymentHistory();
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 10;
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  console.log(payments);



  



  // Tonmoy start 



  const invoiceHandler=(payment)=>{

    localStorage.setItem('invoice',JSON.stringify(payment))
  }

  //  Tonmoy end 2

  return (
    <div
      className={
        darkMode
          ? "w-full  px-10 p-5 min-h-full "
          : "w-full  px-10 p-5 min-h-full "
      }
    >
      <div className={darkMode ? "p-10  mt-10" : "p-10 mt-20 bg-slate-500 "}>
        <h2
          className={
            darkMode
              ? "text-center text-5xl text-white font-mono font-bold"
              : "text-center text-5xl text-[#91d6f6] font-mono font-bold"
          }
        >
          Track Orders
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full overflow-x-auto rounded-md shadow-xl">
          <table className="table table-zebra w-full text-center">
            <thead
              className={
                darkMode
                  ? " bg-gray  text-white text-start"
                  : "bg-slate-100 text-start"
              }
            >
              <tr>
                <th>No</th>
                <th>Email</th>
                {/* <th>User Id</th> */}
                <th>Order ID</th>
                <th>Time</th>
                <th>Amount</th>
                <th>
                  <TfiCrown className="inline text-amber-300" /> status
                </th>
                <th>Action</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody
              className={
                darkMode
                  ? "bg-black/90 divide-y divide-gray-200 "
                  : "bg-slate-100 divide-y divide-gray-200 "
              }
            >
              {payments
                .slice(0, showMore ? payments.length : initialDisplayCount)
                .map((payment, index) => (
                  <tr key={payment._id}>
                    <td className={darkMode ? "bg-black/80" : ""}>
                      {index + 1}
                    </td>
                    <td
                      className={
                        darkMode ? "text-start bg-black/80" : "text-start"
                      }
                    >
                      {payment.mail}
                    </td>
                    {/* <td>{payment._id}</td> */}
                    <td
                      className={
                        darkMode ? "bg-black/80 text-center" : "text-center"
                      }
                    >
                      {payment.transactionId
                        ? payment.transactionId
                        : "COD"}
                    </td>
                    <td className={darkMode ? "bg-black/80" : ""}>
                      {payment.date}
                    </td>
                    <td
                      className={
                        darkMode ? "bg-black/80 text-start" : "text-start"
                      }
                    >
                      {payment.total_price ? (
                        <>$ {payment.total_price}</>
                      ) : (
                        "COD"
                      )}{" "}
                    </td>
                    <td
                      className={
                        darkMode ? "bg-black/80 text-start" : "text-start"
                      }
                    >
                      <span
                        className={`${payment?.status ? "bg-green-400" : "bg-[#FF0000]"
                          } rounded text-white badge-sm `}
                      >
                        {payment?.status ? payment?.status : "Pending"}
                      </span>
                    </td>
                    <td className={darkMode ? "bg-black/80" : ""}>
                      <form className="flex" onSubmit={() => handleForm(event, payment?._id)}>
                        <select
                          className={
                            darkMode
                              ? "bg-black/0 border-[1px]  text-white"
                              : ""
                          }
                          name="select"
                          defaultValue={payment?.status}
                        >
                          <option
                            className={darkMode ? "bg-black/90 text-white" : ""}
                            value="Processing"
                          >
                            Processing
                          </option>
                          <option
                            className={darkMode ? "bg-black/90 text-white" : ""}
                            value="Shipped"
                          >
                            Shipped
                          </option>
                          <option
                            className={darkMode ? "bg-black/90 text-white" : ""}
                            value="In-Transit"
                          >
                            In Transit
                          </option>
                          <option
                            className={darkMode ? "bg-black/90 text-white" : ""}
                            value="Delivered"
                          >
                            Delivered
                          </option>
                        </select>
                        <button
                          className="btn btn-success btn-xs normal-case text-white mx-1"
                          type="submit"
                        >
                          update
                        </button>
                      </form>
                      
                    </td>

                    <td className={darkMode ? "bg-black/80" : ""}>
                      {/* Tonmoy Start */}
                     
                      <div onClick={()=> invoiceHandler(payment)}>

                        <Invoice  userInfo={payment} />

                      </div>
                      {/* Tonmoy End */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {payments.length > initialDisplayCount && (
            <div className="text-center mt-4">
              <button
                onClick={toggleShowMore}
                className={darkMode ? "bg-black/0 btn text-white hover:bg-white hover:text-black normal-case focus:outline-none mb-6 " : "bg-[#4c6acb] btn text-white hover:bg-[#4ccb85] normal-case focus:outline-none mb-6 "}
              >
                {showMore ? "Show Less" : "See More"}
              </button>
            </div>
          )}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
      </div>
      {/* Tonmoy start */}


      {/* Tonmoy end */}
    </div>
  );
};

export default ManageOrder;