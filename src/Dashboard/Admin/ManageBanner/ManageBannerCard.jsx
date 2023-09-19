import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const ManageBannerCard = ({ banner, refetch }) => {
  // eslint-disable-next-line react/prop-types

  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy end

  const { _id, bannerURL, title, subtitle } = banner;
  const { register, handleSubmit, reset } = useForm();
  const handleEdit = (data) => {
    console.log(data);
    if (data !== "null") {
      const { title, subtitle, url } = data;
      console.log(data);

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_Image_Upload_token
      }`;

      const coverForm = new FormData();
      coverForm.append("image", url[0]);
      fetch(imageUploadUrl, {
        method: "POST",
        body: coverForm,
      })
        .then((res) => res.json())
        .then((imageResponse) => {
          if (imageResponse.success) {
            const imageURL = imageResponse.data.display_url;
            const bannerDetails = {
              title: title,
              subtitle: subtitle,
              bannerURL: imageURL,
            };
            console.log(bannerDetails);
            axios
              .patch(
                `https://book-verse-server-phi.vercel.app/banner/${_id}`,
                bannerDetails
              )
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                  reset();
                  document.body.classList.remove("modal-open");
                  refetch();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Banner updated successfully.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              })
              .catch((err) => console.log(err));
          }
        });
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
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-verse-server-phi.vercel.app/banner/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Banner has been deleted.", "success");
            }
          });
      }
    });

    // axios.delete(`https://book-verse-server-phi.vercel.app/banner/${_id}`)
    //   .then((res) => {
    //     if (res.data.modifiedCount>0) {
    //       {
    //         Swal.fire({
    //           position: "center",
    //           icon: "success",
  //           title: `Userinfo updated successfully.`
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //     }
    //     }
    //   })
  };

  return (
    <div
      className={
        darkMode
          ? "card card-compact w-96 h-72 bg-gray border-[1px]  shadow-xl "
          : "card card-compact w-96 h-72 bg-base-100 shadow-xl "
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
              className={darkMode ? "primary-button-dark hover:bg-[#10aade] hover:text-white border-[2px] border-[#10aade] text-[#10aade] hover:border-white " : "primary-button"}
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <FaEdit className="text-xl"></FaEdit>
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className={darkMode ? "bg-gray-200 modal-box" : "modal-box"}>
                <form
                  className={darkMode ? "bg-gray-200" : ""}
                  method="dialog"
                  onSubmit={handleSubmit(handleEdit)}
                >
                  <h3 className="text-3xl font-semibold text-center text-red uppercase">
                    Edit Banner{" "}
                  </h3>

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
                    <label
                      htmlFor="photo"
                      required
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Add photo{" "}
                      <span className="font-thin">(1920px x 1080px) </span>
                    </label>
                    <input
                      checked={true}
                      type="file"
                      id="url"
                      {...register("url", { required: true })}
                      className="block   mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full file-input-info"
                    />
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
                darkMode ? "primary-button-dark  border-[2px] border-[#d71d24] hover:bg-[#d71d24] hover:text-white hover:border-white  text-[#d71d24]" : "primary-button"
              }
              onClick={handleDelete}
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
