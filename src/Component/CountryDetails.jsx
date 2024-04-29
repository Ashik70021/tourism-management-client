import { useEffect, useState } from "react";

const CountryDetails = () => {
    const [items, setItem] = useState([]);
    console.log(items)
    useEffect(() => {
        fetch("https://tourism-management-server.vercel.app/countries")
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });
    }, []);

    return (
        <div>
            <h1>country details:{items.length}</h1>
        </div>
    );
};

export default CountryDetails;