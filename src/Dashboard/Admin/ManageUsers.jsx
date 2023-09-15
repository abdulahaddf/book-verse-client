import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const ManageUsers = () => {
  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy end
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://book-verse-server-phi.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://book-verse-server-phi.vercel.app/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
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
        fetch(`https://book-verse-server-phi.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full h-full ps-4 lg:p-4 md:mt-6">
      <h3 className="text-4xl font-bold text-center">
        Total Users: {users.length}
      </h3>

      <div className="w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className={darkMode ? " bg-gray text-white " : ""}>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photoURL} alt="Not Available" />
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className=" text-center">
                      {user.role === "admin" ? (
                        "admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className={
                            darkMode ? "btn-custom-dark  " : "btn-custom  "
                          }
                        >
                          Make Admin
                        </button>
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="w-full"
                    >
                      <MdDeleteForever className=" text-4xl  text-[#dc2626] hover:text-[#10aade]"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
