import React,{useState,useEffect} from 'react'
import {add} from '../redux/Cartslice'
import { useDispatch } from 'react-redux';

const Home = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        const frtchproduct = async()=>{
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        frtchproduct();
    },[])

    const handleadd =(product)=>{
        dispatch(add(product));
    }

  return (
    <div>
        {
            products.map((product)=>(
                <div style={{marginLeft:"200px"}} key={product.id}>
                    <img  style={{width:"80px"}} src={product.image} alt="img" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleadd(product)}>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home
