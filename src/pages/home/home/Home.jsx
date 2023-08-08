import BookCard from "../../../shared/components/BookCard/BookCard";
import Footer from "../../../shared/footer/Footer";
import Category from "../../../shared/components/Category";
import "react-tabs/style/react-tabs.css";

const Home = () => {
    return (
        <div>
            {/* All Components of home will be shown here */}


            <BookCard></BookCard>

            <div>
                <h1 className="text-5xl text-center">WELCOME TO THE BOOK VERSE</h1>
                <Footer></Footer>
                <h1>updated</h1>
            </div>

            <Category/>


        </div>


    );

};

export default Home;
