import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Zoom } from "react-awesome-reveal";
const TouristSpot = () => {
    const { loading } = useContext(AuthContext)
    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(() => {
        fetch('https://tourism-management-server.vercel.app/AddTouristSpot')
            .then(res => res.json())
            .then(data => {
   
                if (data.length > 6) {
                    data = data.slice(0, 6);
                }
                setItems(data);
            })
    }, [])


    return (
        <div className="container mx-auto mt-24">
            <h1 className=" text-3xl md:text-6xl font-bold text-center mb-8">Most Popular Destination!</h1>
            <p className="text-xl md:text-2xl text-center pr-4 pl-4">Experience the World's Most Popular Destinations: Explore Iconic Culture, History, and Adventure in These Must-Visit Locations!</p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                {
                    items.map(item => <div key={item._id} className="mx-auto">
                        <Zoom> 
                        <div className="hover:-translate-y-5 duration-700 relative m-4 border-solid border-2 border-[#90D26D] max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{item.tourists_spot_name}</h2>
                                    <h2 className="text-xl font-semibold tracking-wide">{item.country_Name}</h2>
                                    <p className="dark:text-gray-800">{item.short_description}</p>
                                </div>
                                <Link to={`/viewdetails/${item._id}`}><button type="button" className="btn bg-[#90D26D] border-none flex text-lg items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-gray-900">View Details</button></Link>
                            </div>
                        </div>
                        </Zoom>
                    </div>)
                }
            </div>
            <div className="text-lg md:text-2xl flex justify-end mr-8 md:mr-16">
                <Link to='/allTouristSpot'><p className="underline  dark:text-gray-800">View All</p></Link>
            </div>
        </div>
    );
};

export default TouristSpot;