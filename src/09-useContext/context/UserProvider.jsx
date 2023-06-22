import React, { useState } from 'react'
import { UserContext } from './UserContext'


export const UserProvider = ({ children }) => {
    const [user, setuser] = useState()
  return (
    <UserContext.Provider value={{ setuser, user}}>
        { children }
    </UserContext.Provider>
  )
}
