import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UseBooks from "../../../hooks/UseBooks";
import CategoryCard from "../CategoryCard";
import { useEffect } from "react";

const BookCollections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { books } = UseBooks();
  console.log(books);
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="py-5">
      <div className="mx-5 md:mx-16  p-6 bg-[#F1EDFF] rounded-md">
        <h2 className="text-slate-900 text-xl font-semibold">Book Collections</h2>
      </div>
      <section>
        <div>
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
                <TabList className="text-xs md:text-base py-4">
                  <Tab>Fiction</Tab>
                  <Tab>Comics</Tab>
                  <Tab>Mystery & Thriller</Tab>
                  <Tab>Romance</Tab>
                  <Tab>Science Fiction </Tab>
                  <Tab>Biography & Memoir</Tab>
                  <Tab>Sports</Tab>
                  <Tab> History Science & Nature</Tab>
                  <Tab>Art & Photography</Tab>
                  <Tab>Cookbooks & Food Travel</Tab>
                  <Tab>Travel</Tab>
                  <Tab>Business & Economics</Tab>
                  <Tab>Children </Tab>
                  <Tab>Young Adult </Tab>
                  <Tab>Horror</Tab>
                  <Tab>Classics</Tab>
                </TabList>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 place-content-center justify-items-center">
                    {books
                      .filter((card) => card?.category === "Fiction")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                  <div className="flex justify-center py-3"></div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Comics")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter(
                        (card) => card?.category === "Mystery and Thriller"
                      )
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Romance")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Science Fiction")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter(
                        (card) => card?.category === "Biography and Memoir"
                      )
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Sports")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter(
                        (card) =>
                          card?.category === "History Science and Nature"
                      )
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter(
                        (card) => card?.category === "Art and Photography"
                      )
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter(
                        (card) => card?.category === "Cookbooks and Food Travel"
                      )
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Travel")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter(
                        (card) => card?.category === "Business and Economics"
                      )
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Children")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Young Adult")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Horror")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                    {books
                      .filter((card) => card?.category === "Classics")
                      .map((card) => (
                        <CategoryCard key={card._id} data={card} />
                      ))}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCollections;
