import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddPromo = () => {
    const [promos, setPromos] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        reset,
       
      } = useForm();
      console.log(watch("example"));
    
      const onSubmit = async (data) => {
        console.log(data)
      

    
        try {
         
    
          // Send Promo Codes Data to API
          const apiResponse = await fetch(
            "http://localhost:5000/promo",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
    
          if (!apiResponse.ok) {
            throw new Error("Promo Code insertion failed");
          }
    
          const responseData = await apiResponse.json();
    
          if (responseData.insertedId) {
            Swal.fire("Success!", "Promo Code added successfully", "success");
            reset();
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };


      useEffect(() => {
        fetch(
          'http://localhost:5000/promo'
        )
          .then((response) => response.json())
          .then((data) => setPromos(data));
      }, [promos]);
      const handleDelete = (promo) => {
        Swal.fire({
          title: "Are you sure?",
          text: "Your Promo Code will be deleted!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#000000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/promo/${promo._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your promo has been deleted.", "success");
                }
              });
          }
        });
      };
         

    return (
        <div className="h-full  w-11/12">
            <h1 className="text-4xl font-bold text-center my-10">Add Promo Codes</h1>
            <div>
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 rounded-md p-4 md:p-5"
      >
        <div className="flex items-center justify-center gap-5 w-4/5 mx-auto">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Promo Code</span>
            </label>
            <input
              required
              type="text"
              name="promo"
              {...register("promo")}
              placeholder="Enter Promo Code"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Discount</span>
            </label>
            <input
              required
              type="number"
              name="discount"
              {...register("discount")}
              placeholder="Enter % of Discount"
              className="input input-bordered w-full"
            />
          </div>
          <div>

          <input
          className="btn-custom w-20 mt-8"
          type="submit"
          value="Add"
          />
          </div>
        </div>
    
      </form>

            </div>

            <div className="overflow-x-auto mt-5  md:my-10">
              <table className="table table-zebra shadow-xl w-full text-center">
                {/* head */}
                <thead className="bg-primary text-white">
                  <tr>
                    <th>#</th>
                    <th>promo Code</th>
                    <th>Discounts</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {promos.map((promo, index) => (
                    <tr key={promo._id}>
                      <th>{index + 1}</th>
                      
                      <td>{promo.promo}</td>
                      <td>{promo.discount}</td>
                     
                     
                      <td>
                        <button
                          onClick={() => handleDelete(promo)}
                          className="btn-custom"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default AddPromo;