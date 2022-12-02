import React from 'react'
import './FollowersCard.css'
import User from '../User/User'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import { getAllUser } from '../../api/UserRequest'

const FollowersCard = () => {

    const [persons,setPersons] = useState([])
    const {user} = useSelector((state) =>state.authReducer.authData)

useEffect(()=>{
    const fetchPersons = async() =>{
        const {data} = await getAllUser();
        setPersons(data)

    }
    fetchPersons()
},[])


  return (
    <div className="FollwerCard">
        <h3>Peoples</h3>
        {persons.filter(person=>person._id !== user._id)
        .map((person,id)=>{
           return <User person={person} key={id} />;
            
        })}
    </div>
  )
}

export default FollowersCard