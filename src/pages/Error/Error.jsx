import React from 'react';
import errorData from '../../assets/animations/error.json'
import Lottie from 'react-lottie';
import { FaArrowCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Error = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return (
        <div className='w-2/5 mx-auto text-center'>
            <Lottie options={defaultOptions}></Lottie>
            <Link to='/'><button className='px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red'> <FaArrowLeft className='inline text-xs'></FaArrowLeft>  Back to Home</button></Link>
        </div>
    );
};

export default Error;






