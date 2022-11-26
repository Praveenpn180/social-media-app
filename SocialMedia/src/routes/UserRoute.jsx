import React from 'react'
import { Routes, Route , Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/home/Home'
import Auth from '../pages/Auth/Auth'
import Profile from '../pages/Profile/Profile'
import { Friends } from '../pages/Friends/Friends'
import Chat from '../pages/Chat/Chat'
import { Admin } from '../pages/AdminD/Admin'
export const UserRoute = () => {
    const user = useSelector((state) => state.authReducer.authData)
  let admin = false
  if (user) {
    admin = user.user.isAdmin
  }
    return (
        <>
        
            <Routes>
                <Route path="/" element={user ? (admin ? <Navigate to="admin" /> : <Navigate to="home" />) : <Navigate to="auth" />} />
                <Route path="/home" element={user ? (admin ? <Admin /> : <Home />) : <Navigate to="../auth" />} />
                <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />} />
                <Route path="/profile" element={user ? <Profile /> : <Navigate to="../auth" />} />
                <Route path="/friends" element={user ? <Friends /> : <Navigate to="../auth" />} />
                <Route path="/chat" element={user ? <Chat /> : <Navigate to="../auth" />} />

            </Routes>

        </>
    )
}
