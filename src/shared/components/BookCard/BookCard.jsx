import "./BookCard.css";

const BookCard = () => {
  return (
    <div className=" mx-auto my-5 py-10  ">
      {/* card 1 start */}
      <div
        className="group book-card-container relative block bg-black h-11/12
            overflow-hidden "
      > 
        <img
          alt="Developer"
          src="https://i.ibb.co/Hh6CkGD/71im6-JWXVu-L-AC-UF1000-1000-QL80.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30  book-card-img "
        />

        <div className="relative px-8 flex justify-between   ">
          <div className="mt-32 sm:mt-48 lg:mt-[30%]   ">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100  duration-500  ">
              <h3 className="text-[20px] text-white my-5 ">
                Name: By The Book
              </h3>
              <p className="text-[18px] text-white my-5 ">
                Author: Jasmine Juillory
              </p>

              <p className="text-[18px] text-white my-5">Price: $45</p>

              <div className=" flex items-center  mt-5 pb-[30px]">
                <p className="text-[18px] text-white mr-2">Rating:</p>
                <div>
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>

              <div>
                <section className="flex gap-3 w-full    ">
                  <div>
                    <button className="btn-card  ">Rent Now</button>
                  </div>
                  <div>
                    <button className="btn-card  ">Buy Now</button>
                  </div>
                </section>

                <section className=" my-5">
                  <button className="btn-card w-full ">Add to Cart</button>
                </section>
                <section className=" my-5">
                  <button className="btn-card w-full ">View Details</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
