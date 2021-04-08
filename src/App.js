import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './componenets/home/Home'
import Sidenav from './componenets/sideNav/Sidenav'
export default function App() {
   return (
      <div style={{ position: 'relative', display: 'flex' }} >
         <BrowserRouter>
            <Sidenav />

            <Home />


         </BrowserRouter>


      </div>
   )
}
