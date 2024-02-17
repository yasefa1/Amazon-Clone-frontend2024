import React from 'react'
import { BrowserRouter as Router ,Routes,Route,redirect} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Cart from './Pages/Cart/Cart'
import Payment from "./Pages/Payment/Payment"
import Orders from './Pages/Orders/Orders'
import Results from './Pages/Results/Results'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Auth from './Pages/Auth/Auth'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe('pk_test_51Ojoz6FZgQjX445dkRKwqNntSh3NVoAJLWEiKPTuutE5DMSHAefrSh76HIakS85xCbdOe9y4DgRZg0pEfFZtmlTk00e3v3qwfa');
function Routings() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Landing/>}/>
        <Route path = "/auth" element ={<Auth/>} />
        {/* <Route path = "/payment" element ={<Payment/>} /> */}
        <Route
path="/payments"
element={
  <ProtectedRoute
    msg={"you must log in to pay"}
    redirect={"/payments"}
  >
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  </ProtectedRoute>
}
/>
        <Route path = "/order" element = {<Orders/>}/>
        <Route path = "/category/:catagoryName" element = {<Results/>}/>
        <Route path='/products/:productId' element = {<ProductDetails/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default Routings


