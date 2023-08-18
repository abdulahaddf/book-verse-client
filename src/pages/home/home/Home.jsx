import Footer from "../../../shared/footer/Footer";
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../../shared/navbar/Navbar";
import FeaturedBooks from "../../../shared/components/homeSections/FeaturedBooks";
import BestSelling from "../../../shared/components/homeSections/BestSelling";
import Banner from "../Banner/Banner";
import Sponsor from "../../../shared/components/Sponsor/Sponsor";
import SearchBar from "../SearchBar/SearchBar";


const Home = () => {
  return (
    <div>
      {/* All Components of home will be shown here */}
      <Navbar></Navbar>
      <section className="w-11/12 mx-auto">
<SearchBar></SearchBar>
        <Banner></Banner>
        <Category />
        <FeaturedBooks />
        <BestSelling/>
        <Sponsor></Sponsor>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
