/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageBooksCard = ({ book, books, setBooks }) => {
  const { _id, title, author, rating, description } = book;

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullTitle, setShowFullTitle] = useState(false);

  const toggleTitle = () => {
    setShowFullTitle(!showFullTitle);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/allBooks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Book has been deleted.", "success");
              const remaining = books.filter((book) => book._id !== _id);
              setBooks(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card shadow-lg bg-slate-100 rounded-md">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-sm text-xl hover:bg-accent hover:text-white rounded-sm btn-outline hover:border-accent text-accent">
            <FiEdit></FiEdit>
          </button>
        </div>
        <h2 className="card-title text-xl font-bold">
          {showFullTitle ? title : title.slice(0, 12)}
          {title.length > 20 && (
            <span
              onClick={toggleTitle}
              className="cursor-pointer text-accent font-semibold text-sm underline"
            >
              {showFullTitle ? " Show Less" : " Show More"}
            </span>
          )}
        </h2>
        <h2 className="text-base font-semibold">-{author}</h2>
        <p>
          {showFullDescription ? description : description.slice(0, 50)}.....{" "}
          <br />
          {description.length > 100 && (
            <span
              onClick={toggleDescription}
              className="cursor-pointer text-[#d71d24] text-sm underline font-semibold"
            >
              {showFullDescription ? " Show Less" : " Show More"}
            </span>
          )}
        </p>
        <p>Rating {rating}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm text-2xl hover:bg-[#d71d24] hover:text-white rounded-sm btn-outline hover:border-[#d71d24] text-[#d71d24]"
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageBooksCard;
