import React from 'react'

export const MultipleCustomHooks = () => {
    const uri = 'https://api.breakingbadquotes.xyz/v1/quotes'
    const {data, isLoading, hasError, updateQuote} = fetch(uri)
    
    const {quote, author} = !!data && data
  

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
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{quote}</p>
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
