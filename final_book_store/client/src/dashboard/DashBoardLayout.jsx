import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default DashBoardLayout