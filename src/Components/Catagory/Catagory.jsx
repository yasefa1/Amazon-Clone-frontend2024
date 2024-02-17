import React from 'react'
import Catagorycard from './Catagorycard'
import { catagoryImages } from './Catagoryfullinfo'
import classes from "./catagory.module.css"
function Catagory() {
  return (
    <section className={classes.catagory__container}>
       
        {
        catagoryImages?.map((info,i)=>{
           return <Catagorycard key = {i} data = {info}/>
        })
       } 
    </section>
  )
}

export default Catagory