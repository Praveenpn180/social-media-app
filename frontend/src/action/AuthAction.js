import * as AuthApi from '../api/AuthRequest.js'


export const logIn = (formData) => async(dispatch) => {

  dispatch({type : "AUTH_START"})
    try {
        const {data} = await AuthApi.logIn(formData)
        
        

        dispatch({type :"AUTH_SUCCESS",data : data})

    } catch (error) {
        alert(error.response.data.message)
        dispatch({type : "AUTH_FAIL"})
    }
}

// signup
export const signUp = (formData) => async(dispatch) => {
    

    dispatch({type : "AUTH_START"})
      try {
           await AuthApi.signUp(formData)
          
      } catch (error) {
          alert(error.response.data.message)
          dispatch({type : "AUTH_FAIL"})
      }
  }

  export const verifyOtp = (formData) => async(dispatch) => {
    
      try {
          const {data} = await AuthApi.verifyOtpData(formData)
          dispatch({type :"AUTH_SUCCESS",data : data})
          
      } catch (error) {
          alert(error.response.data.message)
    
      }
  }


  // logout

  export const logOut = () => async(dispatch) =>{
    dispatch({type:"LOG_OUT"})
  }