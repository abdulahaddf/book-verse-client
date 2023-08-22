import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
// import Heading from "./heading/Heading";
import UseBooks from "../../hooks/UseBooks";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorDetails/AuthorCard";
const Category = () => {
  const {books}=UseBooks();
  console.log(books)
  return (
    <div className="section">
      {/* <Heading title={'Categories'}/> */}
      <style>
        {`
            .react-tabs__tab--selected{
              background-color: #d71d24;  
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
            <TabList  className='text-xs md:text-base py-2 '>
              <Tab>All Books</Tab>
              <Tab>Author's choice</Tab>
              <Tab>Offers and Rewards</Tab>
              <Tab>Book Fair</Tab>
              <Tab>New Arrival Books</Tab>
              <Tab>E-books</Tab>
              
            </TabList>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Fiction")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
              <div className="flex justify-center py-3">
              <button className="button-52 text-white font-bold">
                <Link to={`/All`}>See more</Link>
              </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .map((card) => <AuthorCard key={card._id} card={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            {/* 
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Mystery and Thriller")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Romance")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Science Fiction")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Biography and Memoir")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Sports")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter(
                    (card) => card?.category === "History Science and Nature"
                  )
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Art and Photography")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter(
                    (card) => card?.category === "Cookbooks and Food Travel"
                  )
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Travel")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Business and Economics")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Children")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Young Adult")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Horror")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books
                  .filter((card) => card?.category === "Classics")
                  .map((card) => <CategoryCard key={card._id} data={card} />)
                  .slice(0, 4)}
              </div>
            </TabPanel> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Category;
