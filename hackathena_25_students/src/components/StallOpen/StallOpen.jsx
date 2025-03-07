import React from 'react'
import Header from '../Header/Header';
import Cools from '../../../public/images/packet-jiuce.png';
import './stallopen.css';
import { Link } from 'react-router-dom';

function StallOpen() {
  return (
    <div>
        <div className="stallexp">
        <Header/>
        <Link to='/stall'>
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M18.4999 3.08334C27.0099 3.08334 33.9166 9.99 33.9166 18.5C33.9166 27.01 27.0099 33.9167 18.4999 33.9167C9.98992 33.9167 3.08325 27.01 3.08325 18.5C3.08325 9.99 9.98992 3.08334 18.4999 3.08334ZM18.4999 30.8333C25.3141 30.8333 30.8333 25.3142 30.8333 18.5C30.8333 11.6858 25.3141 6.16667 18.4999 6.16667C11.6858 6.16667 6.16659 11.6858 6.16659 18.5C6.16659 25.3142 11.6858 30.8333 18.4999 30.8333ZM18.4999 16.9583H24.6666V20.0417H18.4999V24.6667L12.3333 18.5L18.4999 12.3333V16.9583Z" fill="#500000"/>
</svg></Link>
<div className="imggg">
<img src={Cools} alt='Cooldrinks'/>
</div>
<div className="aksharan">
    <h3>Cool Drinks</h3>
    <p>Rs.52/-</p>
    <button className='vannit'>Order Now</button>
</div>

    
    </div>
    </div>
  )
}

export default StallOpen