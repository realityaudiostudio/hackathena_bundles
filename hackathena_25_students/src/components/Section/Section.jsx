import React from 'react'
import './Section.css'
function Section({stage,text,time}) {
  return (
    <div className='Section'>
      <div className='sect1'>
        <h3>Stage</h3>
        <p>{stage}</p>
      </div>
      <div className='vara'></div>
      <div className='sect2'>
        <h2>{text}</h2>
        <p>{time}</p>
      </div>
      
    </div>
  )
}

export default Section
