import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from "./results.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Endpoint'
import Productcard from '../../Components/Product/Productcard'
import Loader from '../../Components/Loader/Loader'
function Results() {
  const [results ,setResults] =useState([])
  const [isLoading,setisLoading]=useState(false)
  const {catagoryName} =useParams()
  useEffect(()=>{
    
  axios.get(`${productUrl}/products/category/${catagoryName}`)
  .then((res)=>{
    setResults(res.data)
    setisLoading(false)
    console.log(res.data)

  })
  .catch((err)=>{
    console.log(err)
    setisLoading(false)
  })
  } ,[])

  
  
  return (
    <Layout>
        <section>
          <h1 style={{padding: '30px'}}> Results</h1>
          <p style={{padding: "30px"}}>Catagory / {catagoryName}</p>
          <hr />
          {
            isLoading?(<Loader/>):(
              <div className={classes.products__container}>
              {results?.map((product)=>(
                <Productcard 
                key = {product.id}
                renderDesc={false}
                renderAdd={true}
                Product ={product}/>

              ))
              }
          </div>
            )
          }
           
        </section>

    </Layout>
  )
}

export default Results