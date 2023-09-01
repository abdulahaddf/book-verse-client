
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";
import FeaturedBooks from "../../../shared/components/homeSections/FeaturedBooks";
import BestSelling from "../../../shared/components/homeSections/BestSelling";
import Banner from "../Banner/Banner";
import Sponsor from "../../../shared/components/Sponsor/Sponsor";
// import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import './Home.css'
// import SearchResultsList from "../SearchBar/SearchResultsList";
import RecentSelling from "../../../shared/components/homeSections/RecentSelling";


const Home = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      {/* All Components of home will be shown here */}
  
      {/* <div className="search-bar-container relative z-10">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div> */}
      <section className="w-11/12 mx-auto">

        <Banner></Banner>
        <Category />
        <FeaturedBooks />
        <BestSelling/>
        <RecentSelling/>
        <Sponsor></Sponsor>
      </section>
    </div>
  );
};

export default Home;
