import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseBooks from "../../hooks/UseBooks";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorDetails/AuthorCard";
import OfferBanner from "./Offer&Rewards/OfferBanner";
import ProductCard from "./productCard/ProductCard";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
const Category = () => {
  const { books, loading } = UseBooks();
  console.log(books);
  const newArival = [...books];

  // Tonmoy start
  const { darkMode } = useContext(AuthContext);
  // Tonmoy end
  return (
    <div className={`${darkMode ? "section bg-gray   " : "section"}`}>
      {/* <Heading title={'Categories'}/> */}
      <style>
        {`
            .react-tabs__tab--selected{
              background-color: #048ED6;  
              opacity: 90%;
              color: #fff; 
              border-radius: 10px;
              border:0;
              }
              .react-tabs__tab-list{
                border: none;
              }
            `}
      </style>

      <div className="">
        <div className="text-center  md:p-5">
          <Tabs>
            <TabList className="text-xs md:text-base py-2  ">
              <Tab>All Books</Tab>
              <Tab>Author&apos;s choice</Tab>
              <Tab>Offers and Rewards</Tab>
              {/* <Tab>Book Fair</Tab> */}
              <Tab>New Arrival Books</Tab>
              {/* <Tab>E-books</Tab> */}
            </TabList>
            <TabPanel>
              {loading ? (
                <Skeleton count={3} className="my-4 w-32 h-28 flex" />
              ) : (
                <div className="md:p-5 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 justify-items-center">
                  {books
                    .filter((card) => card?.category === "Fiction")
                    .map((book) => (
                      <ProductCard
                        key={book._id}
                        data={book}
                        loading={loading}
                      ></ProductCard>
                    ))
                    .slice(0, 5)}
                </div>
              )}
              <div className="flex justify-center py-3">
                <button
                  className={`${
                    darkMode
                      ? " btn-fifth-dark cursor-pointer hover:font-[500]"
                      : "btn-fifth cursor-pointer"
                  }`}
                >
                  <Link
                    className={
                      darkMode
                        ? "hover:text-black hover:no-underline hover:font-[500]"
                        : "hover:text-white hover:no-underline hover:font-[500]"
                    }
                    to={`/All/Category`}
                  >
                    See more
                  </Link>
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .map((card) => <AuthorCard key={card._id} card={card} />)
                  .slice(0, 4)}
              </div>
              <div className="flex justify-center py-3">
                <button
                  className={`${
                    darkMode ? " btn-fifth-dark hover:font-[500]" : "btn-fifth "
                  }`}
                >
                  <Link
                    className={
                      darkMode
                        ? "hover:text-black hover:no-underline hover:font-[500]"
                        : "hover:text-white hover:no-underline hover:font-[500]"
                    }
                    to={`/All/Authors`}
                  >
                    See All
                  </Link>
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5">
                <OfferBanner />
              </div>
            </TabPanel>
            {/* <TabPanel /> */}
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {newArival
                  .reverse()
                  .map((book) => (
                    <ProductCard
                      key={book._id}
                      data={book}
                      loading={loading}
                    ></ProductCard>
                  ))
                  .slice(0, 4)}
              </div>
            </TabPanel>
            {/* <TabPanel /> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Category;
