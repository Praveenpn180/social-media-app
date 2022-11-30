import React, { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import { useForm } from "react-hook-form";
import { verifyOtp } from '../../api/AuthRequest';
import { useDispatch} from 'react-redux'
const OtpModal = ({ modalOpened, setModalOpened, num ,userData,setDatas}) => {
  const theme = useMantineTheme();
  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const {otp} = data
const regData ={
  otpcode:otp,
  firstName:userData.firstName,
  lastName:userData.lastName,
  email:userData.email,
  password:userData.password,
  phone:userData.phone
}
    dispatch(verifyOtp(regData))
    
  }



  return (
    <Modal style={modalStyle}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="sm"
      opened={modalOpened}
      closeOnClickOutside={false}
      onClose={() => setModalOpened(false)}


    >
      <div className='validation'>
        <p>Enter the otp sent to +91******{num}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" placeholder='OTP'
          className='otpInput' name='otp' {...register('otp',
          {
            required: 'Please enter OTP number',
        
            minLength: { value: 6, message: 'Phone number must be 6 numbers' },
            maxLength: { value: 6, message: 'Phone number cannot exceed more than 6 numbers' }
          })}
         />
        <button className='button infoButton' type='submit' >
          Submit
        </button>
        </form>
      </div>
    </Modal>
  )
}

export default OtpModal