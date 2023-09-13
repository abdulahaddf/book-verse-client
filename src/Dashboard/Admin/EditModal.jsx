/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const EditModal = ({ isOpen, book, onClose }) => {
  if (!isOpen) return null;
  const {
    _id,
    title,
    author,
    category,
    language,
    real_price,
    offer_price,
    page_numbers,
    rating,
    published,
    about_author,
    description,
    cover_image,
    author_image,
  } = book;
  // console.log(_id);

  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm();
  console.log(watch("example"));

  // tonmoy start
  const onSubmit = async (allData) => {
    const {
      title,
      author,
      category,
      language,
      real_price,
      offer_price,
      page_numbers,
      rating,
      published,
      about_author,
      description,
      cover_image,
      author_image,
    } = allData;

    console.log(_id);

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Image_Upload_token
    }`;

    try {
      // real code
      const coverForm = new FormData();
      coverForm.append("image", cover_image[0] || cover_image);

      const authorForm = new FormData();
      authorForm.append("image", author_image[0] || author_image);

      // Upload Cover Image
      const coverResponse = await fetch(imageUploadUrl, {
        method: "POST",
        body: coverForm,
      });

      if (!coverResponse.ok) {
        throw new Error("Cover image upload failed");
      }

      const coverImageResponse = await coverResponse.json();
      const cover_image_url = coverImageResponse.data.display_url;

      // Upload Author Image
      const authorResponse = await fetch(imageUploadUrl, {
        method: "POST",
        body: authorForm,
      });

      if (!authorResponse.ok) {
        throw new Error("Author image upload failed");
      }

      const authorImageResponse = await authorResponse.json();
      const author_image_url = authorImageResponse.data.display_url;

      // Prepare Book Data
      const bookData = {
        _id: _id,
        title,
        author,
        category,
        language,
        real_price,
        offer_price,
        page_numbers,
        rating,
        published,
        about_author,
        description,
        cover_image: cover_image_url,
        author_image: author_image_url,
      };
      // Send Book Data to API
      const apiResponse = await fetch(
        `https://book-verse-server-phi.vercel.app/allBooks/${_id}`,
        {
          method: "PUT",
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

      if (apiResponse.ok) {
        Swal.fire({
          title: "Success!",
          text: "Book updated successfully",
          icon: "success",
          confirmButtonText: "Ok",
        })
          .then(() => {
          onClose(); // Close the modal
        });
      }
      else {
        throw new Error("Book update failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // tonmoy end

  return (
    <div className="w-full h-full ">
      <dialog
        id="my_modal_5"
        open={isOpen}
        onClose={onClose}
        className="modal modal-middle lg:ml-[120px] mt-6 "
      >
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-3xl rounded-md p-4 md:p-10 duration-500"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="modal-action -mt-6">
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              onClick={onClose}
              className="text-[#d71d24] text-3xl hover:bg-[#d71d24] hover:text-white p-2 rounded-full duration-500"
            >
              {/* <ImCross></ImCross> */}
              <RxCross2></RxCross2>
            </button>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Update Book</h2>

          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Book name</span>
              </label>
              <input
                required
                type="text"
                name="title"
                {...register("title")}
                placeholder="Book name"
                defaultValue={book.title}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Author name</span>
              </label>
              <input
                required
                type="text"
                name="author"
                {...register("author")}
                placeholder="Author name"
                className="input input-bordered w-full"
                defaultValue={book.author}
              />
            </div>
          </div>

          <div className=" flex gap-6 b-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input
                required
                type="text"
                name="category"
                {...register("category")}
                placeholder="Select category"
                defaultValue={book.category}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Language</span>
              </label>
              <input
                required
                type="text"
                name="language"
                {...register("language")}
                placeholder="Select language"
                defaultValue={book.language}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className=" flex gap-6 b-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Real Prices</span>
              </label>
              <input
                required
                type="number"
                name="real_price"
                {...register("real_price")}
                placeholder="Real price"
                defaultValue={book.real_price}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Offer price*</span>
              </label>
              <input
                required
                type="number"
                name="offer_price"
                {...register("offer_price")}
                placeholder="Offer price"
                defaultValue={book.offer_price}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className=" flex gap-6 b-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Page numbers</span>
              </label>
              <input
                required
                type="number"
                name="page_numbers"
                {...register("page_numbers")}
                placeholder="Page numbers"
                defaultValue={book.page_numbers}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Rating*</span>
              </label>
              <input
                required
                type="text"
                name="rating"
                {...register("rating")}
                placeholder="Rating"
                defaultValue={book.rating}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className=" flex gap-6 b-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Published date</span>
              </label>
              <input
                required
                type="date"
                name="published"
                {...register("published")}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">About author</span>
              </label>
              <input
                required
                type="rating"
                name="about_author"
                {...register("about_author")}
                placeholder="About author"
                defaultValue={book.about_author}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Cover image</span>
              </label>
              <input
                type="file"
                // required
                name="cover_image"
                {...register("cover_image")}
                placeholder="Cover image"
                defaultValue={book.cover_image_url}
                className="input 
              file-input file-input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Author image</span>
              </label>
              <input
                // required
                type="file"
                name="author_image"
                {...register("author_image")}
                placeholder="Author image"
                defaultValue={book.author_image_url}
                className="input file-input file-input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              required
              className="textarea textarea-bordered h-24"
              name="description"
              {...register("description")}
              placeholder="Description"
              defaultValue={book.description}
            ></textarea>
          </div>

          <input
            className="mt-4 flex btn w-32 btn-primary"
            type="submit"
            value="Update Book"
          />
        </form>
      </dialog>
    </div>
  );
};

export default EditModal;
