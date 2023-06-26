import { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css';

export const DummyApi = () => {
  const [productList, setProductList] = useState([]);
  const GetProduct = async () => {
    await Axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res);
      setProductList(res.data.products);
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    GetProduct();
  }, [])
  console.log(productList);

    return (
        <div>
            <input className='mt-2 ms-4' type='text' placeholder='Search here'></input>
            <ul>
            {productList.map(item => (
                <li key={item.id}>{item.title} </li>     
            ))}
        </ul>
        </div>
    );
};

export default DummyApi;