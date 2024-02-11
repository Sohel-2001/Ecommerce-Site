import React, { useEffect } from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Card from './components/Card'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'




const App = () => {

  // const theme = useSelector(state => state.themeSwitch.theme)
  // const {theme} = useSelector(state => state.themeSwitch)

  // console.log(theme);

  // useEffect(() => {

  //   document.querySelector("html").classList.remove("light","dark");

  //  document.querySelector("html").classList.add(theme);

  // //  console.log(theme);

  // },[theme])

  return (
    <div className='h-screen w-full relative'>
      <Navbar/>
      <Outlet/>
      <Footer/>

      {/* <Card/> */}
    </div>
  )
}

export default App