import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core'
export default function Header() {
   const { pathname } = useLocation()

   const [search, setSearch] = useState("");
   console.log(pathname)
   return (
      <div className="headerContainer">
         <div className="navigation">
            <span><Link to="/">Home /</Link></span><span><Link to="/">Products</Link></span>{(pathname.length > 1) && <span>/ {pathname.split('/')}</span>}
         </div>
         <div className="searchContainer">
            <SearchIcon style={{ color: 'darkgray', fontSize: 35 }} />
            <input type="text" className="inp" name="search "
               placeholder="Search"
               value={search} onChange={(e) => setSearch(e.target.value)} />
         </div>
         <div className="actions">
            <IconButton><ShoppingCartIcon /></IconButton>
            <IconButton><FavoriteIcon /></IconButton>
            <button className="btn">Login/Signup</button>

         </div>

      </div>
   )
}
