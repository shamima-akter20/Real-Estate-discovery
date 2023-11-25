
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner";
import Collection from "./Collection";
import PopularPlace from "./PopularPlace";
import Review from "./Review";
import Sell from "./Sell";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Advertisement></Advertisement>
           <Collection></Collection>
           <Review></Review>
           <PopularPlace></PopularPlace>
           <Sell></Sell>
        </div>
    );
};

export default Home;