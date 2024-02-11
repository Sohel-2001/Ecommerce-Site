import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart,decrement } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);

    const dispatch = useDispatch();

    return (
        <div>
            {

                cartItems.length >0  &&
                <h1 className='font-semibold text-5xl text-center mt-5'> Cart Items</h1>

            }


            <div className='min-h-[100vh] w-full  p-10'>

                {

                    cartItems.length == 0 ?

                        (
                            <>
                                <div className='h-[75vh] w-full flex flex-col items-center justify-center gap-3 '>

                                    <p className='font-semibold text-[5vw]'>Cart is Empty!</p>

                                    <Link to={'/'} className=' bg-black text-white font-semibold p-3 rounded-md duration-200 hover:border-2 hover:ease-linear  hover:border-black hover:bg-white hover:text-black'>Explore Items</Link>

                                </div>
                            </>
                        )

                        :

                        (
                            cartItems.map((item) => (
                                <div key={item.id} className='h-[20vh] w-full bg-gray-300 flex items-center rounded-md justify-between px-10 py-2 border-2 border-black/20 mt-8'>


                                    <div className='h-[100%]  flex items-center gap-5 '>
                                        <img className='h-[100%] object-cover object-center' src={item.images} alt="" />

                                        <p className="font-bold text-xl">{item.title}</p>
                                    </div>

                                    <div className='flex items-center gap-20'>

                                        <p className='font-bold text-xl'>Price : {item.price}$</p>
                                        <div className='flex items-center gap-4'>
                                            <button onClick={() => dispatch(addToCart(item))} className='px-2 py-1 text-white bg-black rounded-md hover:bg-black/60'>+</button>
                                            <p className='font-bold text-xl'>quantity : {item.quantity}</p>
                                            <button onClick={() => dispatch(decrement(item.id))} className='px-2 py-1 text-white bg-black rounded-md hover:bg-black/60'>-</button>
                                        </div>
                                        {/* <button onClick={dispatch(removeToCart(item.id))} className='p-4 px-6 rounded-md font-semibold text-sm bg-red-600 text-white hover:bg-red-700'>Remove</button> */}
                                        <button onClick={() => dispatch(removeToCart(item.id))} className='p-4 px-6 rounded-md font-semibold text-sm bg-red-600 text-white hover:bg-red-700'>Remove</button>
                                    </div>


                                </div>

                            ))

                        )



                }

            </div>
        </div>
    )
}

export default Cart