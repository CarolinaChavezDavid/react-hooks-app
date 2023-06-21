import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const {counter, setCounter} = useCounter();

    const incrementValue = () => {
        setCounter( counter + 1 )

    }

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment = { incrementValue }/>
    </>
  )
}
