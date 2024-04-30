import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const SpotDetails = () => {
    const { id } = useParams();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedSeasonality, setselectedSeasonality] = useState('');
    const [spot, setSpot] = useState({});


    useEffect(() => {
        fetch(`https://tourism-management-server.vercel.app/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                setSpot(data)
                console.log(data)
            })
    }, [id])

    const handleUpdate = (e) =>{
        e.preventDefault();

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
            short_description, average_cost, seasonality, totalVisitorsPerYear }
        
        fetch(`https://tourism-management-server.vercel.app/updateProduct/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast("update successfully")
                
                setSelectedCountry('');
                setselectedSeasonality('');
                e.target.reset();
            }
        })
    }
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    const handleSeasonalityChange = (event) => {
        setselectedSeasonality(event.target.value);
    };

    return (
        <div className="container mx-auto">
            <div className="mt-24">
                <h1 className="text-center text-4xl font-bold"> Update Tourist Spot</h1>
                <form className="mt-4" onSubmit={handleUpdate}>
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
                            <input type="text" placeholder="Type here" name="tourists_spot_name" className="input input-bordered w-full caret-[#90D26D] border-[#90D26D] " 
                            defaultValue={spot.tourists_spot_name}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Image</label>
                            <input type="text" placeholder="Use image URL" name="image" className="input input-bordered w-full caret-[#90D26D] border-[#90D26D] " 
                            defaultValue={spot.image}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Location</label>
                            <input type="text" placeholder="Type here" name="location" className="input input-bordered w-full caret-[#90D26D] border-[#90D26D] " 
                            defaultValue={spot.location}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Short description</label>
                            <input type="text" placeholder="Type here" name="short_description" className="input input-bordered w-full caret-[#90D26D] border-[#90D26D] " 
                            defaultValue={spot.short_description}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Average cost</label>
                            <input type="text" placeholder="Type here" name="average_cost" className="input input-bordered w-full caret-[#90D26D] border-[#90D26D]" 
                            defaultValue={spot.average_cost}/>
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
                            <input type="text" placeholder="Type here" name="totalVisitorsPerYear" className="input input-bordered w-full caret-[#90D26D] border-[#90D26D]" 
                            defaultValue={spot.totalVisitorsPerYear}/>
                        </div>
                    </div>

                    <div className="w-2/4 mx-auto">
                        <button className="btn border-none bg-[#90D26D] w-full text-xl text-gray-900 ">Update Place</button>
                    </div>

                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SpotDetails;