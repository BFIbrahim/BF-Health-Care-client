import Navigation from "../../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import HomeContact from "../HomeContact/HomeContact";
import Getreview from "../Review/Getreview";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeContact></HomeContact>
            <About></About>

            {/* <Getreview></Getreview> */}
            <Review></Review>
        </div>
    );
};

export default Home;