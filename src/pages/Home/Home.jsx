
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner";
import Collection from "./Collection";
import PopularPlace from "./PopularPlace";
import Review from "./Review";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Advertisement></Advertisement>
           <Collection></Collection>
           <Review></Review>
           <PopularPlace></PopularPlace>
        </div>
    );
};

export default Home;