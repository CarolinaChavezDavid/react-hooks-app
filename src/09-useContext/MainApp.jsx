import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
        <hr />
        <div id="detail">
          <Outlet />
        </div>

    </UserProvider>
    
  )
}
