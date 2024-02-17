import React, { useState ,useContext} from 'react'
import classes from "./signup.module.css"
import { Link,useNavigate,useLocation} from 'react-router-dom'
import {auth } from "../../Utility/Firebase"
import {signInWithEmailAndPassword,
  createUserWithEmailAndPassword} 
from "firebase/auth"
import {DataContext} from "../../Components/Dataprovider/Dataprovider"
import { Type } from '../../Utility/Actiontype'
import {ClipLoader} from "react-spinners"

function Auth() {
  const [email ,setEmail] =useState("");
  const [password,setPassword] = useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState({
    signIn:false,
    signUp:false,
  });
  const [{user},dispatch]=useContext(DataContext)
 
  const navigate = useNavigate();
  
  const navStateData = useLocation();
  console.log(navStateData);
  console.log(user)
  
  
    const authHandler= async (e)=>{
          e.preventDefault()
          console.log(e.target.name)
          if (e.target.name == "sign In") {
            setLoading({...loading,signIn:true})
            signInWithEmailAndPassword(auth,email,password)
            .then((userInfo)=>{
              dispatch({
                type:Type.SET_USER,
                user:userInfo
              })
              setLoading({...loading,signIn:false});
              
          navigate(navStateData?.state?.redirect || "/");
            })
            .catch((err)=>{
              console.log(err.message)
              setError(err.message)
              
              setLoading({...loading,signIn:false})
            })
          }
          else{
              
            setLoading({...loading,signUp:true})
              createUserWithEmailAndPassword(auth,email,password)
              .then((userInfo)=>{
                
                dispatch({
                  type:Type.SET_USER,
                  user:userInfo,
                })
                
              setLoading({...loading,signUp:false})
             
              navigate(navStateData?.state?.redirect || "/");
              })
              .catch((err)=>{
                console.log(err.message)
                
              setError(err.message)
              
              setLoading({...loading,signUp:false})
              
              
              })
          }
    }
  

  return (
    <section className={classes.login}>
     <Link to ={"/"}>
    <img src="https://th.bing.com/th/id/R.dd9260d8ff9fcdf1f0de98c9c9424cb9?rik=SI2UWsOr0lCqwg&pid=ImgRaw&r=0" alt="amazon logo" />
     
     </Link>

     <div className={classes.login_container}>
      <h1>Sign In</h1>
      {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}

      <form action="">
        <div >
              
        <label htmlFor="email">Email</label>
        <input
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        type="email" 
        id='email' />
        </div>
        <div>
          
        <label htmlFor="password">password</label>
        <input
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         type="password" 
         id='password' />
        </div>
        <button
         type ="submit" 
        name='sign In'
        onClick={authHandler} 
        className={classes.login_signinButton}
        >
          {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
          
      </form>

        <p>By signing below, I acknowledge that I have read and understood the terms and conditions of the Amazon clone service.  I consent to the collection and processing of my personal information in accordance with the privacy policy. </p>
        <button 
        type = "submit" 
        name='sign up'
        onClick={authHandler} 
        className={classes.register_button}>
        {loading.signUp? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Create your Amazon Account"
            )}
        </button>
        {
          error && (
          <small style={{paddingTop:"5px",color:"red"}}> {error}</small>
        )}
     </div>
    </section>
  )
}

export default Auth