import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const {
        formState,
        onInputChange, 
        username, 
        email, 
        password,
        onResetForm
    } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

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
            placeholder='email'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        <input
            type='password'
            className='form-control mt-2'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onInputChange}
        />

        {
            (username === 'carolina12') && <Message />
        }
        
        <button onClick={onResetForm} className='btn btn-primary'>
            Reset
        </button>
    </>
  )
}
