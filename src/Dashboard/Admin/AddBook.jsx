
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBook = () => {

  const {
    register,
    handleSubmit,
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
  console.log(watch("example"));

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/allBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "class added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="w-full h-full ps-4 md:p-4">
      <h2 className="text-4xl font-bold text-center">Add Book</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 rounded-md p-10 mt-10"
      >
        <div className="flex gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Book name</span>
            </label>
            <input
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
              type="text"
              name="cover_image"
              {...register("cover_image")}
              placeholder="Cover image"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Author image</span>
            </label>
            <input
              type="text"
              name="author_image"
              {...register("author_image")}
              placeholder="Author image"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            name="description"
            {...register("description")}
            placeholder="Description"
          ></textarea>
        </div>

        <input
          className="py-2 px-3 mt-4 flex btn btn-sm hover:bg-[#d71d24] hover:text-white rounded-sm btn-outline hover:border-[#d71d24] text-[#d71d24]"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
