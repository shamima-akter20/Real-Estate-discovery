
import Advertisement from "./Advertise/Advertisement";
import Banner from "./Banner";
import Collection from "./Collection";
import Review from "./Review";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Advertisement></Advertisement>
           <Collection></Collection>
           <Review></Review>
        </div>
    );
};

export default Home;