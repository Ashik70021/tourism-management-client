
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const CountryDetails = () => {
    const { setLoading, loading } = useContext(AuthContext);
    const [newItems, setNewItems] = useState([]);
    console.log(newItems)
    const items = useLoaderData();
    console.log(items)
    const { name } = useParams();
    console.log(name);

    useEffect(() => {
        setLoading(true);
        fetch("https://tourism-management-server.vercel.app/AddTouristSpot")
            .then(res => res.json())
            .then(data => {
                const newData = data.filter(item => item.country_Name === name);
                setNewItems(newData)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <div className="container mx-auto mt-16">
                <h1 className="text-4xl font-bold text-center">Most Popular Spot in <br /> <span className="text-6xl">{name}</span> </h1>
                {loading && <div className="mx-auto w-full flex justify-center ">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                    {
                        newItems.map(item => <div key={item._id}>
                            <div className="m-4 border-solid border-2 border-[#90D26D] max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{item.tourists_spot_name}</h2>
                                        <h2 className="text-xl font-semibold tracking-wide">{item.country_Name}</h2>
                                        <p className="dark:text-gray-800">{item.short_description}</p>
                                    </div>
                                    <Link to={`/viewdetails/${item._id}`}><button type="button" className="btn bg-[#90D26D] border-none flex text-lg items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-white">View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CountryDetails;