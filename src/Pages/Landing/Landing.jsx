import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Product from '../../Components/Product/Product'
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Catagory from "../../Components/Catagory/Catagory"
function Landing() {
  return (
    <Layout>
            <CarouselEffect/>
            <Catagory/>
            <Product/>
    </Layout>
  )
}

export default Landing