import React from 'react'
import Friend from '../../components/Friend/Friend'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import { getFriends } from '../../api/UserRequest'
import Navbar from '../../components/Navbar/Navbar'
import RightSide from '../../components/RightSide/RightSide'
import './Friends.css'
export const Friends = () => {
    const [persons,setPersons] = useState([])
    const {user} = useSelector((state) =>state.authReducer.authData)

useEffect(()=>{
    const fetchPersons = async() =>{
        const {data} = await getFriends(user._id);
        setPersons(data)
       

    }
    fetchPersons()
},[user._id])

  return (
    <div className="friends">
    <Navbar/>
    <RightSide/>
    <div className="people">
    <h3>Friends</h3>
    {persons.filter(person=>person._id !== user._id)
    .map((person,id)=>{
        return( <Friend person={person} key={id} />);
        
    })}
</div>
    </div>
  )
}
