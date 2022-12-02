import React from 'react'
import './Admin.css'
import Sidebar from '../../Admin/Sidebar/Sidebar'
import MainDash from '../../Admin/MainDash/MainDash'
export const Admin = () => {
  return (
    <div className='admin'>
    <div className="AppGlass">
      <Sidebar />
      <MainDash />
    </div>
    </div>

  )
}

