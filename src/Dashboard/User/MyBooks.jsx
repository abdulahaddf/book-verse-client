import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";

const MyBooks = () => {
    const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  // console.log(books);
  useEffect(() => {
    fetch(
      `http://localhost:5000/myBooks?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [user, books]);
  const handleDelete = (book) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your Book will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/delete/${book._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your book has been deleted.", "success");
            }
          });
      }
    });
  };
    return (
        <div className="w-full h-full">
            {/* <h1 className="text-3xl text-center font-semibold my-5">Your Selling Books</h1> */}
            <div>
            {books.length > 0 ? (
        <>
          <Zoom>
            {" "}
            <h1 className="text-3xl text-center font-semibold my-5">
            Your Selling Books : {books.length}
            </h1>
          </Zoom>
          <div className="overflow-x-auto">
            <table className="table table-zebra shadow-xl w-full text-center">
              {/* head */}
              <thead className="bg-black text-white">
                <tr>
                  <th>#</th>
                  <th>Book Cover</th>
                  <th>Book Name</th>
                  <th>Posting Date</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-32 rounded-md"
                        src={book.cover_image}
                        alt=""
                      />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.postDate}</td>
                    <td>{book.offer_price}</td>
                    <td>
                      <button className="">Pending</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(book)} className="btn-custom">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <Zoom>
            <div className="text-center shadow-lg  flex flex-col p-5 justify-center items-center">
            {" "}
            <h1 className="text-3xl text-center font-semibold my-5">You&apos;ve Not listed any books yet</h1>
              <h3 className="text-3xl  font-semibold my-10">
                Please add a book for selling
              </h3>
            </div>
          </Zoom>
        </>
      )}
            </div>
        </div>
    );
};

export default MyBooks;