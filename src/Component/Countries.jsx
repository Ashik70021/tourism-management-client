
import { useEffect, useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
const Countries = () => {
    const [items, setItems] = useState([]);
    console.log(items)
    useEffect(() => {
        fetch("https://tourism-management-server.vercel.app/countries")
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, []);
    return (
        <div className='mt-16'>
            <h1 className="text-4xl font-bold text-center">Most Popular Countries!</h1>
            <section className='mt-16'>
                <div className=" allspotbg ">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-5xl text-white font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Most Popular Countries!</h1>
                        <p className="mt-6 mb-8 text-white text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                            {
                                items.map(item =>
                                    <div key={item._id}>
                                        <Link to={`/countrydetails/${item.country_name}`}>
                                            <div className='relative brightness-100 hover:brightness-50 text-center from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white text-6xl font-bold'>
                                                <img className='h-fit rounded-lg' src={item.image} alt="" />
                                                <div className='absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>{item.country_name}</div>
                                            </div>
                                        </Link>
                                    </div>)
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Countries;