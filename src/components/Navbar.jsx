import React from 'react'
import '../components_css/Navbar.css';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <header className='header'>
                <nav className='nav container'>
                    <Link to='#' className='nav__logo'>
                        <img src={logo} alt='' className='nav__logo-img'></img>
                    </Link>
                    <div className='nav__menu' id='nav-menu'>
                        <ul className='nav__list'>
                            <li>
                                <Link to="/" className='nav__link' >Home</Link>
                            </li>

                            <li className='nav--item'>
                                <Link to='/about' className='nav__link'>About</Link>
                            </li>

                            <li className='nav--item'>
                                <Link to='/Event' className='nav__link'>Event</Link>
                            </li>

                            <li className='nav--item'>
                                <Link to='/contact' className='nav__link'>Contact</Link>
                            </li>
                        </ul>
                        <Link to='/login'>
                            <button className='login__btn'>Login</button>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar