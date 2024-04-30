import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddTouristSpot = () => {

    const { user } = useContext(AuthContext);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedSeasonality, setselectedSeasonality] = useState('');
    console.log(user)
    const handleAddSpot = e => {
        e.preventDefault();
        const user_Name = user.displayName;
        const user_email = user.email;

        const country_Name = selectedCountry;
        const tourists_spot_name = e.target.tourists_spot_name.value;
        const image = e.target.image.value;
        const location = e.target.location.value;
        const short_description = e.target.short_description.value;
        const average_cost = e.target.average_cost.value;
        const seasonality = selectedSeasonality;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;

        const info = {
            country_Name, tourists_spot_name, image, location,
            short_description, average_cost, seasonality, totalVisitorsPerYear,
            user_Name, user_email
        }

        fetch("https://tourism-management-server.vercel.app/AddTouristSpot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast("Place added successfully")
                    setSelectedCountry('');
                    setselectedSeasonality('');
                    e.target.reset();
                }
            }

            )

    }

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    const handleSeasonalityChange = (event) => {
        setselectedSeasonality(event.target.value);
    };
    return (
        <div className="container mx-auto ">
            <div className="mt-24">
                <h1 className="text-center text-4xl md:text-5xl font-bold"> Add Tourist Spot</h1>
                <form className="mt-4" onSubmit={handleAddSpot}>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="country">Country Name</label>
                            <select id="country" value={selectedCountry} onChange={handleCountryChange} className="input input-bordered border-[#90D26D] w-full" required>
                                <option value="">Select a country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Tourists spot name</label>
                            <input type="text" placeholder="Type here" name="tourists_spot_name" className="input input-bordered caret-[#90D26D] border-[#90D26D]  w-full " required />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Image</label>
                            <input type="text" placeholder="Use image URL" name="image" className="input input-bordered caret-[#90D26D] border-[#90D26D] w-full " />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Location</label>
                            <input type="text" placeholder="Type here" name="location" className="input input-bordered caret-[#90D26D] border-[#90D26D] w-full " />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Short description</label>
                            <input type="text" placeholder="Type here" name="short_description" className="input input-bordered caret-[#90D26D] border-[#90D26D] w-full " />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Average cost</label>
                            <input type="text" placeholder="Type here" name="average_cost" className="input input-bordered caret-[#90D26D] border-[#90D26D] w-full " />
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Seasonality</label>
                            <select name="" id="Seasonality" value={selectedSeasonality} onChange={handleSeasonalityChange} className="input input-bordered caret-[#90D26D] border-[#90D26D] w-full">
                                <option value="">Select Seasonality</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Total Visitors Per Year</label>
                            <input type="text" placeholder="Type here" name="totalVisitorsPerYear" className="input input-bordered border-[#90D26D] w-full " />
                        </div>
                    </div>
                    <div className="w-2/4 mx-auto">
                        <button className="btn border-none bg-[#90D26D] w-full text-xl text-gray-900 ">Add Place</button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddTouristSpot;