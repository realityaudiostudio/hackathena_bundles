import React from 'react';
import './navbar.css'
import { Link,useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
        <div className="home">
        <Link to='/'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
  <path d="M23.75 24.5H6.25C5.55965 24.5 5 23.9777 5 23.3333V12.8333H1.25L14.1591 1.88007C14.6359 1.47552 15.3641 1.47552 15.8409 1.88007L28.75 12.8333H25V23.3333C25 23.9777 24.4404 24.5 23.75 24.5ZM7.5 22.1667H22.5V10.6837L15 4.32003L7.5 10.6837V22.1667ZM10 17.5H20V19.8333H10V17.5Z" fill="#500000"/>
</svg> */}
  {location.pathname==='/' ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#500000"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM8 15V17H16V15H8Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 28" fill="none">
  <path d="M23.75 24.5H6.25C5.55965 24.5 5 23.9777 5 23.3333V12.8333H1.25L14.1591 1.88007C14.6359 1.47552 15.3641 1.47552 15.8409 1.88007L28.75 12.8333H25V23.3333C25 23.9777 24.4404 24.5 23.75 24.5ZM7.5 22.1667H22.5V10.6837L15 4.32003L7.5 10.6837V22.1667ZM10 17.5H20V19.8333H10V17.5Z" fill="#500000"/>
</svg>}
</Link>
<p className="navitem">Home</p>
        </div>
        <div className="home">
        <Link to='/project'>
        
{location.pathname === '/project' ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#500000"><path d="M22 20V7L20 3H4L2 7.00353V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20ZM5.23582 5H18.7638L19.7638 7H4.23682L5.23582 5ZM9 11H15V13H9V11Z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M22 20V7L20 3H4L2 7.00353V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20ZM4 9H20V19H4V9ZM5.236 5H18.764L19.764 7H4.237L5.236 5ZM15 11H9V13H15V11Z" fill="#500000"></path></svg>}
</Link>
<p className="navitem">Workspace</p>
        </div>
        {/* <div className="home">
        <Link to='/stall'>
        
{location.pathname === '/stall' ? <svg xmlns="http://www.w3.org/2000/svg" fill="#500000" width="30" height="30" viewBox="0 0 24 24" ><path d="M22 20V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422V20H22ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M26.25 16.5527V25H27.5V27.5H2.5V25H3.75V16.5527C2.24251 15.5437 1.25 13.8252 1.25 11.875C1.25 10.8411 1.53054 9.84526 2.04152 8.99683L5.43163 3.125C5.65491 2.73825 6.06757 2.5 6.51415 2.5H23.4859C23.9324 2.5 24.3451 2.73825 24.5684 3.125L27.9469 8.97715C28.4695 9.84526 28.75 10.8411 28.75 11.875C28.75 13.8252 27.7575 15.5437 26.25 16.5527ZM23.75 17.4656C23.5448 17.4884 23.3363 17.5 23.125 17.5C21.5511 17.5 20.0986 16.8475 19.0625 15.7665C18.0264 16.8475 16.5739 17.5 15 17.5C13.4261 17.5 11.9736 16.8475 10.9375 15.7665C9.90137 16.8475 8.44889 17.5 6.875 17.5C6.66375 17.5 6.45521 17.4884 6.25 17.4656V25H23.75V17.4656ZM7.23581 5L4.19497 10.2665C3.90511 10.748 3.75 11.2986 3.75 11.875C3.75 13.6009 5.14911 15 6.875 15C8.1637 15 9.30584 14.2129 9.77724 13.0369C10.1968 11.9903 11.6783 11.9903 12.0978 13.0369C12.5691 14.2129 13.7113 15 15 15C16.2887 15 17.4309 14.2129 17.9023 13.0369C18.3218 11.9903 19.8032 11.9903 20.2227 13.0369C20.6941 14.2129 21.8363 15 23.125 15C24.8509 15 26.25 13.6009 26.25 11.875C26.25 11.2986 26.0949 10.748 25.7934 10.2468L22.7641 5H7.23581Z" fill="#500000"/>
</svg>}
</Link>
<p className="navitem">Stall</p>
        </div> */}
        <div className="home">
        <Link to='/profile'>
        
{location.pathname === '/profile' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#500000" width="30" height="30"><path d="M10 19.748V16.4C10 15.1174 10.9948 14.1076 12.4667 13.5321C11.5431 13.188 10.5435 13 9.5 13C7.61013 13 5.86432 13.6168 4.45286 14.66C5.33199 17.1544 7.41273 19.082 10 19.748ZM18.8794 16.0859C18.4862 15.5526 17.1708 15 15.5 15C13.4939 15 12 15.7967 12 16.4V20C14.9255 20 17.4843 18.4296 18.8794 16.0859ZM9.55 11.5C10.7926 11.5 11.8 10.4926 11.8 9.25C11.8 8.00736 10.7926 7 9.55 7C8.30736 7 7.3 8.00736 7.3 9.25C7.3 10.4926 8.30736 11.5 9.55 11.5ZM15.5 12.5C16.6046 12.5 17.5 11.6046 17.5 10.5C17.5 9.39543 16.6046 8.5 15.5 8.5C14.3954 8.5 13.5 9.39543 13.5 10.5C13.5 11.6046 14.3954 12.5 15.5 12.5ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M11.9375 14.375C10.3842 14.375 9.125 13.1158 9.125 11.5625C9.125 10.0092 10.3842 8.75 11.9375 8.75C13.4908 8.75 14.75 10.0092 14.75 11.5625C14.75 13.1158 13.4908 14.375 11.9375 14.375ZM12.5 24.685V20.5C12.5 19.8895 12.6803 19.3284 13.0051 18.828C12.6359 18.7766 12.2585 18.75 11.875 18.75C9.91501 18.75 8.11711 19.444 6.71364 20.5996C8.06136 22.5901 10.1074 24.0691 12.5 24.685ZM5.56607 18.325C7.3304 17.021 9.51266 16.25 11.875 16.25C13.1794 16.25 14.4289 16.485 15.5834 16.9151C16.6809 16.486 17.9905 16.25 19.375 16.25C21.4496 16.25 23.3561 16.7799 24.6325 17.6954C24.872 16.8379 25 15.9339 25 15C25 9.47715 20.5229 5 15 5C9.47715 5 5 9.47715 5 15C5 16.1656 5.19945 17.2847 5.56607 18.325ZM23.5993 20.1074C23.1077 19.4408 21.4635 18.75 19.375 18.75C16.8674 18.75 15 19.7459 15 20.5V25C18.6569 25 21.8554 23.037 23.5993 20.1074ZM15 27.5C8.09644 27.5 2.5 21.9035 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9035 2.5 27.5 8.09644 27.5 15C27.5 21.9035 21.9035 27.5 15 27.5ZM19.375 15.625C17.9943 15.625 16.875 14.5057 16.875 13.125C16.875 11.7443 17.9943 10.625 19.375 10.625C20.7558 10.625 21.875 11.7443 21.875 13.125C21.875 14.5057 20.7558 15.625 19.375 15.625Z" fill="#500000"/>
</svg>}
</Link>
<p className="navitem">Profile</p>
        </div>
    </div>
  )
}

export default Navbar