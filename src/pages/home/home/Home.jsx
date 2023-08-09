import BookCard from "../../../shared/components/BookCard/BookCard";
import Footer from "../../../shared/footer/Footer";
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";

const Home = () => {
    return (
        <div>
            {/* All Components of home will be shown here */}

                <h1 className="text-3xl text-center">WELCOME TO THE BOOK VERSE</h1>

            <BookCard></BookCard>

          
            <Category/>
                
        

                <Footer></Footer>


        </div>


    );

};

export default Home;
