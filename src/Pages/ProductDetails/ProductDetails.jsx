import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from "./productdtails.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/Endpoint'
import Productcard from '../../Components/Product/Productcard'
import Loader from '../../Components/Loader/Loader'
function ProductDetails() {
  const {productId} = useParams()
  const [product,setProduct] = useState({})
  const [isLoading ,setisLoading]=useState(false)
  console.log(productId)
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setisLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setisLoading(false)
    })


  }, [])
   console.log(product)
  return (
    <Layout>
      {isLoading? (<Loader/>):(
      <Productcard Product ={product}
      flex = {true}
      renderDesc={true}
      renderAdd={true}
      />)
      }
    </Layout>
  )
}

export default ProductDetails