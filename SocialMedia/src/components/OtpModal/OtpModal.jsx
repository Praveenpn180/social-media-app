import React, {useState} from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import Validate from '../../Validation/Validation'

const OtpModal = ({modalOpened , setModalOpened , num}) => {
    const theme = useMantineTheme();
const modalStyle = {display: "flex",
alignItems: "center",
justifyContent: "center",}
const [data, setData] = useState({ firstname: "", lastname: "", password: "", confirmpass: "", username: "" })
const [err, setErr] = useState({})
const handleChange = (e) => {
    // const {name,value} = e.target
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    setErr(Validate(data))

  }
  return (
    <Modal style={modalStyle}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = "sm"
      opened ={modalOpened}
      closeOnClickOutside={false}
      onClose ={()=> setModalOpened(false)}
    
      
    >
   <div className='validation'>
    <p>Enter the otp sent to +91******{num}</p>
            <input type="number" placeholder='OTP'
              className='otpInput' name='otp'
              onChange={handleChange} value={data.otp} />
            {err.otp && <p style={{ color: "red" }}> {err.otp}</p>}
            <button className='button infoButton' type='button' >
            Submit
          </button>
          </div>
    </Modal>
  )
}

export default OtpModal