import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";
import FeaturedBooks from "../../../shared/components/homeSections/FeaturedBooks";
import BestSelling from "../../../shared/components/homeSections/BestSelling";
import Banner from "../Banner/Banner";
import "./Home.css";
import RecentSelling from "../../../shared/components/homeSections/RecentSelling";
import Publications from "../../../shared/components/homeSections/Publications";
import KidsZone from "../../../shared/components/homeSections/KidsZone";
import { Helmet } from "react-helmet";
const Home = () => {
 

  return (
    <div>
        <Helmet>
          <title>Book Verse | Home</title>
        </Helmet>
      {/* All Components of home will be shown here */}

      <section className="w-11/12 mx-auto">
        <Banner></Banner>
        <Category />
        <FeaturedBooks />
        <BestSelling />
        <RecentSelling />
        <KidsZone></KidsZone>
        <Publications></Publications>
      </section>
    </div>
  );
};

export default Home;
