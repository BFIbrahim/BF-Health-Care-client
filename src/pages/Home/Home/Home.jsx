import AddDoctor from "../../../Admin Components/AddDoctor";
import Navigation from "../../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Footer from "../Fotter/Footer";
import HomeContact from "../HomeContact/HomeContact";
// import Getreview from "../Review/Getreview";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeContact></HomeContact>
            <About></About>

            <Doctors></Doctors>

            {/* <Getreview></Getreview> */}
            <Review></Review>
            {/* <AddDoctor></AddDoctor> */}

            <Footer></Footer>

            
        </div>
    );
};

export default Home;