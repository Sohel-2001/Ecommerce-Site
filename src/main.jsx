import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MenSection from './pages/MenSection.jsx'
import Furniture from './pages/Furniture.jsx'
import Gaming from './pages/Gaming.jsx'
import Shoes from './pages/Shoes.jsx'
import Cart from './pages/Cart.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : '/men',
        element : <MenSection/>
      },
      {
        path : '/gaming',
        element : <Gaming/>
      },
      {
        path : '/shoes',
        element : <Shoes/>
      },
      {
        path : '/home&living',
        element : <Furniture/>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
