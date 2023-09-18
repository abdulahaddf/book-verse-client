
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

import Loader from "../../shared/components/loader/Loader";
import UseUser from "../../hooks/UseUser";
import UseBooks from "../../hooks/UseBooks";
import Marquee from "react-fast-marquee";

// ----------
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

// ------
const UserHome = () => {
  const { user } = useContext(AuthContext);
  const { books } = UseBooks();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const [userinfo,isLoading]=UseUser()

  console.log(userinfo);

  // const from = location?.state?.from?.pathname || "/dashboard/userHome";

  const updateProfile = (data) => {
    console.log(data);
    // ----------------------

    // ----------------------

    if (data !== "null") {
      const { name, url, address, gender, bday } = data;
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
            const imageURL = imageResponse?.data?.display_url;
            const profile = {
              displayName: name,
              photoURL: imageURL,
              address: address,
              gender: gender,
              birthday: bday,
            };
            axios
              .patch(
                `https://book-verse-server-phi.vercel.app/userinfoupdate/?email=${user?.email}`,
                profile
              )
              .then((res) => {
                
                if (res.data.modifiedCount > 0) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Userinfo updated successfully.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(from, { replace: true });
                }
                else if (res.data.modifiedCount == 0 || res.data.matchedCount>1){
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
    <div>
      <div className=" bg-slate-50 w-3/4 p-10 rounded shadow-xl border-t-2 border-[#d71d24]">
      <img className="rounded-full w-32 h-32" src={userinfo?.photoURL} alt="" />
      <p className="font-bold text-xl text-[#d71d24] uppercase my-4">
        Name: <span className="font-normal">{userinfo?.displayName}</span>
      </p>
      <p className="font-bold text-xl text-[#d71d24] uppercase mb-4">
        Email: <span className="lowercase font-normal">{userinfo?.email}</span>
      </p>
      <p className="font-bold text-xl text-[#d71d24] uppercase mb-4">
        Address: <span className="lowercase font-normal">{userinfo?.address}</span>
      </p>
      <p className="font-bold text-xl text-[#d71d24] uppercase mb-4">
        Gender: <span className="lowercase font-normal">{userinfo?.gender}</span>
      </p>
      <p className="font-bold text-xl text-[#d71d24] uppercase mb-4">
        Birth Date: <span className="lowercase font-normal">{userinfo?.birthday}</span>
      </p>

      <label
        htmlFor="my_modal_7"
        onClick={() => window.my_modal_3.showModal()}
        className="primary-button"
      >
        Update Profile
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
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
                    {...register("name", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {errors.name && <span className="error">Name is required</span>}
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
                    {...register("address", { required: true })}
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
                      {...register("bday", { required: true })}
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
                <div className="mb-2">
                  <label
                    htmlFor="url"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Photo Url
                  </label>
                  <input
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
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
      </div>

  {/* ------- */}
      <div>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>

      {/* ----------- */}
    </div>
  );
};

export default UserHome;
