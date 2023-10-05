import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { GrUserSettings } from "react-icons/gr";

const ManageUsers = () => {
  // Tonmoy Start

  const { darkMode } = useContext(AuthContext);

  //  Tonmoy end
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://book-verse-team-project-server.up.railway.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://book-verse-team-project-server.up.railway.app/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: `${user.name} is an Admin Now!`,
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          toast.info(
            `${user.displayName ? user.displayName : "user"} is an Admin Now!`
          );
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
        fetch(`https://book-verse-team-project-server.up.railway.app/users/${user._id}`, {
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
    <div className="w-full h-full p-2 lg:p-4 mt-14">
      <h3 className="text-4xl font-bold text-center">
        Total Users: {users.length}
      </h3>

      <>
        <div className="max-w-[414px] md:max-w-[768px] lg:max-w-full overflow-x-auto mx-auto">
          <table className="table">
            {/* head */}
            <thead
              className={
                darkMode ? " bg-gray text-white  text-center" : " text-center"
              }
            >
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
                  <td>{user.displayName}</td>
                  <td className="text-red">{user.email}</td>
                  <td className="mr-2">
                    <div className="flex gap-2  text-center">
                      {user.role === "admin" ? (
                        <button className="btn btn-sm">
                          Admin <GrUserSettings />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className={
                            darkMode
                              ? "btn-custom-dark  normal-case"
                              : "btn-custom  normal-case"
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
                      className="w-full p-5"
                    >
                      <MdDeleteSweep className=" text-4xl mx-auto  text-[#dc2626] hover:text-[#ff7479]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default ManageUsers;
