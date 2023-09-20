import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import animationData from "../../../../public/reg.json";
import Lottie from "react-lottie";

const Register = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const {
    createUser,
    signInGoogle,
    signInFB,
    profileUpdate,
    setLoading,
    darkMode,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const passwordValue = watch("password", "");

  //  tonmoy start
  const handleReg = (data) => {
    const { name, email, password, url } = data;

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Image_Upload_token
    }`;

    const coverForm = new FormData();
    coverForm.append("image", url[0]);

    fetch(imageUploadUrl, {
      method: "POST",
      body: coverForm,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageURL = imageResponse.data.display_url;

          createUser(email, password)
            .then(() => {
              profileUpdate({ displayName: name, photoURL: imageURL }).then(
                () => {
                  const saveUser = {
                    displayName: data.name,
                    email: data.email,
                    photoURL: imageURL,
                    role: "user",
                  };
                  fetch("https://book-verse-server-phi.vercel.app/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      if (data.insertedId) {
                        reset();
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "User created successfully.",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        navigate(from, { replace: true });
                      }
                    });
                }
              );
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((error) => console.log(error));
  };

  //  tonmoy end

  // createUser(email, password)
  //   .then(() => {
  //     profileUpdate({ displayName: name, photoURL: url }).then(() => {
  //       const saveUser = {
  //         name: data.name,
  //         email: data.email,
  //         photoURL: data.url,
  //       };
  //       fetch("https://book-verse-server-phi.vercel.app/users", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(saveUser),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.insertedId) {
  //             reset();
  //             Swal.fire({
  //               position: "top-end",
  //               icon: "success",
  //               title: "User created successfully.",
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //             navigate(from, { replace: true });
  //           }
  //         });
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          displayName: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
          role: "user",
        };
        fetch("https://book-verse-server-phi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            console.log(result.user);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })

      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  // Handle FB signin
  const handlefbSignIn = () => {
    signInFB()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          displayName: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
          role: "user",
        };
        fetch("https://book-verse-server-phi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            console.log(result.user);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Signed In",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })

      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <div className=" bg-gradient-to-b from-red to-secondary md:p-10  md:flex justify-center ">
      <div className="relative flex flex-col justify-center my-4 overflow-hidden glass p-5 md:w-1/2">
        <div
          className={
            darkMode
              ? "w-full p-6 m-auto bg-gray border-[1px] rounded-md shadow-xl lg:max-w-xl"
              : "w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl"
          }
        >
          <h1 className="text-3xl font-semibold text-center text-red uppercase">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(handleReg)} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="name"
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.name && <span className="error">Name is required</span>}
            <div className="mb-2">
              <label
                htmlFor="email"
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                {...register("email", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.email && <span className="error">Email is required</span>}
            <div className="mb-2">
              <label
                htmlFor="url"
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
              >
                Photo Url
              </label>
              <input
                type="file"
                id="url"
                required
                {...register("url")}
                className="block   mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40
                input file-input file-input-bordered w-full file-input-info"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                    message:
                      "Password must contain an uppercase letter, a lowercase letter, a number, and a special character",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
            <div className="mb-2">
              <label
                htmlFor="confirmPassword"
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match",
                })}
                className="block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword.message}</span>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red"
              >
                Register
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div
              className={
                darkMode
                  ? "absolute px-5 bg-[#3C4043]"
                  : "absolute px-5 bg-white"
              }
            >
              Or
            </div>
          </div>
          <div  className={darkMode?"flex mt-4 gap-x-2  rounded-md":"flex mt-4 gap-x-2 hover:bg-slate-200 rounded-md"}>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-red rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-red"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <span className="ml-2">Sign up with Google</span>
            </button>
          </div>
          <div  className={darkMode?"flex mt-4 gap-x-2  rounded-md":"flex mt-4 gap-x-2 hover:bg-slate-200 rounded-md"}>
            <button
              onClick={handlefbSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-red rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-red"
            >
              <FaFacebookF></FaFacebookF>
              <span className="ml-2">Sign up with FaceBook</span>
            </button>
          </div>

          <p
            className={
              darkMode
                ? "mt-8 text-md font-normal text-center text-gray-300"
                : "mt-8 text-md font-normal text-center text-gray-700"
            }
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-lg text-red hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 w-11/12 mx-auto">
        
        <Lottie options={defaultOptions} />
    
    </div>
    </div>
  );
};

export default Register;
