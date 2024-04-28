
import { useEffect, useState } from "react";

const AllTouristSpot = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://tourism-management-server.vercel.app/AddTouristSpot")
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })

    })
    return (
        <div className="container mx-auto mt-16">
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                {
                    items.map(item => <div key={item._id}>
                        <div className="m-4 max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide">{item.tourists_spot_name}</h2>
                                    <h2 className="text-xl font-semibold tracking-wide">{item.country_Name}</h2>
                                    <p className="dark:text-gray-800">{item.short_description}</p>
                                </div>
                                <button type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-gray-50">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;