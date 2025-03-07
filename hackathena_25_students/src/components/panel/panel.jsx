import React from 'react'
import bell from '../../assets/bellbutton.svg'
import './panel.css'

function panel({head,para,time}) {
  return (
    
    <div className='Panel'>
      <img src={bell} alt="" className='bellicon'/>
      <div className='ancontent'>
      <h1>{head}</h1>
      <p>{para}</p>
      <span>{time}</span>
      </div>
    </div>
  )
}

export default panel
