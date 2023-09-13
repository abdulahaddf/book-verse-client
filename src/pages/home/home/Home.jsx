
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";
import FeaturedBooks from "../../../shared/components/homeSections/FeaturedBooks";
import BestSelling from "../../../shared/components/homeSections/BestSelling";
import Banner from "../Banner/Banner";

// import SearchBar from "../SearchBar/SearchBar";
// import { useState } from "react";
import './Home.css'
// import SearchResultsList from "../SearchBar/SearchResultsList";
import RecentSelling from "../../../shared/components/homeSections/RecentSelling";
import Publications from "../../../shared/components/homeSections/Publications";

import WebsiteFeature from "../../../shared/components/homeSections/WebsiteFeature";
import SearchBar from "../SearchBar/SearchBar";
import SearchResultsList from "../SearchBar/SearchResultsList";
import KidsZone from "../../../shared/components/homeSections/KidsZone";
// import Banner from "../Banner/Banner";




const Home = () => {
  // const [results, setResults] = useState([]);
  
  
  return (
    <div >
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
        <RecentSelling />
        <KidsZone></KidsZone>
        <Publications></Publications>
        <WebsiteFeature></WebsiteFeature>
      </section>
    </div>
  );
};

export default Home;
