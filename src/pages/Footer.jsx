import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";






const Footer = () => {
  return (
    <div className='h-[22rem] bg-[#111] flex pt-16 px-32 items-center justify-between pb-8'>

      <div className=' h-[100%] w-[25vw] flex flex-col gap-3 '>

          <div className="logo">

          <img className='h-[5.3rem]' src="https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png" alt="" />

          </div>

          <div className="desc mt-3 text-white text-sm">

            <p>Welcome to Myntra, your premier destination for Superb online clothing services.</p>

          </div>

          <div className='flex items-center gap-6 mt-5 text-3xl text-green-500 mb-6'>

            <a className='cursor-pointer hover:text-green-700' to={"/facebook"}><FaSquareFacebook/></a>
            <a className='cursor-pointer hover:text-green-700' to={"/facebook"}><FaXTwitter/></a>
            <a className='cursor-pointer hover:text-green-700' to={"/facebook"}><FaInstagram/></a>
            <a className='cursor-pointer hover:text-green-700' to={"/facebook"}><FaYoutube/></a>

          </div>

          <p className='text-slate-500 text-sm'>©2024 Myntra. All Rights Reserved.</p>

      </div>


      <div className='px-5 h-[100%] w-[25vw]'>


      <h1 className='text-center text-3xl text-white font-bold mb-16'>Our Products</h1>

      <div className='flex items-center justify-between'>


        <div className='flex flex-col gap-4'>

          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <Link to={'/men'}>MEN</Link>
          </div>
          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <Link to={'/gaming'}>GAMING</Link>
          </div>
          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <Link to={'/shoes'}>SHOES</Link>
          </div>
          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <Link to={'/home&living'}>FURNITURE</Link>
          </div>

        </div>


        <div className='flex flex-col gap-4'>

        <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <p>STYLES</p>
          </div>
          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <p>MODERN</p>
          </div>
          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <p>RETRO</p>
          </div>
          <div className='flex items-center gap-3 text-sm text-white'>
            <FaChevronRight/>
            <p>BOLLYWOOD</p>
          </div>
          
        </div>


      </div>



      </div>


      <div className=' h-[100%] w-[25vw] pl-28'>

        <h1 className=' text-3xl text-white font-bold mb-16'>Contact Info</h1>

        <div className='flex flex-col gap-4'>

            <p className='flex items-center gap-3 text-white text-sm'> <IoCall/> +91 9875699646</p>
            <p className='flex items-center gap-3 text-white text-sm'> <IoCall/> +91 9875699646</p>
            <p className='flex items-center gap-3 text-white text-sm'> <IoMdMail/> sohelmollah586@gmail.com</p>
            <p className='flex items-center gap-3 text-white text-sm'> <FaLocationDot/> Patia, Bhubaneswar, Odisha 751024</p>

        </div>
      </div>

    </div>
  )
}

export default Footer