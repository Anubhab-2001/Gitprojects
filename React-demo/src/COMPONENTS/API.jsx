import {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css';


export default function API() {
  const[productlist,setproductlist]= useState([]);
  const getProduct=async()=>{
    await axios.get("https://fakestoreapi.com/products/").then((res)=>{
      setproductlist(res?.data);
    }).catch((err)=>{
      console.log(err);
    })   
  }
  useEffect(()=>{
    getProduct();
  },[])
  console.log(productlist)

  return (
    <div className='img-gallery'>
      {
        productlist.map(data => (
          <>
            <div className='parts'>
            <img className='images' src={data.image} />
            <p>{data.title}</p>
            <p>{data.price}</p>
            </div>
          </>
          
        ))
      }
    </div>
  )
}
