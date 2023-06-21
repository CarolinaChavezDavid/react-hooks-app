import React, { useMemo } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

const heavyStuff = (iterationNumber = 100) => {
  for(let i = 0; i < iterationNumber; i++){
    console.log('Here we go...')
  }
  return `${iterationNumber} iterations made`
}

export const MemoHook = () => {

    const {counter, increment} = useCounter()
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />
        <h4>{ memorizedValue }</h4>
        <button
            className='btn btn-primary'
            onClick={ () => increment(1)}
        >
            +1
        </button>
    </>
  )
}
