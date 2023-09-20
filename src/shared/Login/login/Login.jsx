/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import Lottie from "react-lottie";
import animationData from "../../../../public/login.json";
import google from "../../../assets/social/google.png";
import facebook from "../../../assets/social/facebook.png";
import { toast } from "react-toastify";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 
  const { signIn, signInGoogle, signInFB, setLoading, darkMode } =
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
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "Successfully Signed In.",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        toast("Successfully Signed In")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          // Swal.fire({
          //   position: "center",
          //   icon: "eroor",
          //   title: "Invalid email or password",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          toast("Invalid email or password")
        } else {
          // Swal.fire({
          //   position: "center",
          //   icon: "eroor",
          //   title: { errorMessage },
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          toast(errorMessage.slice(10,61))
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
    <div className=" bg-gradient-to-b from-red to-secondary md:p-10    ">
      <div
        className={
          darkMode
            ? " md:flex justify-center gap-32 my-10  items-center glass p-5"
            : " md:flex justify-center my-10  items-center glass p-5"
        }
      >
        <div
          className={
            darkMode
              ? "w-full p-6 h-3/4 bg-gray border-[1px] rounded-md shadow-2xl lg:max-w-xl"
              : "w-full p-6 h-3/4 bg-white rounded-md shadow-2xl lg:max-w-xl "
          }
        >
          <h1 className="text-3xl font-semibold text-center text-red uppercase">
            Sign in
          </h1>
          <form onSubmit={handleSubmit(handleForm)} className="md:mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
                required
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
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
                className={
                  darkMode
                    ? "block text-sm font-semibold text-gray-100"
                    : "block text-sm font-semibold text-gray-800"
                }
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
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
              className="flex items-center justify-center w-full p-2 border border-red rounded-md"
            >
              <img className="h-8 w-8" src={google} alt="" />
              <span className="ml-2">Sign in with Google</span>
            </button>
          </div>
          <div className={darkMode?"flex mt-4 gap-x-2  rounded-md":"flex mt-4 gap-x-2 hover:bg-slate-200 rounded-md"}>
            <button
              onClick={handlefbSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-red rounded-md"
            >
              <img className="h-9 w-9 ml-5" src={facebook} alt="" />
              <span className="ml-2">Sign in with FaceBook</span>
            </button>
          </div>

          <p
            className={
              darkMode
                ? "mt-8 text-md font-normal text-center text-gray-300"
                : "mt-8 text-md font-normal text-center text-gray-700"
            }
          >
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
    </div>
  );
};

export default Login;
