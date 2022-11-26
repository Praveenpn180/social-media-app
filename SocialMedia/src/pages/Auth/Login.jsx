import React from 'react'
import './Auth.css'
import Zlogo from '../../img/Zlogo.jpg'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { logIn} from '../../action/AuthAction'
import Validate from '../../Validation/Validation'
import { Link } from 'react-router-dom'
 const Login = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=> state.authReducer.loading)

    const [data,setData] = useState({firstname:"",lastname:"",password:"",confirmpass:"",username:""})
    const [err,setErr] = useState({})
  
    //password check
    const [confirmPass,setConfirmPass] = useState(true)
  
    const handleChange = (e) =>{
        // const {name,value} = e.target
           setData({...data , [e.target.name] : e.target.value})
    }
  
  
    const handleSubmit = (e)=>{
       
      e.preventDefault();
      setErr(Validate(data))
  
        dispatch(logIn(data))
      }
    
  
  // reset 
  const resetForm = () =>{
    setConfirmPass(true);
    setData({firstname:"",lastname:"",password:"",confirmpass:"",username:""})
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
          <form  className="infoForm authForm" onSubmit={handleSubmit}>
            <h3>Log In</h3>
        

         <div className='validation'>
            <input type="text" placeholder='User Name'
             className='infoInput passInput1' name='username' 
             onChange={handleChange} value ={data.username} />
            
             {err.username && <p style={{color:"red"}}> {err.username}</p>}

            </div>
            <div>

            <div className='validation'>
         
              <input 
               type="password" placeholder=' password'
              className='infoInput passInput' name='password' 

              onChange={handleChange} value ={data.password}/>
             {err.password && <p  style={{position:"relative",right:"-50px",color:"red"}}> {err.password}</p>}

            </div>
            <span style={{display : confirmPass ? "none" : "block",
            color:"red",fontSize:"12px",
            alignSelf:"flex-end",
            marginRight:"5px"}}>

            

            </span>

            <div className='validation'>
           
             
            </div>

            </div>
          
            <div>
              <span style={{fontSize:'12px',cursor:"pointer"}} >
              Don't have an account?
                <Link to={"/signup"}> Sign Up</Link>
                
                </span>
            </div>
            <button className='button infoButton' type='submit' disabled={loading}>
              {loading ? "Loading.." : "Login"}
            </button>
          </form>
      </div>
  </div>
  )
}

export default Login

