import React from 'react'
import squidlogo from "../../assets/squidlogo.svg"
import hacklogo from "../../assets/logo.svg"
import './Header.css'

function Header() {


  return (
    <div className='header'>
        <img src={hacklogo} alt=""  className='hlogo'/>
        <img src={squidlogo} alt="" className='slogo'/>

    </div>
  )
}

export default Header
