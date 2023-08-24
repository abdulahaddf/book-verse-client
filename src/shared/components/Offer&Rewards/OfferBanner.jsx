import { ImGift } from "react-icons/im";

const OfferBanner = () => {
  return (
    <div className="h-[28rem] w-full rounded-lg shadow-lg bg-cover bg-no-repeat bg-[url(https://img.freepik.com/free-photo/cyber-monday-label-credit-cards_23-2148670003.jpg?w=1380&t=st=1692874113~exp=1692874713~hmac=c28fbc55b9f5474b1848d06051b3c047fd4802d87a762f8df904eb841faae572)]">
      <div className="flex justify-center p-3 items-end md:items-center h-full md:justify-end">
        <div className="bg-[#F9F871] rounded-lg bg-opacity-80 p-5">
          <h2 className="text-xl font-medium text-slate-600"><ImGift className="inline text-3xl animate-pulse text-red" /> Unlock
            Exclusive Offers and Rewards!
          </h2>
          <p className="my-2 text-slate-600 text-xs">Login to Your Account and Claim Your Exclusive Rewards!</p>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
