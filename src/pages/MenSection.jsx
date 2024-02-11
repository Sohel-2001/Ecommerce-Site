import React, { useEffect, useState } from 'react'

import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay,Pagination,Navigation} from "swiper/modules"
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../store/cartSlice';

const MenSection = () => {

  const dispatch = useDispatch();

  const[menPrducts, setMenProducts] = useState([]);


  useEffect(() => {

    fetch("https://api.escuelajs.co/api/v1/categories/1/products")
    .then(res => res.json())
    .then(res => setMenProducts(res))

    console.log(menPrducts);

  },[setMenProducts])

  return (

    <>
    
      <div className='h-[75vh] w-full bg-red-500'>

        <Swiper
        
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay : 2500,
          disableOnInteraction : false
        }}

        pagination ={{
          clickable : true
        }}

        navigation={false}
        modules={[Autoplay,Pagination,Navigation]}
        className='mySwipper h-[100%]'
        >

          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1556135063-f7e80af08ff7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1440606797942-6cc04c045447?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
        </Swiper>



      </div>


      <div className="min-h-[100vh] w-[100%] p-8">

        <h1 className='text-center font-bold text-5xl text-gray-500 mb-8'>MENS CLOTHING</h1>

        <div className='flex flex-wrap items-center justify-center gap-20 '>

          {
            menPrducts.map((item,index) => (
                <Card
                key={item.id}
                title={item.title}
                price={item.price}
                img={item.images}
                Addonclick={() => dispatch(addToCart(item))}
                Removeonclick={() => dispatch(removeToCart(item.id))}
                />
            ))
          }

        </div>

      </div>

    </>
  )
}

export default MenSection