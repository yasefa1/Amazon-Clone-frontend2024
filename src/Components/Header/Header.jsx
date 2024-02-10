import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import classes from "./header.module.css"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import Lowerheader from './Lowerheader';
import { DataContext } from '../Dataprovider/Dataprovider';
function Header() {
    const [{basket},dispatch]=useContext(DataContext)
    console.log(basket.length)
    const totalItem = basket?.reduce((amount,item)=>{
        return item.amount + amount
    },0)
    return (
    <section className={classes.fixed}>
        <section >
            <div className={classes.header__container}>
                {/* logo */}
                <div className={classes.logo__container}>
                    
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>
                {/* icons */}
                <div className={classes.delivery}>
                    <span>
                        <SlLocationPin/>
                    </span>
                    <div>
                        
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                    </div>
                </div>
                </div>
                {/* search bar */}
                <div className={classes.search}>
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text"placeholder='search the product here' />
                    <BsSearch size={25}/>
                </div>
                {/* right side of header */}
                <div className={classes.order__container}>
                    
                        <Link to="" className={classes.language}>
                        <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="USA flag" />
                    <select name='' id=''>
                      <option value="">EN</option>
                    </select>
                        </Link>
                   

                
                    <Link to='/auth'>
                        
                            <p>Sign In</p>
                            <span>Account & List</span>
                        </Link>
                     {/* orders */}
                        <Link to='/Order'>
                            <p>returns</p>
                            <span>& orders</span>
                        </Link>
                    {/* cart */}
                    <Link to='/Cart' className={classes.cart}>
                        <BiCart size = {35}/>
                        <span>{totalItem}</span>
                    </Link>
                </div>

            </div>
           
        </section>
        <Lowerheader/>
        
    </section>
  )
}

export default Header