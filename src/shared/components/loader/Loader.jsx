
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
    <div className='w-1/3 mx-auto text-center'>
    <Lottie options={defaultOptions}></Lottie>
    </div>
  )
}

export default Loader
