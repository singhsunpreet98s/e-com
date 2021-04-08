import Header from '../header/Header';
import React from 'react';
import './home.css';
import Product from './Product';
import data from './productData'
import { Switch, Route, useLocation } from 'react-router-dom'
export default function Home() {
   const { pathname } = useLocation()
   console.log(pathname.split('/')[1])
   return (
      <div className="mainContainer">
         <Header />

         <div className="products">

            {(pathname.length <= 1) ?
               data.map((item, index) => {

                  return <Product key={index} data={item} />
               }) :
               data.map((item, index) => {
                  if (item.category === pathname.split("/")[1])
                     return <Product key={index} data={item} />
                  else
                     return null
               })
            }

         </div>
         <footer>
            <a href="#" target="_blank" className="footerLinks">About Us</a>
            <a href="#" target="_blank" className="footerLinks">Cancellation and Return Policy</a>
            <a href="#" target="_blank" className="footerLinks">Privacy Policy</a>
            <a href="#" target="_blank" className="footerLinks">Terms and Conditions</a>
         </footer>

      </div>
   )
}
