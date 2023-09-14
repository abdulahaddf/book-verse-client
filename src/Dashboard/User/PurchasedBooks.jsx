import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import { Rating } from "@smastrom/react-rating";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../../shared/components/loader/Loader";
import UseUser from "../../hooks/UseUser";

const PurchasedBooks = () => {
  const { user, loading,darkMode } = useContext(AuthContext);
  const [userinfo] = UseUser();
  const [books, setBooks] = useState([]);
  const [openModalIndex, setOpenModalIndex] = useState("");
  const [tId, setTId] = useState("");
  //   console.log(tId);
  useEffect(() => {
    axios
      .get(
        `https://book-verse-server-phi.vercel.app/purchased?email=${user?.email}`
      )
      .then((data) => setBooks(data.data));
  }, [user]);

  console.log(books);

  //for review
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      review: "",
      rating: 0,
    },
  });

  function onSubmit(data) {
    console.log(data);
    const review = {
      bookId: tId,
      transactionId: data?.transactionId,
      name: userinfo?.displayName,
      photo: userinfo?.photoURL,
      review: data?.review,
      rating: data?.rating,
      identifier: user?.email,
      postDate: new Date().toISOString(),
    };
    console.log(review);
    fetch("https://book-verse-server-phi.vercel.app/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Review added successfully") {
          // tonmoy start
          fetch(
            "https://book-verse-server-phi.vercel.app/recentCellingAndBestCellingReview",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(review),
            }
          )
            .then((res) => res.json())
            .then((res) => {
              if (res) {
                reset();
                if (openModalIndex) {
                  openModalIndex.close();
                }

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Review added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });

          // tonmoy end
        } else if (result.message === "You have already reviewed this book") {
          reset();
          if (openModalIndex) {
            openModalIndex.close();
          }

          Swal.fire({
            icon: "error",
            title: "Sorry",
            text: "You have already reviewed this book",
          });
        }
      });
  }
  if (loading) return <Loader />;
  return (
    <div className="mt-5 w-96 md:w-full h-full ">
      <>
        {books.length > 0 ? (
          <>
            {" "}
            <div>
              <div className="overflow-x-auto">
                <h1 className=" dashboard-heading">
                  All Your Purchased Books : {books.length}
                </h1>
                <table className={darkMode?"table table-zebra shadow-xl w-full bg-black/90  text-center overflow-x-auto ":"table table-zebra shadow-lg  text-center overflow-x-auto    px-2   mx-auto "}>
                  {/* head */}
                  <thead className={darkMode?"bg-white/10 text-white":"bg-primary text-white"}>
                    <tr>
                      <th>#</th>
                      <th>Books</th>
                      <th>Delivery Status</th>
                      <th>Purchase Time</th>
                      <th>Transection ID</th>
                    </tr>
                  </thead>
                  <tbody >
                    {books.map((book, index) => (
                      <tr key={book._id}>
                        <th className={darkMode?" bg-black":""}>{index + 1}</th>
                        <td className={darkMode?" bg-black":""}>
                          {book.books.map((sBook, sIndex) => (
                            <div
                              className={darkMode?"text-start flex gap-10 my-5 shadow-lg p-2 bg-black/90":"text-start flex gap-10 my-5 shadow-lg p-2 w-96"}
                              key={sBook._id}
                            >
                              <img
                                className="h-[80px] w-[60px] rounded-md"
                                src={sBook.cover_image}
                                alt="book cover"
                              />
                              <div>
                                <p className="text-lg font-medium">
                                  {sBook.title}
                                </p>

                                <button
                                  onClick={() => {
                                    const modalId = `${sBook._id}_${sIndex}`;
                                    const modal =
                                      document.getElementById(modalId);
                                    setOpenModalIndex(modal);
                                    if (modal) {
                                      setTId(sBook._id);
                                      modal.showModal();
                                    }
                                  }}
                                  // className={darkMode?"btn btn-sm btn-outline text-white hover:bg-white hover:text-black mt-2":"btn-custom"}
                                  className={`btn-custom ${
                                    book.status === "Delivered"
                                      ? ""
                                      : "cursor-not-allowed opacity-50"
                                  }`}
                                  disabled={book.status !== "Delivered"}
                                >
                                  review
                                </button>
                              </div>
                              <dialog
                                id={`${sBook._id}_${sIndex}`}
                                className="modal"
                              >
                                <form
                                  onSubmit={handleSubmit(onSubmit)}
                                  method="dialog"
                                  className="modal-box   text-black "
                                >
                                  <button
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={() => {
                                      const modalId = `${sBook._id}_${sIndex}`;
                                      const modal =
                                        document.getElementById(modalId);
                                      if (modal) {
                                        modal.close();
                                      }
                                    }}
                                  >
                                    ✕
                                  </button>

                                  {/* {console.log(sBook)} */}
                                  <h3 className="font-bold text-lg">
                                    {sBook.title}
                                  </h3>
                                  <div className="md:w-96 p-5 md:p-10">
                                    {/* <section> */}

                                    <div>
                                      <div
                                        id="rating_label"
                                        className="text-lg font-medium my-2"
                                      >
                                        Rating
                                      </div>
                                      <Controller
                                        control={control}
                                        name="rating"
                                        rules={{
                                          validate: (rating) => rating > 0,
                                        }}
                                        render={({
                                          field: { onChange, onBlur, value },
                                        }) => (
                                          <Rating
                                            value={value}
                                            isRequired
                                            onChange={onChange}
                                            visibleLabelId="rating_label"
                                            onBlur={onBlur}
                                            emptySymbol="fa fa-star-o fa-2x"
                                            fullSymbol="fa fa-star fa-2x"
                                            fractions={2}
                                          />
                                        )}
                                      />
                                      {errors.rating && (
                                        <p>Rating is required.</p>
                                      )}
                                    </div>

                                    <p className="text-lg font-medium my-2">
                                      Your Review
                                    </p>

                                    <input
                                      type="hidden"
                                      name={"transactionId"}
                                      value={book.transactionId}
                                      {...register("transactionId")}
                                    />

                                    <Controller
                                      control={control}
                                      name="review"
                                      render={({ field }) => (
                                        <textarea
                                          className="textarea border-red  md:w-96"
                                          id="review"
                                          {...field}
                                        />
                                      )}
                                    />
                                    {/* {errors.review && <p>Review is required.</p>} */}

                                    <button
                                      className="btn-custom my-5"
                                      type="submit"
                                    >
                                      Submit review
                                    </button>
                                    {/* </section> */}
                                  </div>
                                </form>
                              </dialog>
                            </div>
                          ))}
                        </td>
                        <td className={darkMode?"text-xl bg-black":"text-xl"}>
                          {book?.status == "Cash On Delivery"
                            ? "Pending"
                            : book?.status
                            ? book?.status
                            : "Pending"}{" "}
                        </td>
                        <td className={darkMode?" bg-black":""}>
                          <p>
                            {new Date(book.date).toISOString().split("T")[0]}
                          </p>
                        </td>
                        <td className={darkMode?" bg-black":""}>
                          {book.transactionId
                            ? book.transactionId
                            : "Cash on Delivery"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>{" "}
          </>
        ) : (
          <Zoom>
            <div className="h-[100vh] flex flex-col items-center justify-center">
              <h1 className="text-3xl  font-semibold">
                You have not Purchased any books
              </h1>
              <h3 className="text-4xl  font-semibold my-5">
                Please Select Your Desired Class
              </h3>
              <Link to="/all-books" className="btn-custom">
                Buy Books
              </Link>
            </div>
          </Zoom>
        )}
      </>
    </div>
  );
};

export default PurchasedBooks;
