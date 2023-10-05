/* eslint-disable react/prop-types */
import axios from "axios";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { useState } from "react";

const ManageBannerCard = ({ banner, refetch, index }) => {
  // eslint-disable-next-line react/prop-types

  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy end

  const { _id, bannerURL, title, subtitle,titleClass } = banner;
  const { register, handleSubmit, reset  } = useForm();
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState("");

  const handleEdit = (data) => {
   
    if (data !== "null") {
      const { title, subtitle } = data;
     
      
            const bannerDetails = {
              title: title,
              subtitle: subtitle
            };
           
            axios
              .patch(
                `https://book-verse-team-project-server.up.railway.app/banner/${_id}`,
                bannerDetails
              )
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                  reset();
                  refetch();
                  if (openModalIndex) {
                    openModalIndex.close();
                  }
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Banner updated successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              })
              .catch((err) => console.log(err));
          
    }
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        console.log(result)
        if (result.isConfirmed) {
          axios.delete(`https://book-verse-team-project-server.up.railway.app/banner/${_id}`)
            .then(res => {
              console.log(res)
              if (res.data.acknowledged) {
                refetch();
                if (openModalIndex) {
                  openModalIndex.close();
                }
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Banner deleted successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
          
        }
      })
  }



  return (
    <div
      className={
        darkMode
          ? "card card-compact w-full h-100 bg-gray border-[1px]  shadow-xl "
          : "card card-compact w-full h-100 bg-base-100 shadow-xl "
      }
    >
      <figure>
        <img src={bannerURL} alt="Shoes" />
      </figure>

      <div className="card-body">
        <div>
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="card-actions justify-end mt-auto">
          <div className="flex gap-6">
            <button
              className={
                darkMode
                  ? "primary-button-dark hover:bg-[#10aade] hover:text-white border-[2px] border-[#10aade] text-[#10aade] hover:border-white "
                  : "primary-button"
              }
              onClick={() => {
                const modalId = `${banner._id}_${index}`;
                const modal = document.getElementById(modalId);
                setOpenModalIndex(modal);
                if (modal) {
                  // setTId(sBook._id);
                  modal.showModal();
                }
              }}
            >
              <FaEdit className="text-xl"></FaEdit>
            </button>
            <dialog id={`${banner._id}_${index}`} className="modal">
              <div className={darkMode ? "bg-gray-200 modal-box" : "modal-box"}>
              <h3 className="text-3xl font-semibold text-center text-red uppercase my-4">
                    Edit Banner{" "}
                  </h3>
                <div className="my-4">
                <img src={bannerURL} alt="" />
                  
                </div>
                <form
                  className={darkMode ? "bg-gray-200" : ""}
                  method="dialog"
                  onSubmit={handleSubmit(handleEdit)}
                >
                  

                  <div>
                    <div className="mb-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        defaultValue={title}
                        {...register("title")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    

                    <div className="mb-2">
                      <label
                        htmlFor="subtitle"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Subtitle
                      </label>
                      <input
                        type="text"
                        id="subtitle"
                        defaultValue={subtitle}
                        {...register("subtitle")}
                        className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                   
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            <button
              className={
                darkMode
                  ? "primary-button-dark  border-[2px] border-[#d71d24] hover:bg-[#d71d24] hover:text-white hover:border-white  text-[#d71d24]"
                  : "primary-button"
              }
              onClick={() => handleDelete(_id)}
            >
              <MdDelete className="text-xl"></MdDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBannerCard;
