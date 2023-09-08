import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaFacebookSquare,
  FaTwitterSquare,
  FaTumblrSquare,
  FaGooglePlusSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaPaypal,
  FaStripe,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { Link } from "react-router-dom";
import appleStore from "../../assets/store/apple2.png";
import googlePlay from "../../assets/store/google2.png";
import logo from "../../assets/image/logo.png";
import { FcLock } from "react-icons/fc";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
   
    e.preventDefault();

    emailjs.sendForm('service_uiykfvf', 'template_861sgkd', form.current, 'Q7f4le_L-54TGc7Xk')
      .then((result) => {
          console.log(result.text);
          if(result.text === 'OK'){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Email has been Sent',
              showConfirmButton: false,
              timer: 1500
            })
          }
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <footer className="bg-base-200 text-base-content mt-8">
      <div className="footer w-11/12 mx-auto py-10 flex-row md:flex-col justify-between">
        <div>
          <div className=" flex items-center gap-4">
            <img className="w-12 h-12 rounded-sm" src={logo} alt="" />
            <h1 className="font-bold text-2xl text-[#126e9d]">Book verse</h1>
          </div>
          <p>
            Your premier source for captivating <br /> books across genres.
            Explore with us!
          </p>
          <h3 className="font-bold uppercase my-3">Contacts:</h3>
          <p className="flex items-center">
            <FaLocationArrow className="mr-3"></FaLocationArrow>No 45, Season
            Street,,
          </p>
          <p className="ms-[25px]">Livingstone LA Inc - 4502</p>
          <p className="flex items-center my-2">
            <FaEnvelope className="mr-3"></FaEnvelope>bookverse@gmail.com
          </p>
          <p className="flex items-center">
            <FaPhone className="mr-3"></FaPhone>+88016*****4444
          </p>
          <div className="flex items-center justify-between my-2">
            <a href="">
              <FaFacebookSquare className="text-[#3b5998] hover:bg-[#126e9d] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaFacebookSquare>
            </a>
            <a href="">
              <FaTwitterSquare className="text-[#55acee] hover:bg-[#126e9d] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaTwitterSquare>
            </a>
            <a href="">
              <FaTumblrSquare className="text-[#001833] hover:bg-[#126e9d] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm  text-3xl"></FaTumblrSquare>
            </a>
            <a href="">
              <FaGooglePlusSquare className="text-[#de4e43] hover:bg-[#126e9d] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaGooglePlusSquare>
            </a>
            <a href="">
              <FaYoutubeSquare className="text-[#ff0101] hover:bg-[#126e9d] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaYoutubeSquare>
            </a>
            <a href="">
              <FaLinkedin className="text-[#007bb5] hover:bg-[#126e9d] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaLinkedin>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase">Support</h3>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Contact Customer Service</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Product Availability</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Shipping Rates</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Order Track</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative uppercase">
            <Link>Faq</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Retailer Request</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Help Center</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">My Account</h3>

          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Your Account</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Your Information</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Addresses</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Orders history</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Delivery Information</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Search Terms</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link to="/login">Login</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">Information</h3>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link to="/terms&conditions">Terms & Condition</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Privacy Policy</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Return Policy</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Refund Policy</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Suppliers</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Sitemap</Link>
          </p>
          <p className="hover:text-[#126e9d] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>About Us</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">Contact Us</h3>
          <p>
            Contact us with any query<br /> through email
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="input input-bordered input-sm rounded-sm max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Your Email"
                name="user_email"
                className="input input-bordered input-sm rounded-sm my-3 max-w-xs"
              />
              <br />
              <textarea name="message"
              placeholder="Write your Message"
              className="input input-bordered input-sm rounded-sm my-3 max-w-xs"
               />
            </div>
            <input
              className="btn-primary rounded-sm h-9"
              type="submit"
              value="submit"
            />
          </form>
          <div className="flex">
            <Link to="https://www.apple.com/store">
              <img className="w-24 -ms-1" src={appleStore} alt="" />
            </Link>
            <Link to="https://play.google.com/store">
              <img className="w-24 " src={googlePlay} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="mx-10" />

      <div className="footer items-center py-6 w-11/12 mx-auto text-base-content">
        <div className="items-center">
          <p>Copyright © 2023 Book verse- All right reserved</p>
          <p className="mx-auto">
            Designed by{" "}
            <Link to="/dev">
              <span className="text-white px-1 bg-[#78CA42]">
                <FcLock className="inline" /> Team EndCoders
              </span>
            </Link>
          </p>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-3 md:grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end text-center">
          <a
            className="text-3xl text-[#002f86] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#126e9d] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaPaypal></FaPaypal>
          </a>
          <a
            className="text-3xl text-[#6772e5] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#126e9d] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaStripe></FaStripe>
          </a>
          <a
            className="text-3xl text-[#f79e1b] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#126e9d] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcMastercard></FaCcMastercard>
          </a>
          <a
            className="text-3xl text-[#1434cb] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#126e9d] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcVisa></FaCcVisa>
          </a>
          <a
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#126e9d] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcDiscover></FaCcDiscover>
          </a>
          <a
            className="text-3xl text-[#016fd0] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#126e9d] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <SiAmericanexpress className="rounded-md"></SiAmericanexpress>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
