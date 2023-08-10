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
import {SiAmericanexpress} from "react-icons/si"
import { Link } from "react-router-dom";
import img1 from "../../assets/store/apple.png";
import img2 from "../../assets/store/google.png";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer p-10 flex-row md:flex-col justify-between">
        <div>
          <h3 className="font-bold uppercase">Book Verse</h3>
          {/* <img src="" alt="" /> */}
          <p>
            Your premier source for captivating books <br /> across genres.
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
              <FaFacebookSquare className="hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaFacebookSquare>
            </a>
            <a href="">
              <FaTwitterSquare className="hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaTwitterSquare>
            </a>
            <a href="">
              <FaTumblrSquare className="hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm  text-3xl"></FaTumblrSquare>
            </a>
            <a href="">
              <FaGooglePlusSquare className="hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaGooglePlusSquare>
            </a>
            <a href="">
              <FaYoutubeSquare className="hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaYoutubeSquare>
            </a>
            <a href="">
              <FaLinkedin className="hover:bg-[#d71d24] hover:text-white hover:py-1 hover:px-1 duration-300 rounded-sm text-3xl"></FaLinkedin>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase">Support</h3>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Contact Customer Service</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Product Availability</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Shipping Rates</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Order Track</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1 uppercase">
            <Link>Faq</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Retailer Request</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Help Center</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">My Account</h3>

          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Your Account</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Your Information</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Addresses</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Orders history</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Delivery Information</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Search Terms</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Login</Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase">Information</h3>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Terms And Condition</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Privacy Policy</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Return Policy</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Refund Policy</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Suppliers</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
            <Link>Sitemap</Link>
          </p>
          <p className="hover:bg-[#d71d24] hover:text-white hover:py-1  hover:px-1 duration-300 rounded-sm transition hover:translate-x-1">
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
                className="input input-bordered input-sm rounded-sm w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-sm rounded-sm w-full my-3 max-w-xs"
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
              <img className="w-24 h-24 -ms-1" src={img1} alt="" />
            </a>
            <a href="">
              <img className="w-24 h-24" src={img2} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer items-center bg-slate-200 py-4 px-10 text-base-content">
        <div className="items-center">
          <p>Copyright © 2023 Book verse- All right reserved</p>
          <p>
            Designed by <span className="text-[#d71d24]">Team EndCoders</span>
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-flow-col gap-4 md:place-self-center md:justify-self-end text-center">
          <a
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaPaypal></FaPaypal>
          </a>
          <a
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaStripe></FaStripe>
          </a>
          <a
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <FaCcMastercard></FaCcMastercard>
          </a>
          <a
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
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
            className="text-3xl bg-white px-4 py-2 rounded-md inline-block hover:bg-[#d71d24] hover:scale-105 hover:text-white duration-1000"
            href=""
          >
            <SiAmericanexpress></SiAmericanexpress>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
