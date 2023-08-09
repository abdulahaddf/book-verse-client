<<<<<<< HEAD
import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  return (
    <div>
      <style>
        {`
            .react-tabs__tab--selected{
              background-color: #d71d24; 
                color: #fff; 
                border-radius: 10px;
                border:0;
              }
              .react-tabs__tab-list{
                border: none;
              }
            `}
      </style>

      <div className="p-10">
        <div className="text-center p-5 ">
          <Tabs>
            <TabList>
              <Tab>Fiction</Tab>
              <Tab>Non-Fiction</Tab>
              <Tab>Mystery & Thriller</Tab>
              <Tab>Romance</Tab>
              <Tab>Science Fiction & Fantasy</Tab>
              <Tab>Biography & Memoir</Tab>
              <Tab>Self-Help & Personal Development</Tab>
              <Tab> History Science & Nature</Tab>
              <Tab>Art & Photography</Tab>
              <Tab>Cookbooks & Food Travel</Tab>
              <Tab>Health & Wellness</Tab>
              <Tab>Business & Economics</Tab>
              <Tab>Children's Books Young Adult Poetry</Tab>
              <Tab>Religion & Spirituality</Tab>
              <Tab>Philosophy Gardening & DIY</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Category;
=======


const Category = () => {
    return (
        <div>
            <h2>hello world</h2>
        </div>
    );
};

export default Category;
>>>>>>> 3de3d4b887a09d9b3454efe6bdc6dd0be69311e1
