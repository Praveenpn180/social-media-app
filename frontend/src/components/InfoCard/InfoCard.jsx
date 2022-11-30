import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { logOut } from '../../action/AuthAction'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

    //redux
    const dispatch = useDispatch()
    const params = useParams()

    const [profileUser, setProfileUser] = useState({})

    const { user } = useSelector((state) => state.authReducer.authData);


    useEffect(() => {
        const fetchProfileUser = async () => {
            setProfileUser(user)
        }
        fetchProfileUser();
    }, [user])

    // logout
    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>

                <div>


                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data={user}
                    />

                </div>


            </div>
            <div className="info">
                <span><b>Status :</b></span>
                <span>  {profileUser.relationship}</span>

            </div>
            <div className="info">
                <span><b> Lives in :</b></span>
                <span>  {profileUser.livesin}</span>

            </div>

            <div className="info">
                <span><b>Works at :</b></span>
                <span>  {profileUser.worksAt}</span>

            </div>

        </div>
    )
}

export default InfoCard