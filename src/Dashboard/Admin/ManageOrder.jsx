import { useRef, useState } from "react";
import usePaymentHistory from "../../hooks/usePayments";
import { TfiCrown } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Invoice from "./Invoice";
import "jspdf-autotable";
import { toast } from "react-toastify";
import { FaSearch,FaMapMarkedAlt } from "react-icons/fa";


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
    // console.log(data);
    fetch(`https://book-verse-server-phi.vercel.app/paymentStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.info("Status Updated");
        }
      });
  };

  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [payments, refetch] = usePaymentHistory(search);
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 6;
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  console.log(search);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  // Tonmoy start

  const invoiceHandler = (payment) => {
    localStorage.setItem("invoice", JSON.stringify(payment));
  };

  //  Tonmoy end 2

  return (
    <div
      className={
        darkMode
          ? "w-full  px-10 p-5 min-h-full "
          : "w-full  px-10 p-5 min-h-full bg-slate-300 max-w-full"
      }
    >
      {/* top banner section  */}
      <div className={darkMode ? "p-10  " : "p-10 bg-slate-500 "}>
        <h2
          className={
            darkMode
              ? "text-center text-5xl text-white font-mono font-bold"
              : "text-center text-5xl text-[#91d6f6] font-mono font-bold"
          }
        >
          Track <FaMapMarkedAlt className="inline text-[#91d6f6]" /> Orders
        </h2>
        <div className="flex justify-center pt-4 md:justify-end items-center w-full">
          <input
            type="text"
            ref={searchRef}
            placeholder="Find Order"
            className={
              darkMode
                ? "input input-bordered focus:outline-none text-black border-[#126e9d] max-w-xs rounded-sm h-8"
                : "input input-bordered focus:outline-none border-[#126e9d] max-w-xs rounded-lg h-8"
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            onClick={handleSearch}
            className={
              darkMode
                ? "btn btn-sm rounded-sm bg-black/90 ml-2 text-[#10aade] border-0 hover:text-black "
                : "btn btn-sm rounded-sm bg-[#126e9d] ml-2 text-white border-0 hover:text-black"
            }
          >
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
      {/* content section  */}
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
                        darkMode ? "bg-black/80 text-start" : "text-start"
                      }
                    >
                      {payment.transactionId ? payment.transactionId : "COD"}
                    </td>
                    <td className={darkMode ? "bg-black/80" : "text-start text-xs"}>
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
                        className={`${
                          payment?.status ? "bg-green-400" : "bg-[#FF0000]"
                        } rounded text-white badge-sm `}
                      >
                        {payment?.status ? payment?.status : "Pending"}
                      </span>
                    </td>
                    <td className={darkMode ? "bg-black/80" : ""}>

                      {/* update status using form  */}
                      <form
                        className="flex"
                        onSubmit={() => handleForm(event, payment?._id)}
                      >
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

                      <div onClick={() => invoiceHandler(payment)}>
                        <Invoice userInfo={payment} />
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
                className={
                  darkMode
                    ? "bg-black/0 btn text-white hover:bg-white hover:text-black normal-case focus:outline-none mb-6 "
                    : "bg-[#4c6acb] btn text-white hover:bg-[#4ccb85] normal-case focus:outline-none mb-6 "
                }
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