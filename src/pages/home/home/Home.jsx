import BookCard from "../../../shared/components/BookCard/BookCard";
import Footer from "../../../shared/footer/Footer";
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";
import Navbar from "../../../shared/navbar/Navbar";

const Home = () => {
    return (
        <div>
            {/* All Components of home will be shown here */}

               
                <Navbar></Navbar>

            <BookCard></BookCard>

          
            <Category/>
                
        

                <Footer></Footer>


        </div>


    );

};

export default Home;
