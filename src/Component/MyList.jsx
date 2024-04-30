import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";



const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);
    console.log(user)
    useEffect(() => {
        fetch(`https://tourism-management-server.vercel.app/myList/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data);
            });
    }, [user,control]);

    // Delete operation

    const handleDelete = (id) =>{
        fetch(`https://tourism-management-server.vercel.app/delete/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    setControl(!control)
                }
            })
    }

    return (

        <div className="overflow container mx-auto">
            <table className="table mt-32 border">

                <thead className="bg-[#90D26D] text-xl">
                    <tr>
                        <th>SI</th>
                        <th>Country Name</th>
                        <th>Spot Name</th>
                        <th>Location</th>
                        <th>ACTION</th>

                    </tr>
                </thead>
                <tbody className="text-lg">
                    {
                        item.map((p, index) => <tr key={p._id}>
                            <th>{index + 1}</th>
                            <td>{p.country_Name}</td>
                            <td>{p.tourists_spot_name}</td>
                            <td>{p.location}</td>
                            <td>
                                <Link to={`/spots/${p._id}`}><button className="m-2 btn bg-[#90D26D]">Update</button></Link>
                                <button onClick={()=> handleDelete(p._id)} className="m-2 btn bg-[#90D26D]">Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default MyList;
