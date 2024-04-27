import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SpotDetails = () => {
    const { id } = useParams();
    console.log(id);

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

        const country_Name = e.target.country_Name.value;
        const tourists_spot_name = e.target.tourists_spot_name.value;
        // const image = e.target.image.value;
        const location = e.target.location.value;
        const short_description = e.target.short_description.value;
        const average_cost = e.target.average_cost.value;
        const seasonality = e.target.seasonality.value;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;

        const info = {
            country_Name, tourists_spot_name, location,
            short_description, average_cost, seasonality, totalVisitorsPerYear}
        
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
                alert("update successfully")
            }
        })
    }

    return (
        <div className="container mx-auto">
            <div className="">
                <h1 className="text-center text-4xl font-bold"> Update Tourist Spot</h1>
                <form className="mt-32" onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 p-4">
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Country Name</label>
                            <input type="text" placeholder="Type here" name="country_Name" className="input input-bordered w-full "
                             defaultValue={spot.country_Name}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Tourists spot name</label>
                            <input type="text" placeholder="Type here" name="tourists_spot_name" className="input input-bordered w-full " 
                            defaultValue={spot.tourists_spot_name}/>
                        </div>
                        {/* <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Image</label>
                            <input type="text" placeholder="Use image URL" name="tourists_spot_name" className="input input-bordered w-full " 
                            defaultValue={spot.tourists_spot_name}/>
                        </div> */}
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Location</label>
                            <input type="text" placeholder="Type here" name="location" className="input input-bordered w-full " 
                            defaultValue={spot.location}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Short description</label>
                            <input type="text" placeholder="Type here" name="short_description" className="input input-bordered w-full " 
                            defaultValue={spot.short_description}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Average cost</label>
                            <input type="text" placeholder="Type here" name="average_cost" className="input input-bordered w-full " 
                            defaultValue={spot.average_cost}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Seasonality</label>
                            <input type="text" placeholder="Type here" name="seasonality" className="input input-bordered w-full " 
                            defaultValue={spot.seasonality}/>
                        </div>
                        <div className="p-6">
                            <label className="text-xl font-normal" htmlFor="">Total Visitors Per Year</label>
                            <input type="text" placeholder="Type here" name="totalVisitorsPerYear" className="input input-bordered w-full " 
                            defaultValue={spot.totalVisitorsPerYear}/>
                        </div>
                    </div>

                    <button className="btn w-full ">Update Place</button>

                </form>
            </div>
        </div>
    );
};

export default SpotDetails;