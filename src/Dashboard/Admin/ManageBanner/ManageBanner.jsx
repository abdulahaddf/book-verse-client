import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageBannerCard from './ManageBannerCard';
import { useForm } from 'react-hook-form';
import UseUser from '../../../hooks/UseUser';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageBanner = () => {

    // const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userinfo] = UseUser()
    const {
        register,
        handleSubmit,
        reset
  } = useForm();
  
  const { data: banners = [],isLoading, refetch, } = useQuery(["banners"], async () => {
    const res = await fetch("https://book-verse-server-phi.vercel.app/banners");
    return res.json();
  });


    const AddNewBanner = (data) => {
      if (data!=="null") {
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
            axios
              .post(
              "https://book-verse-server-phi.vercel.app/banners",bannerDetails
              )
              .then((res) => {
                console.log(res.data)
                if (res.data.insertedId) {
                  reset();
                  document.body.classList.remove('modal-open')
                  refetch();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Banner added successfully.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                
                }
              })
              .catch((err) => console.log(err));
          }
        });
        
        }
    }




    return (
       
            <div className="w-full h-full ps-4 lg:p-4 md:mt-6">
        <div className='text-center'>
        <h2 className="text-4xl font-bold mb-8">Banner management</h2>
                <button
        htmlFor="my_modal_8"
        onClick={() => window.my_modal_8.showModal()}
        className="primary-button"
      >
        Add New Banner
                </button>
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
                  input file-input file-input-bordered w-full "
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
   


      <div className="mt-10 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners?.map((banner) => (
          <ManageBannerCard key={banner._id} banner={banner} refetch={refetch}></ManageBannerCard>
        ))}
                </div>
                
    </div>
       
    );
};

export default ManageBanner;