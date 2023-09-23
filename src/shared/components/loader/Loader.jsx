
import loading from '../../../assets/animations/book-loading.json'
import Lottie from 'react-lottie';
const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='w-4/5 md:w-1/4 h-[90vh] mx-auto text-center flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-center'>

        <Lottie options={defaultOptions}></Lottie>
        <h1 className='flex text-xl'>loading <span className="loading loading-ring loading-md"></span></h1>
      </div>
    </div>
  )
}

export default Loader
