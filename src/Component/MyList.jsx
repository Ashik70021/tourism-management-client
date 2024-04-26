import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";



const MyList = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    console.log(user)
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data);
            });
    }, [user])

    return (

        <div className="overflow-x-auto container mx-auto">
            <table className="table mt-32">

                <thead className="bg-[#9b9999]">
                    <tr>
                        <th></th>
                        <th>Country Name</th>
                        <th>Spot Name</th>
                        <th>Location</th>
                        <th>ACTION</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(p => <tr key={p._id}>
                            <th></th>
                            <td>{p.country_Name}</td>
                            <td>{p.tourists_spot_name}</td>
                            <td>{p.location}</td>
                            <td>
                                <button className="m-2 btn">Update</button>
                                <button className="m-2 btn">Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default MyList;