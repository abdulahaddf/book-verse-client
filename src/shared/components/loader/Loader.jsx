
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
    <div className='w-1/4 h-[90vh] mx-auto text-center flex justify-center items-center'>
      <div className=' flex justify-center items-center'>

        <Lottie options={defaultOptions}></Lottie>
      </div>
    </div>
  )
}

export default Loader
