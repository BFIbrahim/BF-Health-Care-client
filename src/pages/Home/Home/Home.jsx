import Navigation from "../../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeContact></HomeContact>
            <About></About>
        </div>
    );
};

export default Home;