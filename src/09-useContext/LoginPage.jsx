import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const {user, setuser} = useContext(UserContext)
  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <pre>
          {
            JSON.stringify(user, null, 3)
          }
        </pre>

        <button 
          className='btn btn-primary'
          onClick={() => setuser({id: 123, name: 'caro', email: 'kro@google.com'})}>
          Reload user
        </button>
    </>
  )
}
