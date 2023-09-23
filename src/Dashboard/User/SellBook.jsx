import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseUser from "../../hooks/UseUser";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const SellBook = () => {
  //  Tonmoy start

  const { darkMode } = useContext(AuthContext);
  // Tonmoy end
  const [userinfo] = UseUser();
  console.log(userinfo);
  const {
    register,
    handleSubmit,
    watch,
    reset,

    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
  console.log(watch("example"));

  const onSubmit = async (allData) => {
    const {
      title,
      author,
      language,
      price,
      purchased,
      description,
      book_image,
    } = allData;

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Image_Upload_token
    }`;

    try {
      const coverForm = new FormData();
      coverForm.append("image", book_image[0]);

      // Upload Cover Image
      const coverResponse = await fetch(imageUploadUrl, {
        method: "POST",
        body: coverForm,
      });

      if (!coverResponse.ok) {
        throw new Error("Cover image upload failed");
      }

      const coverImageResponse = await coverResponse.json();
      const book_image_url = coverImageResponse.data.display_url;

      // Prepare Book Data
      const bookData = {
        title,
        author,
        language,
        offer_price: price,
        purchased,
        description,
        cover_image: book_image_url,
        seller: userinfo.displayName,
        sellerMail: userinfo?.email,
        sellerPhoto: userinfo?.photoURL,
        sellerAddress: userinfo?.address,
        sellerPhone: userinfo?.phoneNumber,
        postDate: new Date().toISOString(),
      };

      // Send Book Data to API
      const apiResponse = await fetch(
        "https://book-verse-server-phi.vercel.app/oldBooks",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Book insertion failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Book added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-[414px] md:w-full mx-auto h-full p-2 lg:p-4 mt-5">
      <h1 className={darkMode?"dashboard-heading-dark":"dashboard-heading"}>Post Your Old Books to sell</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          darkMode
            ? "bg-gray w-[90%] mx-auto border-[1px] rounded-md p-4"
            : "bg-slate-100 rounded-md p-4 "
        }
      >
        <div className="md:flex p-2 gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span
                className={
                  darkMode
                    ? "label-text font-semibold text-white"
                    : "label-text font-semibold"
                }
              >
                Book name
              </span>
            </label>
            <input
              required
              type="text"
              name="title"
              {...register("title")}
              placeholder="Book name"
              className="input input-bordered w-full text-black"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={
                  darkMode
                    ? "label-text font-semibold text-white"
                    : "label-text font-semibold"
                }
              >
                Author name
              </span>
            </label>
            <input
              required
              type="text"
              name="author"
              {...register("author")}
              placeholder="Author name"
              className="input input-bordered w-full text-black"
            />
          </div>
        </div>
        <div className=" md:flex p-2 gap-6 b-4">
          <div className="form-control w-full">
            <label className="label">
              <span
                className={
                  darkMode
                    ? "label-text font-semibold text-white"
                    : "label-text font-semibold"
                }
              >
                Language
              </span>
            </label>
            <input
              required
              type="text"
              name="language"
              {...register("language")}
              placeholder="Select language"
              className="input input-bordered w-full text-black"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={
                  darkMode
                    ? "label-text font-semibold text-white"
                    : "label-text font-semibold"
                }
              >
                Price
              </span>
            </label>
            <input
              required
              type="number"
              name="price"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered w-full text-black"
            />
          </div>
        </div>

        <div className=" md:flex p-2 gap-6 b-4">
          <div className="form-control w-full">
            <label className="label">
              <span
                className={
                  darkMode
                    ? "label-text font-semibold text-white"
                    : "label-text font-semibold"
                }
              >
                Purchased date
              </span>
            </label>
            <input
              required
              type="date"
              name="purchased"
              {...register("purchased")}
              className="input input-bordered w-full text-black"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={
                  darkMode
                    ? "label-text font-semibold text-white"
                    : "label-text font-semibold"
                }
              >
                Book image
              </span>
            </label>
            <input
              type="file"
              required
              name="book_image"
              {...register("book_image")}
              placeholder="Book Image"
              className="input  text-black
              file-input file-input-bordered w-full file-input-info"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span
              className={
                darkMode
                  ? "label-text font-semibold text-white"
                  : "label-text font-semibold"
              }
            >
              Description
            </span>
          </label>
          <textarea
            required
            className="textarea textarea-bordered h-24 text-black"
            name="description"
            {...register("description")}
            placeholder="Description"
          ></textarea>
        </div>

        <input
          className={
            darkMode
              ? " btn-primary-dark text-[15px] mt-4 "
              : "btn-primary text-[15px] mt-4"
          }
          type="submit"
          value="Post your Book"
        />
      </form>
    </div>
  );
};

export default SellBook;
