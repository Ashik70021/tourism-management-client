import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


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
    }, [user, control]);

    // Delete operation

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#90D26D",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tourism-management-server.vercel.app/delete/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (

        <div className="overflow container mx-auto">
            <div className="table-responsive mt-16">
                <h1 className="text-center text-4xl md:text-5xl font-bold"> My Added List</h1>
                <table className="table mt-16 border">

                    <thead className="bg-[#90D26D] text-xl text-gray-900">
                        <tr>
                            <th>SI</th>
                            <th>COUNTRY NAME</th>
                            <th>SPOT NAME</th>
                            <th>SEASONALITY</th>
                            <th>LOCATION</th>
                            <th>AVERAGE COST</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {item.map((p, index) => (
                            <tr key={p._id}>
                                <td>{index + 1}</td>
                                <td>{p.country_Name}</td>
                                <td>{p.tourists_spot_name}</td>
                                <td>{p.seasonality}</td>
                                <td>{p.location}</td>
                                <td>{p.average_cost}</td>
                                <td>
                                    <Link to={`/spots/${p._id}`}>
                                        <button className="m-2 btn  w-full md:w-1/4 bg-[#90D26D] text-gray-900 hover:text-gray-400">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(p._id)} className="m-2 btn w-full md:w-1/4 bg-[#90D26D] text-gray-900 hover:text-gray-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyList;
