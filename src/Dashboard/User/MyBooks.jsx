import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { MdDeleteSweep } from "react-icons/md";

const MyBooks = () => {
  const { user, darkMode } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  // console.log(books);
  useEffect(() => {
    fetch(
      `https://book-verse-server-phi.vercel.app/myBooks?email=${user.email}`
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
        fetch(`https://book-verse-server-phi.vercel.app/delete/${book._id}`, {
          method: "DELETE",
        })
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
    <div className="w-full ps-4 h-full lg:px-4 mt-10">
      {/* <h1 className="text-3xl text-center font-semibold my-5">Your Selling Books</h1> */}
      <div>
        {books.length > 0 ? (
          <>
            <Zoom>
              {" "}
              <h1 className={darkMode?"dashboard-heading-dark":"dashboard-heading"}>
              Your Posted Books  <span className="text-slate-500">{books.length && books.length}</span> 
              </h1>
            </Zoom>
            <div className="max-w-[414px] md:max-w-[768px] lg:max-w-full overflow-x-auto mx-auto">
              <table className="table table-zebra shadow-xl text-center rounded-md">
                {/* head */}
                <thead
                  className={
                    darkMode ? "bg-gray text-white" : "bg-red text-white"
                  }
                >
                  <tr>
                    <th>No</th>
                    <th>Book Cover</th>
                    <th>Book Name</th>
                    <th>Posting Date</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={book._id}>
                      <th className={darkMode ? "bg-black/90" : ""}>
                        {index + 1}
                      </th>
                      <td className={darkMode ? "bg-black/90" : ""}>
                        <img
                          className="w-32 rounded-md"
                          src={book.cover_image}
                          alt=""
                        />
                      </td>
                      <td className={darkMode?"bg-black/90 text-lg font-semibold ":" text-lg font-semibold text-slate-600"}>{book.title}</td>
                      <td className={darkMode?"bg-black/90":""}>{book.postDate}</td>
                      <td className={darkMode?"bg-black/90 text-success":" text-success"}>$ {book.offer_price}</td>
                      <td className={darkMode?"bg-black/90":""}>
                        <button className="">Pending</button>
                      </td>
                      <td className={darkMode ? "bg-black/90" : ""}>
                        <button
                          onClick={() => handleDelete(book)}
                          className={
                            darkMode
                              ? " btn btn-info hover:ring-1 btn-sm text-white  normal-case"
                              : "btn btn-info hover:ring-1 text-white btn-sm normal-case"
                          }
                        >
                          Delete <MdDeleteSweep className="text-lg text-error"/>
                        </button>
                      </td>
                    </tr>
                  )).reverse()}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <Zoom>
              <div className="text-center shadow-lg  flex flex-col p-5 justify-center items-center">
                {" "}
                <h1 className="text-3xl text-center font-semibold my-5">
                  You&apos;ve Not listed any books yet
                </h1>
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
