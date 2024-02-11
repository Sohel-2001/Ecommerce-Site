import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {addToCart,removeToCart} from "../store/cartSlice"

const Card = ({img, title, price=90 , Addonclick, Removeonclick}) => {



    // const addToCart = (item) => {
    //     state.push(item);
    // }


    return (
        <div className='min-h-[52vh] w-[16vw] bg-red-500 border-8 rounded-lg border-red-500 overflow-hidden'>

            <div className='h-[30vh] w-full  '>

                <img className='h-[100%] w-[100%] object-cover object-center hover:scale-110 ease-in-out duration-300' src={img} alt="" />


            </div>

            <div className='text-white mt-4'>
                <p className='text-xl font-semibold mb-2'>{title}</p>
                <p className=''>{price}$</p>
            </div>

            <button onClick={Addonclick} className='bg-white p-2 rounded-md mt-3 font-semibold'>Add to Cart</button>
            {/* <button onClick={Removeonclick} className='bg-white p-2 rounded-md mt-3 font-semibold'>Remove to Cart</button> */}

        </div>
    )
}

export default Card 