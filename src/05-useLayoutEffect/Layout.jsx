import React, { useLayoutEffect, useRef, useState } from 'react'

export const Layout = () => {
    const uri = 'https://api.breakingbadquotes.xyz/v1/quotes'
    const {data, isLoading, hasError, updateQuote} = fetch(uri)
    
    const {quote, author} = !!data && data

    const pRef = useRef();
    const [box, setbox] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
      const {height, width} = pRef.current.getBoundingClientRect();
      setbox({height, width})
    }, [quote])
  

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {
            isLoading
                ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                : (
                    <blockquote className='blockquote text-end' style={{display: 'flex'}}>
                        <p ref={pRef} className='mb-1'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
        }
        <button className='btn btn-primary' onClick={() => fetch(uri)}>
            Next quote
        </button>
        

       
    </>
  )
}
