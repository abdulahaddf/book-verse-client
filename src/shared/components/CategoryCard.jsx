const CategoryCard = () => {
  return (
    <div className="w-64 hover:rounded-sm hover:shadow-red shadow-md overflow-hidden">
      <a href="#" className="group relative block bg-black">
        <img
          alt="Developer"
          src="https://i.ibb.co/Lx94QQt/book-default-data.jpg"
          className="relative inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="absolute top-72 p-5 w-full">
          <p className="text-sm font-medium uppercase tracking-widest text-white">
            The Great Gatsby
          </p>

          <p className="text-xl font-bold primary-Color sm:text-2xl">
            F. Scott Fitzgerald
          </p>
        </div>
        <div className="absolute top-40 p-5 w-full">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            {/* <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p> */}
            <button className="btn btn-ghost hover:bg-rose-500 normal-case w-full text-white">
              Details
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
