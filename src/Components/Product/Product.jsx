import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Productcard from './Productcard';
import classes from "./product.module.css"
import Loader from '../Loader/Loader';
function Product() {

    const [products,setproducts]=useState([]);
    const [isLoading,setisLoading]=useState(false)
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        setproducts(res.data)
        setisLoading(false)
      })
      .catch((err)=>{
        console.log(err)
        setisLoading(false)
      })
    

    }, [])
    console.log(products)
  return (
    <>
    {
      isLoading?(<Loader/>):(
        
        <section className={classes.products__container}>
            { 
                products?.map((singleProduct)=>{
                    return <Productcard renderAdd ={true} Product = {singleProduct} key = {singleProduct.id}/>
                })
            }
           
        </section>
      )
    }
    </>


    
  )
}

export default Product