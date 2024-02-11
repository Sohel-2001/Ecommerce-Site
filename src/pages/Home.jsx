import React, { useEffect, useState } from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay,Pagination,Navigation} from "swiper/modules"
import { useDispatch } from 'react-redux';
import {addToCart,removeToCart} from "../store/cartSlice"



const Home = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([]);

    // const [category, setCategory] = useState([]);


    useEffect(() => {

        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setProducts(data))

            // console.log(category);
        // console.log(products);

    }, [setProducts])

    return (

        <>

            <div className="home1 h-[75vh]  overflow-hidden relative">



                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay ={{
                        delay : 2500,
                        disableOnInteraction : false
                    }}
                    pagination={{
                        clickable : true
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-[100%]"
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1594969155368-f19485a9d88c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </SwiperSlide>
                    
                    ...
                </Swiper>


                {/* <div className='innerhome h-[100%] w-[100%]'>

                    <img className='h-[100%] w-[100%] object-cover object-center' src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
           */}

            </div>

            <div className='w-full min-h-[100vh]  p-8'>

                <h1 className='text-center font-bold text-5xl p-5 text-slate-600 dark:text-red-500'>SHOP BY CATEGORY</h1>

                <div className='flex items-center flex-wrap gap-20 justify-center'>


                    {
                        
                        products.map((item, index) => (
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

                    {/* {
                products.map((item,index) => (
                    <div className="h-[40vh] rounded-lg overflow-hidden border border-red-900 ease-in duration-300 sca " key={item.id} >

                        <img className="h-[100%] w-[100%] object-contain object-center hover:scale-110 ease-in duration-200" src={item.images[0]} alt="" />





                    </div>
                ))
            } */}

                </div>


            </div>


        </>


    )
}

export default Home