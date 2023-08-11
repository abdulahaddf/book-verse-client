import Footer from "../../../shared/footer/Footer";
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../../shared/navbar/Navbar";
import FeaturedBooks from "../../../shared/components/homeSections/FeaturedBooks";
import PopularAuthor from "../../../shared/components/homeSections/PopularAuthor";
import Banner from "../Banner/Banner";
import Sponsor from "../../../shared/components/Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      {/* All Components of home will be shown here */}
      <Navbar></Navbar>

      <section className="w-11/12 mx-auto">
<Banner></Banner>
      <Category />
      <FeaturedBooks/>
      <PopularAuthor/>
      <Sponsor></Sponsor>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
