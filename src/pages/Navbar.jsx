import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import ThemeButton from '../components/ThemeButton';


const Navbar = () => {
    return (
        <div className='w-full h-[11vh] bg-white flex border-b-2 py-3 px-16 items-center justify-between'>
            <div className="logo">
                <img className='h-[3.3rem]' src="https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png" alt="" />
            </div>

            <div className="links flex items-center gap-10  text-[.8rem] font-semibold">


                <NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-pink-600" : "text-black"}`}>HOME</NavLink>
                <NavLink to={"/men"} className={({ isActive }) => `${isActive ? "text-pink-600" : "text-black"}`}>MEN</NavLink>
                <NavLink to={"/gaming"} className={({ isActive }) => `${isActive ? "text-pink-600" : "text-black"}`}>GAMING</NavLink>
                <NavLink to={"/shoes"} className={({ isActive }) => `${isActive ? "text-pink-600" : "text-black"}`}>SHOES</NavLink>
                <NavLink to={"/home&living"} className={({ isActive }) => `${isActive ? "text-pink-600" : "text-black"}`}>HOME & LIVING</NavLink>

                {/* <Link to={"/ee"}>BEAUTY</Link>
            <Link to={"/gg"}>STUDIO</Link> */}

            </div>

            <div className="search bg-red-600 w-[34vw]">

                <input className='w-full bg-gray-100 py-2 px-5 text-sm break-words focus:border border-gray-200 outline-none' type="text" placeholder='Search for products, brands and more' />

            </div>

            <div className="profile flex items-center gap-6 text-xs font-semibold ">

                <div className='flex flex-col items-center'>
                    <CgProfile size="1.6em" />
                    <p>Profile</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaRegHeart size="1.6em" />
                    <p>Wishlist</p>
                </div>
                <Link className='flex flex-col items-center' to={'/cart'}>
                    <IoBagOutline size="1.6em" />
                    Cart
                </Link>
                {/* <div className='flex flex-col items-center'>
                    <IoBagOutline size="1.6em" />
                    <p>Bag</p>
                </div> */}
                {/* <div className='flex flex-col items-center'>
                <ThemeButton/>
            </div> */}

            </div>
        </div>
    )
}

export default Navbar