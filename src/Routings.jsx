import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignIn from './Pages/Auth/Signup'
import Cart from './Pages/Cart/Cart'
import Payment from "./Pages/Payment/Payment"
import Orders from './Pages/Orders/Orders'
import Results from './Pages/Results/Results'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
function Routings() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Landing/>}/>
        <Route path = "/auth" element ={<SignIn/>} />
        <Route path = "/payments" element ={<Payment/>} />
        <Route path = "/order" element = {<Orders/>}/>
        <Route path = "/category/:catagoryName" element = {<Results/>}/>
        <Route path='/products/:productId' element = {<ProductDetails/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default Routings