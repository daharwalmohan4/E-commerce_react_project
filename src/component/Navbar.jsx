import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span>Redux Tutorial</span>
       <div >
       <NavLink style={{marginRight:"20px"}} to={"/"}>Home</NavLink>
        <NavLink style={{marginRight:"20px"}}to={"/cart"}>Cart</NavLink>
        <span>items:{items.length}</span>
       </div>
    </div>
  )
}

export default Navbar
