import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useDispatch } from 'react-redux';
import video from "../assets/video.mp4"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { addToCart, removeToCart } from '../store/cartSlice';

const Gaming = () => {

  const dispatch = useDispatch();

  const [gamingProducts, setGamingProducts] = useState([]);


  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res => setGamingProducts(res));

    console.log(gamingProducts);

  }, [setGamingProducts])


  return (
    <>

      {/* <div className='min-h-[75vh] w-full relative'>
        <div className='h-[100%] w-full bg-black/50 absolute z-10'></div>
        <video className=' w-[100%]' autoPlay={true} loop={true} controls={false} muted src={video}></video>
      </div> */}

      <div className='h-[75vh] w-full  '>

      <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay : 2500,
        disableOnInteraction : false,
      }}

      pagination= {{
        clickable : false
      }}
      navigation={false}

      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper h-[100%]'
      >


        <SwiperSlide>
            <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>

      </Swiper>

    </div> 

      {/* <div className='h-[75vh] w-full bg-red-500'>

<Swiper

spaceBetween={10}
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



</div>  */}


      <div className='min-h-[100vh]  w-full p-8'>

      <h1 className='text-center font-bold text-5xl text-gray-500 mb-8'>GAMING</h1>


      <div className='flex flex-wrap items-center justify-center gap-20 '>

{
  gamingProducts.map((item,index) => (
      <Card
      key={item.id}
      title={item.title}
      price={item.price}
      img={item.image}
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

export default Gaming