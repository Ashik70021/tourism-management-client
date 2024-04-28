import Banner from "./Banner";
import Countries from "./Countries";
import DiscoverDestination from "./DiscoverDestination";
import Subscribe from "./Subscribe";
import TouristSpot from "./TouristSpot";


const Home = () => {


    return (
        <div className="">
            <Banner></Banner>
            <TouristSpot></TouristSpot>
            <Countries></Countries>
            <DiscoverDestination></DiscoverDestination>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;