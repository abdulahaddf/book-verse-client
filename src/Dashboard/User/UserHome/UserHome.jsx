import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import './UserHome.css'

import Loader from "../../../shared/components/loader/Loader";
import UseUser from "../../../hooks/UseUser";
import { FaCamera, FaEdit } from "react-icons/fa";
import { useState } from "react";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const [userinfo, isLoading] = UseUser();

  console.log(userinfo);

  // const from = location?.state?.from?.pathname || "/dashboard/userHome";

  const updateProfile = (data) => {

    console.log(data);

    const { name, address, gender, bday,phoneNumber } = data;
    const profile = {
      displayName: name,
      address: address,
      gender: gender,
      birthday: bday,
      phoneNumber:phoneNumber
    };
    axios
      .patch(
        `https://book-verse-server-phi.vercel.app/userinfoupdate/?email=${user?.email}`,
        profile
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          document.getElementById('my_modal_2').checked = false;
          reset();
       closeModal();
          
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Userinfo updated successfully.`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data.modifiedCount == 0 || res.data.matchedCount > 1) {
          closeModal();
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Userinfo already updated.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const updatePicture = (data) => {

    if (data !== "null") {
      const { url } = data;
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
            const profile = {
              photoURL: imageURL,
            };
            axios
              .patch(
                `https://book-verse-server-phi.vercel.app/userpictureupdate/?email=${user?.email}`,
                profile
              )
              .then((res) => {
                if (res.data.modifiedCount > 0) {
                  reset();
                  document.body.classList.remove('modal-open')
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Userinfo updated successfully.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  
                } else if (
                  res.data.modifiedCount == 0 ||
                  res.data.matchedCount > 1
                ) {
                  document.body.classList.remove('modal-open')
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Userinfo already updated.",
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

  if (isLoading) {
    return <Loader></Loader>;
  }


  return (
    <div className="w-11/12 p-10 rounded shadow-xl border-t-2 border-[#126e9d]">
      <h1 className="uppercase font-bold text-[#126e9d] text-2xl mb-4">Edit Information</h1>
      <div className="image-container">
        <img
          className="image"
          src={userinfo?.photoURL}
          alt=""
        />
        <button
          onClick={() => {
            openModal()
            window.my_modal_2.showModal()
          }}
          className="modal-open edit-button ms-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red"
        >
          <FaCamera></FaCamera>
        </button>

        {
          isModalOpen && (
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box" onSubmit={handleSubmit(updatePicture)}>
            <h3 className="font-bold text-lg">Change Your Picture</h3>
              <div className="mb-2">
                
              <input
                checked={true}
                  type="file"
                  id="url"
                  {...register("url")}
                  className="block   mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40
                  input file-input file-input-bordered w-full "
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
          </form>
          <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
          )
        }

        
  
      </div>
      <div>
        <h1 className="font-bold uppercase text-xl mt-10">Account Information</h1>
        <div className="flex gap-10">
          {/* <div className="">
          <p className="text-lg mt-4">
        Name:
            </p>
            <p className="border-2 px-2 py-2">{userinfo.displayName}</p>
          </div> */}
          <div>
        <p className="text-lg mt-6">
        Name:
      </p>
      
      <p  className="text-lg mt-6">
        Address:{" "}

      </p>
      <p className="text-lg mt-6">
        Gender:{" "}
      </p>
      <p className="text-lg mt-6">
        Birth Date:{" "}
  
      </p>
      <p className="text-lg mt-6">
        Phone Number:{" "}
        
      </p>
        </div>
          <div className="">
          <p className="border-2 px-2 py-2 mt-6">{userinfo.displayName}</p>
          <p className="border-2 px-2 py-2 mt-2">{userinfo.address}</p>
          <p className="border-2 px-2 py-2 mt-2">{userinfo.gender}</p>
          <p className="border-2 px-2 py-2 mt-2">{userinfo.birthday}</p>
          <p className="border-2 px-2 py-2 mt-2">{userinfo.phoneNumber}</p>
       </div>
          
        </div>
      </div>

      <button
        htmlFor="my_modal_8"
        onClick={() => window.my_modal_8.showModal()}
        className="btn-home mt-10"
      >
        <FaEdit></FaEdit> <span className="ms-2">Update Profile</span>
      </button>

      <dialog id="my_modal_8" className="modal">
  <form method="dialog" className="modal-box" onSubmit={handleSubmit(updateProfile)}>
    <h3 className="text-3xlllll font-semibold text-center  uppercase">Update Profile </h3>
          <div>
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
                    {...register("name")}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                
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
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    defaultValue={userinfo?.address}
                    {...register("address")}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
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
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="">
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Birthday
                    </label>
                    <input
                      type="date"
                      id="bday"
                      defaultValue={userinfo?.birthday}
                      {...register("bday")}
                      className="w-full px-4 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="select"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Gender
                    </label>
                    <select
                      defaultValue={userinfo?.gender}
                      {...register("gender")}
                      className="w-full px-4 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
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
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>




      {/* <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="relative flex flex-col justify-center my-4 overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-red uppercase">
                Update Profile
              </h1>
              <form onSubmit={handleSubmit(updateProfile)} className="mt-6">
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
                    {...register("name")}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                
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
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    defaultValue={userinfo?.address}
                    {...register("address")}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
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
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="">
                    <label
                      htmlFor="date"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Birthday
                    </label>
                    <input
                      type="date"
                      id="bday"
                      defaultValue={userinfo?.birthday}
                      {...register("bday")}
                      className="w-full px-4 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="select"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Gender
                    </label>
                    <select
                      defaultValue={userinfo?.gender}
                      {...register("gender")}
                      className="w-full px-4 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div> */}
    </div>
  );
};

export default UserHome;
