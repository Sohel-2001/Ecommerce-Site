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

const Furniture = () => {
  const dispatch = useDispatch()

  const[furniture, setFurniture] = useState([]);


  useEffect(() => {

    fetch("https://api.escuelajs.co/api/v1/categories/3/products")
    .then(res => res.json())
    .then(res => setFurniture(res))

    // console.log(furniture);

  },[setFurniture])

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
              <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-bottom' src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-bottom' src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </SwiperSlide>
        </Swiper>



      </div>


      <div className="min-h-[100vh] w-[100%] p-8">

        <h1 className='text-center font-bold text-5xl text-gray-500 mb-8'>FURNITURE</h1>

        <div className='flex flex-wrap items-center justify-center gap-20 '>

          {
            furniture.map((item,index) => (
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

export default Furniture