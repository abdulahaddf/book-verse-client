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
import appleStore from "../../assets/store/apple.png";
import googlePlay from "../../assets/store/google.png";
import logo from "../../assets/image/logo.jpg";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer p-10 flex-row md:flex-col justify-between">
        <div>
          <div className=" flex items-center gap-4">
            <img className="w-16 h-12 rounded-sm" src={logo} alt="" />
            <h1 className="font-bold text-2xl text-[#d71d24]">Book verse</h1>
          </div>
          <p>
            Your premier source for captivating <br /> books across genres.
            Explore with us!
          </p>
          <h3 className="font-bold uppercase my-3">Contact Us:</h3>
          <p className="flex items-center">
            <FaLocationArrow className="mr-3"></FaLocationArrow>No 45, Season
            Street,,
          </p>
          <p className="ms-6">Livingstone LA Inc - 4502</p>
          <p className="flex items-center my-2">
            <FaEnvelope className="mr-3"></FaEnvelope>bookverse@gmail.com
          </p>
          <p className="flex items-center">
            <FaPhone className="mr-3"></FaPhone>+88016*****4444
          </p>
          <div className="flex items-center justify-between my-2">
            <a href="">
              <FaFacebookSquare className="text-[#3b5998] hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaFacebookSquare>
            </a>
            <a href="">
              <FaTwitterSquare className="text-[#55acee] hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaTwitterSquare>
            </a>
            <a href="">
              <FaTumblrSquare className="text-[#001833] hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm  text-3xl"></FaTumblrSquare>
            </a>
            <a href="">
              <FaGooglePlusSquare className="text-[#de4e43] hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaGooglePlusSquare>
            </a>
            <a href="">
              <FaYoutubeSquare className="text-[#ff0101] hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaYoutubeSquare>
            </a>
            <a href="">
              <FaLinkedin className="text-[#007bb5] hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaLinkedin>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase">Support</h3>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Contact Customer Service</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Product Availability</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Shipping Rates</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Order Track</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative uppercase">
            <Link>Faq</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Retailer Request</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Help Center</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">My Account</h3>

          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Your Account</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Your Information</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Addresses</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Orders history</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Delivery Information</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Search Terms</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Login</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">Information</h3>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Terms And Condition</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Privacy Policy</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Return Policy</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Refund Policy</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Suppliers</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>Sitemap</Link>
          </p>
          <p className="hover:text-[#d71d24] duration-300 transition hover:translate-x-1 ease-in relative">
            <Link>About Us</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">NewSeller</h3>
          <p>
            Subscribe to our mailing list to get <br /> email updates
          </p>
          <form>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-sm rounded-sm max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-sm rounded-sm my-3 max-w-xs"
              />
            </div>
            <input
              className="py-2 px-3 btn btn-sm hover:bg-[#d71d24] hover:text-white rounded-sm btn-outline hover:bordered:[#d71d24] text-[#d71d24]"
              type="submit"
              value="Subscribe"
            />
          </form>
          <div className="flex -mt-6">
            <a href="">
              <img className="w-24 h-24 -ms-1" src={appleStore} alt="" />
            </a>
            <a href="">
              <img className="w-24 h-24" src={googlePlay} alt="" />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer items-center py-6 px-10 text-base-content">
        <div className="items-center">
          <p>Copyright © 2023 Book verse- All right reserved</p>
          <p>
            Designed by <span className="text-[#d71d24]">Team EndCoders</span>
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-flow-col gap-4 md:place-self-center md:justify-self-end text-center">
          <a
            className="text-3xl text-[#002f86] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaPaypal></FaPaypal>
          </a>
          <a
            className="text-3xl text-[#6772e5] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaStripe></FaStripe>
          </a>
          <a
            className="text-3xl text-[#f79e1b] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcMastercard></FaCcMastercard>
          </a>
          <a
            className="text-3xl text-[#1434cb] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcVisa></FaCcVisa>
          </a>
          <a
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcDiscover></FaCcDiscover>
          </a>
          <a
            className="text-3xl text-[#016fd0] bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
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
