import { useState } from "react";
import usePaymentHistory from "../../hooks/usePayments";
import { TfiCrown } from "react-icons/tfi";
// import { useForm } from "react-hook-form";

const ManageOrder = () => {
  const handleForm = (event, id) => {
    event.preventDefault();
    console.log(id);
    const value=event.target.select.value;
    const data={
      "status": value
    }
    console.log(data)
    fetch(`https://book-verse-server-phi.vercel.app/paymentStatus/${id}`,{
      method:"PATCH",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        refetch()
      }
    })
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
  return (
    <div className="w-full  px-10 p-5 min-h-full bg-slate-300">
      <div className="p-10 bg-slate-500 ">
        <h2 className="text-center text-5xl text-[#91d6f6] font-mono font-bold">
          Track Orders
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full overflow-x-auto rounded-md shadow-xl">
          <table className="table table-zebra w-full text-center">
            <thead className="bg-slate-100 text-start">
              <tr className="text-lg">
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
              </tr>
            </thead>
            <tbody className="bg-slate-100 divide-y divide-gray-200 ">
              {payments
                .slice(0, showMore ? payments.length : initialDisplayCount)
                .map((payment, index) => (
                  <tr key={payment._id}>
                    <td>{index + 1}</td>
                    <td className="text-start">{payment.mail}</td>
                    {/* <td>{payment._id}</td> */}
                    <td className="text-center">{payment.transactionId ? payment.transactionId : "Cash On Delivery"}</td>
                    <td>{payment.date}</td>
                    <td className="text-start">{payment.total_price ? <>$ {payment.total_price}</> : "COD"} </td>
                    <td className="text-start">
                      <span className={`${payment?.status  ? "bg-green-400" : "bg-[#FF0000]"} rounded text-white badge-sm `}>
                        {payment?.status ? payment?.status : "Pending"}
                      </span>
                    </td>
                    <td>
                      
                      <form onSubmit={() => handleForm(event, payment?._id)}>
                        <select name="select" defaultValue={payment?.status}>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="In-Transit">In Transit</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                        <button
                          className="btn btn-success btn-xs normal-case text-white mx-1"
                          type="submit"
                        >
                          update
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {payments.length > initialDisplayCount && (
            <div className="text-center mt-4">
              <button
                onClick={toggleShowMore}
                className="bg-[#4c6acb] btn text-white hover:bg-[#4ccb85] normal-case focus:outline-none mb-6 "
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
    </div>
  );
};

export default ManageOrder;
