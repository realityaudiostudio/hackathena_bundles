import React from 'react'
import './Titles.css'

function Titles({title,sub}) {
  return (
    <div className='titles'>
        <h1 className='ptitle'>{title}</h1>
        <p className='psub'> {sub}</p>
    </div>
  )
}

export default Titles
