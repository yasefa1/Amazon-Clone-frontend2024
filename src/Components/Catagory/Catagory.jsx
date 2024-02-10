import React from 'react'
import Catagorycard from './Catagorycard'
import { catagoryImages } from './Catagoryfullinfo'
import classes from "./catagory.module.css"
function Catagory() {
  return (
    <section className={classes.catagory__container}>
       
        {
        catagoryImages.map((info)=>{
           return <Catagorycard data = {info}/>
        })
       } 
    </section>
  )
}

export default Catagory