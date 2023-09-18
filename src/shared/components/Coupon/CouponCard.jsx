import { useContext } from 'react';
import barImg from '../../../assets/image/bar.png'
import { AuthContext } from '../../../provider/AuthProvider';

const CouponCard = ({data}) => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className={`flex outline-dotted w-fit outline-8 -outline-offset-[6px] outline-white`}>
      <div className='p-5 bg-slate-200'>
        <img src={barImg} alt="" className='h-28' />
      </div>
      <div className='bg-blue-600 p-5'>
        <h2 className='text-white text-4xl mb-1'>Coupon</h2>
        <div className='bg-white flex text-4xl items-center p-2 gap-5 rounded-md coupon md:min-w-[13.875rem] min-h-[82px]'>
            <h2 className='text-4xl px-2 comment'>SAVE  </h2>
            {/* <span className='text-xs rotate-[90deg] font-medium text-slate-400 absolute'>upto</span> */}
            <h2 className='bg-blue-600 text-white p-2 rounded-md comment'>{data?.discount&& data?.discount}%</h2>
            <h2 className="replies text-2xl font-bold mx-auto">{data?.promo && data?.promo}</h2>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
