import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageBannerCard from './ManageBannerCard';
import { useForm } from 'react-hook-form';
import UseUser from '../../../hooks/UseUser';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { PickerOverlay } from 'filestack-react';

const ManageBanner = () => {
  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);
  const [openModalIndex, setOpenModalIndex] = useState("");

  //  Tonmoy end

  // const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [userinfo] = UseUser();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const {
    data: banners = [],
    isLoading,
    refetch,
  } = useQuery(["banners"], async () => {
    const res = await fetch("https://book-verse-server-phi.vercel.app/banners");
    return res.json();
  });

  const AddNewBanner = () => {
    setShowPicker(true);
  }

const handleUploadDone=(res)=>{
const bannerDetails = {
            bannerURL: res.filesUploaded[0].url
          };

axios.post(
                "https://book-verse-server-phi.vercel.app/banners", bannerDetails
              )
              .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                  refetch()
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Banner added successfully.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setShowPicker(false);

                }
              })
              .catch((err) => console.log(err));
}



  return (
    <div className="w-[414px] md:w-full mx-auto h-full p-2 lg:p-4 mt-14">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Banner management</h2>

        <div className={darkMode ? " flex justify-center" : ""}>
          <button
            onClick={()=>AddNewBanner()}
            className={darkMode ? "primary-button-dark border-white border-[2px]" : "primary-button"}
          >
            Add New Banner
                </button>
                {showPicker && (
        <PickerOverlay
          apikey='ApA4Qt6SR4WpZkkO844gQz'
          onUploadDone={(res) => {
            console.log(res);
            handleUploadDone(res);
          }}
        />
      )}
                
        </div>
      </div>

      <dialog id="my_modal_8" className="modal">
        <form method="dialog" className="modal-box" onSubmit={handleSubmit(AddNewBanner)}>
          <h3 className="text-3xl font-semibold text-center text-red uppercase">Add New Banner </h3>
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
                {...register("subtitle")}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <label
              htmlFor="photo"
              className="block text-sm font-semibold text-gray-800"
            >
              Add photo <span className='font-thin'>(1920px x 1080px) </span>
            </label>
            <input
              checked={true}
              type="file"
              id="url"
              {...register("url")}
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
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>



      <div className="mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners?.map((banner) => (
          <ManageBannerCard
            key={banner._id}
            banner={banner}
            refetch={refetch}
          ></ManageBannerCard>
        ))}
      </div>
    </div>
  );
};

export default ManageBanner;
