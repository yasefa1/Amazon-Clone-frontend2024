import React, { useContext } from 'react';

import { Rating } from '@mui/material'
import CurrencyFormat from '../Currency/CurrencyFormat'
import classes from "./product.module.css"
import { Link } from 'react-router-dom'
import {DataContext} from '../Dataprovider/Dataprovider'
import {Type} from "../../Utility/Actiontype"

function Productcard({Product ,flex ,renderDesc,renderAdd}) {
    const {title,id,rating,price,description,image} = Product;
    console.log(Product)
  const [State,dispach]=useContext(DataContext)
  console.log(State)
  const addToCart = ()=>{
    dispach(
        {
            type:Type.ADD_TO_BASKET,
            item:{
                image,title,id,rating,price,description
            }
        }
    )
  }
  
    return (
    <div className={`${classes.card__container} ${flex?classes.product__flexed : ''}`}>
<Link to={`/products/${id}`}>
    <img src={image} alt="" />
</Link>
    <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"650px"}}> {description}</div>}
    
    <div className={classes.rating}>
        <Rating value={rating?.rate} precision={0.1}/>
        <small>{rating?.count}</small>
    </div>
    <div>
        
        
        <CurrencyFormat amount = {price}/>

    </div>
    
    {
        renderAdd && 
        <button className={classes.button} onClick={addToCart}>
            Add to Cart
        </button>
    }
    </div>
    </div>
  )
}

export default Productcard