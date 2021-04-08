import React from 'react';
import './sidenav.css';
import { Link, useLocation } from 'react-router-dom'
const categoriesArr = [
   {
      name: 'Bean Bag',
      quantity: 2
      ,
      ref: '/beanbag',
   },
   {
      name: 'T Shirt',
      quantity: 6
      ,
      ref: '/tshirt',
   },
   {
      name: 'Curtains',
      quantity: 6
      ,
      ref: '/curtains',
   },
   {
      name: 'Shirt',
      quantity: 3
      ,
      ref: '/shirt',
   }, {
      name: 'Sarees',
      quantity: 23
      ,
      ref: '/sarees',
   },
   {
      name: 'Trouser',
      quantity: 9
      ,
      ref: '/trouser',
   },
   {
      name: 'Hoodies',
      quantity: 70
      ,
      ref: '/hoodies',
   },
]
export default function Sidenav() {
   const Category = (props) => {
      const { pathname } = useLocation()

      return (

         <Link to={props.data.ref} className={(props.data.ref === pathname) ? "categoryActive" : 'category'}>
            <div className="avatar">{`${props.data.name[0]}${props.data.name[1]}`}</div>
            <p>{props.data.name}
               <span>{props.data.quantity} products</span>
            </p>
         </Link>)
   }
   return (
      <div className="sidenavContainer">
         <div className="content">
            <div className="logo">
               <h2 className="logoName"><Link to="/">$HopIfY</Link></h2>
            </div>
            <div className="categories">
               <h4 className="catHead">CATEGORIES</h4>
               <div className="cat">
                  {
                     categoriesArr.map((item, index) => {
                        return <Category key={index} data={item} />
                     })
                  }
               </div>
            </div>
         </div>
      </div>
   )
}
