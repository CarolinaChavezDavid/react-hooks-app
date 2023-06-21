import React, { useCallback } from 'react'
import { useCounter } from '../hooks/useCounter'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState( 10 );

    const incrementValue = useCallback(
      () => {
        setCounter( (value) => value + 1)
      },
      [],
    )
    

    //const incrementValue = () => {
    //    setCounter( counter + 1 )
    //}

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment = { incrementValue }/>
    </>
  )
}
