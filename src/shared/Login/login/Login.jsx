/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import Navbar from "../../navbar/Navbar";
import { AuthContext } from "../../../provider/AuthProvider";
import Lottie from "react-lottie";
import animationData from "../../../assets/animations/login.json";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { signIn, signInGoogle, signInFB, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleForm = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Signed In.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          Swal.fire({
            position: "top-end",
            icon: "eroor",
            title: "Invalid email or password",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "eroor",
            title: { errorMessage },
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
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
              position: "top-end",
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
  // Handle FB signin
  const handlefbSignIn = () => {
    signInFB()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
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
              position: "top-end",
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
    <>
      <Navbar></Navbar>
      <div className=" md:flex justify-center my-10 ">
        <div className="w-full p-6 h-3/4 bg-white rounded-md shadow-2xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-red uppercase">
            Sign in
          </h1>
          <form onSubmit={handleSubmit(handleForm)} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
                required
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>

            <div className="mb-2 relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className={`block w-full px-4 py-2 pr-10 mt-2 text-red bg-white border rounded-md focus:border-red focus:ring-red focus:outline-none focus:ring focus:ring-opacity-40 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-1/2 mt-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
              {errors.password && (
                <span className="error">Password is required</span>
              )}
            </div>
            <Link to="/forget" className="text-xs text-red hover:underline">
              Forget Password?
            </Link>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red">
                Login
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div>
          <div className="flex mt-4 gap-x-2 hover:bg-slate-200">
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
              <span className="ml-2">Sign in with Google</span>
            </button>
          </div>
          <div className="flex mt-4 gap-x-2 hover:bg-slate-200">
            <button
              onClick={handlefbSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-red rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-red"
            >
              <FaFacebookF></FaFacebookF>
              <span className="ml-2">Sign in with FaceBook</span>
            </button>
          </div>

          <p className="mt-8 text-md font-normal text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-lg text-red hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};

export default Login;
