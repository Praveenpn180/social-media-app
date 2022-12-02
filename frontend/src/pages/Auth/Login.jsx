import React from 'react'
import { useForm } from "react-hook-form";

import './Auth.css'
import Zlogo from '../../img/Zlogo.jpg'
import {useDispatch} from 'react-redux'
import { logIn} from '../../action/AuthAction'
import { Link } from 'react-router-dom'
 const Login = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
    const dispatch = useDispatch()


  const onSubmit=async(data)=>{
    dispatch(logIn(data))
  }
  
   
    
  

  
  return (
    <div className="Auth">
    {/* left side  */}
      <div className="a-left">
          <img src={Zlogo} alt="" />
          <div className="Webname">
              <h1>Zango Connect</h1>
              <h6>Explore the ideas throughout the world</h6>
          </div>
      </div>
   
      <div className="a-right">
          <form  className="infoForm authForm" onSubmit={handleSubmit(onSubmit)}>
            <h3>Log In</h3>
        

         <div className='validation'>
            <input type="text" placeholder='Email'
             className='infoInput passInput1' name='email' 
             {...register('email', {
              required: 'Please enter email', pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} />
             {errors.email && <p className="errorMessage">{errors.email?.message}</p>}
             

            </div>
           

            <div className='validation'>
         
              <input 
               type="password" placeholder=' password'
              className='infoInput passInput' name='password' 
              {...register('password',
              { required: 'Please enter password', minLength: { value: 8, message: 'Password must be 8 characters' } })} />
                 {errors.password && <p className="errorMessage">{errors.password?.message}</p>}

            </div>
          


           
          
            <div>
              <span style={{fontSize:'12px',cursor:"pointer"}} >
              Don't have an account?
                <Link to={"/signup"}> Sign Up</Link>
                
                </span>
            </div>
            <button className='button infoButton' type='submit' >
              Login
            </button>
          </form>
      </div>
  </div>
  )
}

export default Login

