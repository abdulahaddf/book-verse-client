import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    // eslint-disable-next-line no-unused-vars
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
      page_numbers,
      rating,
      published,
      about_author,
      description,
      cover_image,
      author_image,
    } = allData;

     // Converting real_price and offer_price to numbers - AHAD
  const real_price = parseFloat(allData.real_price);
  const offer_price = parseFloat(allData.offer_price);

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Image_Upload_token
    }`;

    try {
      const coverForm = new FormData();
      coverForm.append("image", cover_image[0]);

      const authorForm = new FormData();
      authorForm.append("image", author_image[0]);

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
        "https://book-verse-server-phi.vercel.app/allBooks",
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
  // tonmoy end

  return (
    <div className="w-full h-full ps-4 lg:p-4 md:mt-6">
      <h2 className="text-4xl font-bold text-center">Add Book</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 rounded-md p-4 md:p-16 mt-10"
      >
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
              required
              name="cover_image"
              {...register("cover_image")}
              placeholder="Cover image"
              className="input 
              file-input file-input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Author image</span>
            </label>
            <input
              required
              type="file"
              name="author_image"
              {...register("author_image")}
              placeholder="Author image"
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
          ></textarea>
        </div>

        <input
          className="btn-primary mt-6 w-28"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
