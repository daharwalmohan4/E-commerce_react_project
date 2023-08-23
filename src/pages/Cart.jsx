import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/Cartslice';

const Cart = () => {
  const dispatch = useDispatch();
    const cartitem = useSelector((state)=>state.cart)
    const handleremove =(id)=>{
      dispatch(remove(id))
    }
  return (
    <div style={{marginLeft:"200px"}}>
        <h3>Cart page</h3>
        {cartitem.map((item)=>(
            <div>
                <img  style={{width:"100px"}}src={item.image} alt="img" />
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
                <button onClick={()=>handleremove(item.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Cart
