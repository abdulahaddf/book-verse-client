import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
  const {author,title,cover_image,_id}= data;
  return (
    <div className="w-64 h-96 hover:rounded-sm hover:shadow-red shadow-md overflow-hidden">
      <div href="#" className="group relative block bg-black">
        <img
          alt="Developer"
          src={cover_image ||`https://i.ibb.co/Lx94QQt/book-default-data.jpg`}
          className="relative inset-0  w-full h-96  opacity-75 transition-opacity group-hover:opacity-50"
        />

        {/* <div className="absolute top-72 p-5 w-full">
          <p className="text-sm font-medium uppercase tracking-widest text-white">
            {title}
          </p>

          <p className="text-xl font-bold primary-Color sm:text-2xl ">
            {author}
          </p>
        </div> */}
        <div className="absolute bottom-0 p-5 w-full ">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            {/* <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p> */}
            <p className="text-cyan-50 text-lg">{title}</p>
            <p className="text-teal-50 py-5 text-sm">{author}</p>

            <button className="btn border-none  hover:bg-[#048cd6e6]  bg-[#048ED6] normal-case w-full text-white hover:text-white">
              <Link className="hover:text-white hover:no-underline hover:scale-125 duration-300" to={`/details/${_id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
