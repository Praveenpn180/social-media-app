import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import './Auth.css'
import Zlogo from '../../img/Zlogo.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../action/AuthAction'
import { Link } from 'react-router-dom'
import OtpModal from '../../components/OtpModal/OtpModal'
const Signup = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const [modalOpened,setModalOpened] = useState(false)
const [num,setNum] = useState()
const [datas,setDatas] = useState()
let userData={}
  const onSubmit = async (data) => {
    setDatas(data)
    const { firstName, lastName, email, phone, password } = data
    userData = { firstName, lastName, email, phone, password }
    setNum(phone.slice(6))
    setModalOpened(true)
    dispatch(signUp(userData))
    
  }
  const user = useSelector((state) => state?.authReducer?.authData)
  useEffect(()=>{
   
      if(user){
        navigate("/home")
      }
  })



  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Zlogo} alt="" />
        <div className="Webname">
          <h1>Zango Connect</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit(onSubmit)}>
          <h3>"Sign Up"</h3>
          <div>

            <div className='validation'>
              <input type="text" placeholder='First Name'
                name='firstName' className='infoInput'
                {...register('firstName', {
                  pattern:{value:(/^[A-Za-z]+$/), message: 'Only characters are allowed'},
                  required: 'Please enter firstname', minLength: {
                    value: 3,
                    message: 'Firstname must be 3 or more characters'
                  }
                })} />
              {errors.firstName && <p className="errorMessage">{errors.firstName?.message}</p>}

            </div>

            <div className='validation'>
              <input type="text" placeholder='Last Name'
                className='infoInput' name='lastName'
                {...register('lastName', {
                  pattern:{value:(/^[A-Za-z]+$/), message: 'Only characters are allowed'},
                 required: 'Please enter lastname', minLength: {
                   value: 1,
                   message: 'Lastname must be 1 or more characters'
                 }
               })}  />
               {errors.lastName && <p className="errorMessage">{errors.lastName?.message}</p>}
            </div>
          </div>

          <div className='validation'>
            <input type="text" placeholder='Email'
              className='infoInput' name='email'
              {...register('email', {
                required: 'Please enter email', pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })} />
           {errors.email && <p className="errorMessage">{errors.email?.message}</p>}
          </div>

            <div>

          <div className='validation'>
            <input type="number" placeholder='Phone'
              className='phoneInput' name='phone'
              {...register('phone',
              {
                required: 'Please enter phone number',
            
                minLength: { value: 10, message: 'Phone number must be 10 numbers' },
                maxLength: { value: 10, message: 'Phone number cannot exceed more than 10 numbers' }
              })} />
           {errors.phone && <p className="errorMessage">{errors.phone?.message}</p>}

          </div>
           
          

              </div>

          <div>
            <div className='validation'>
              <input type="password" placeholder=' password'
                className='infoInput passInput12' name='password'
                {...register('password',
            { required: 'Please enter password', minLength: { value: 8, message: 'Password must be 8 characters' } })} />
               {errors.password && <p className="errorMessage">{errors.password?.message}</p>}
            </div>


            <div className='validation'>
              <input type="password"
                placeholder='Confirm password'
                className='infoInput passInput12' name='p2'
                {...register('p2', {
                  required: 'Please enter Confirm password', validate: (val) => {
                    if (watch('password') !== val) {
                      return 'Passwords are not match'
                    }
                  }
                })}  />
                      {errors.p2 && <p className="errorMessage">{errors.p2?.message}</p>}
            </div>

          </div>

        

          <div>
            <span style={{ fontSize: '12px', cursor: "pointer" }} >
              "Already you have an account.<Link to={"/login"}>Login</Link>
            </span>
          </div>

          <div>
            
          <button className='button infoButton' type='submit' >
            Sign Up
          </button>
            </div>

         

        </form>
        <OtpModal modalOpened ={modalOpened} setModalOpened ={setModalOpened} num={num} userData={datas} setDatas={setDatas} />
      </div>
    </div>
  )}



export default Signup
