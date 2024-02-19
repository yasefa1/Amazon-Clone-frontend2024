import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from "./cart.module.css"
import { DataContext } from '../../Components/Dataprovider/Dataprovider'
import ProductCard from '../../Components/Product/Productcard'
import CurrencyFormat from '../../Components/Currency/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../../Utility/Actiontype'
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
function Cart() {
  const [{basket ,user},dispach]=useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)
  console.log(basket)
  const increment =(item)=>{
    dispach({
      type:Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement =(id)=>{
    dispach({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <Layout>
        <section className={classes.container}>
          <div className={classes.cart__container}>
            <h2>Hello</h2>
                <h2>Your shopping basket</h2>
                <hr />
                {
                  basket?.length===0?(<p>Opps ! No items in your cart</p>):(
                    basket?.map((item ,i)=>{
                      return <section key = {i} className={classes.cart_product}>
                          < ProductCard
                      
                      Product ={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex = {true}
                      />
                      
                      <div className={classes.button_container}>
                        <button className={classes.btn} onClick={()=>increment(item)}>
                          <MdArrowDropUp size ={50}/>
                        </button>
                        <span>{item.amount}</span>
                        <button className={classes.btn} onClick={()=>decrement(item.id)}>
                          <MdArrowDropDown size ={50}/>
                        </button>
                     
                      </div>
                      </section>
                    
                    }
                  ))
                }
          </div>
        
          {basket?.length !==0&&(
            <div className={classes.subtotal}>
              <div>
                
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount ={total}/>
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to ="/payments">Continue to checkout</Link>
            </div>
          )}
        </section>
    </Layout>
  )
}

export default Cart