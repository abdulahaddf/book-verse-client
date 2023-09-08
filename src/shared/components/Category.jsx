import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
// import Heading from "./heading/Heading";
import UseBooks from "../../hooks/UseBooks";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorDetails/AuthorCard";
import OfferBanner from "./Offer&Rewards/OfferBanner";
const Category = () => {
  const { books , loading } = UseBooks();
  console.log(books);
  const newArival = [...books];
  return (
    <div className="section">
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

      <div className="md:p-10">
        <div className="text-center  md:p-5">
          <Tabs>
            <TabList className="text-xs md:text-base py-2 ">
              <Tab>All Books</Tab>
              <Tab>Author's choice</Tab>
              <Tab>Offers and Rewards</Tab>
              {/* <Tab>Book Fair</Tab> */}
              <Tab>New Arrival Books</Tab>
              {/* <Tab>E-books</Tab> */}
            </TabList>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Fiction")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
              <div className="flex justify-center py-3">
                <button className="btn-fifth hover:text-white cursor-pointer">
                  <Link className="hover:text-white hover:no-underline" to={`/All/Category`}>See more</Link>
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
                <button className="btn-fifth">
                  <Link to={`/All/Authors`}>See All</Link>
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
                  .map((card) => <CategoryCard key={card._id} data={card} />)
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
