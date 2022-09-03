import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-color.png';
import { useState } from 'react';







function Header() {

    let token = localStorage.getItem('token');

    const [isMobile, setIsMobile] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();
        
 
        if(token !== null) {
            localStorage.clear()
            return;
        }

        
    }


  return (
    <>

 
    <header className='navbar navbar-expand-lg bg-dark nav__container fixed-top'>
        <nav className='container-fluid'>
            <Link to='/'><img src={logo} className='nav__logo' alt='Logo' /></Link>


            
            <ul className={isMobile? 'nav-links-mobile' : "navbar-nav nav__itemsXtra"} onClick={()=> setIsMobile(false)}>
                <li className="nav-item"><Link to='/electronics' className='nav-link active'>Electronics</Link></li>
                <li className="nav-item"><Link to='/jewelery' className='nav-link active'>Jewelery</Link></li>
                <li className="nav-item"><Link to='/men' className='nav-link active'>Men Clothes</Link></li>
                <li className="nav-item"><Link to='/women' className='nav-link active'>Women Clothes</Link></li>
                <li className="nav-item" onClick={clickHandler} >
                    <Link to='/' className='nav-link active'>Cerrar sesion</Link>
                </li>
                
            </ul>

            <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>


        </nav>
    </header>
    </>
  )
}

export default Header