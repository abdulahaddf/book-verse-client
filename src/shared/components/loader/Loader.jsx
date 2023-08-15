import { FadeLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <FadeLoader color="#d71d24" />
    </div>
  )
}

export default Loader
