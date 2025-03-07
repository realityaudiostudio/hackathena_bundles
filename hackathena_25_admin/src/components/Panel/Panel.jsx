import React from 'react'
import bell from '../../assets/bellbutton.svg'
import './panel.css';
import { useLocation } from 'react-router-dom';

function panel({head,para,time,padam}) {
  return (
    
    <div className='Panel'>
      <img src={bell} alt="" className='bellicon'/>
      <div className='ancontent'>
      <h1>{head}</h1>
      <p>{para}</p>
      {location.pathname==='/' ?<div></div> : <img className='fixedd' src={padam} alt='padam'></img>}
      
      <span>{time}</span>
      </div>
    </div>
  )
}

export default panel
