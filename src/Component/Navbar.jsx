import { NavLink } from 'react-router-dom';
import '../App.css'
const Navbar = () => {

    const link = <>
        <li className='text-lg'> <NavLink to="/">Home</NavLink> </li>
        <li className='text-lg'> <NavLink to="/allTouristSpot">All Tourists Spot</NavLink> </li>
        <li className='text-lg'> <NavLink to="/AddTouristSpot">Add Tourists Spot</NavLink> </li>
        <li className='text-lg'> <NavLink to="/myList">My List</NavLink> </li>
    </>
    return (
        <div className="container text-white">
            <nav className='mt-8 navbar pl-8 pr-8'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>

                </div>
                <div className="navbar-end">
                    <a href='/signin' className="btn">Signin</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;