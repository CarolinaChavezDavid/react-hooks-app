import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: 'carolina1',
        email: 'scchavezd@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // efectos secundarios
      
    }, []) // [] dependency, just call once when the component is render

    useEffect(() => {
      
    }, [formState]) // formstate dependency,  call when formState change
    

  return (
    <>
        <h1>Simple form</h1>
        <hr />
        <input
            type='text'
            className='form-control'
            placeholder='Username'
            name= 'username'
            value={username}
            onChange={onInputChange}
        />

        <input
            type='email'
            className='form-control mt-2'
            placeholder='scchavezd@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        {
            (username === 'carolina12') && <Message />
        }
        
    </>
  )
}
