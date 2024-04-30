
import { useContext, useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const AllTouristSpot = () => {
    const [items, setItems] = useState([]);
    const { setLoading, loading } = useContext(AuthContext);
    useEffect(() => {
        setLoading(true);
        fetch("https://tourism-management-server.vercel.app/AddTouristSpot")
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
            .finally(() => {
                setLoading(false);
            })

    }, [])

    const handleSortByAverageCost = () => {
        const sortedItems = [...items].sort((a, b) => parseFloat(a.average_cost) - parseFloat(b.average_cost));
        setItems(sortedItems);
    };

    return (
        <div className="container mx-auto mt-16">
            <h1 className=" text-4xl md:text-6xl font-bold text-center mb-8">Embark Your Exploring Today</h1>
            <p className="text-xl md:text-2xl text-center">Explore Breathtaking Destinations and Create Unforgettable Memories with Our Ultimate Tourism Guide Today.</p>
            <div className="flex justify-center mb-8 mt-16">
                <button type="button" onClick={handleSortByAverageCost} className="px-8 py-3 text-xl font-semibold border rounded border-gray-800 bg-[#90D26D] text-gray-800">Sort by Average Cost</button>
            </div>
            {loading && <div className="mx-auto w-full flex justify-center ">
                <span className="loading loading-spinner loading-lg"></span>
            </div>}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                {
                    items.map(item => <div className="mx-auto" key={item._id}>
                        <Zoom>
                            <div className="m-4  hover:-translate-y-5 duration-700 max-w-sm rounded-md border-solid border-2 border-[#90D26D] dark:bg-gray-50 dark:text-gray-800">
                                <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{item.tourists_spot_name}</h2>
                                        <h2 className="text-xl font-semibold tracking-wide">{item.country_Name}</h2>
                                        <h2 className="text-lg font-semibold tracking-wide">Average Cost: {item.average_cost}</h2>
                                        <p className="dark:text-gray-800">{item.short_description}</p>
                                    </div>
                                    <Link to={`/viewdetails/${item._id}`}><button type="button" className="btn bg-[#90D26D] text-gray-900 border-none text-lg flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-gray-50">View Details</button></Link>
                                </div>
                            </div>
                        </Zoom>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;