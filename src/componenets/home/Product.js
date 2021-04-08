import React from 'react';
import './product.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useLocation } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
export default function Product(props) {


   return (
      <div className="productContainer">
         <FavoriteIcon className="favBtn" />
         <img src={props.data.to} alt={props.data.name} className="img2" />
         <p className="ProductName">{props.data.name}</p>
         <div className="price">
            <strong>
               ${props.data.discountedPrice}
               <span>
                  <del>${props.data.price}</del>
               </span>
            </strong>

            <AddShoppingCartIcon className="cartBtn" />
         </div>


      </div>
   )
}
