import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click,setClick] = useState(false);
    const [dropdown, setDropdown]= useState (false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter= () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave= () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };
    

    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'  onClick={closeMobileMenu}>
                    PalValle
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <div className='boxs'>
                    <div className='search'>
                        <input type='text' placeholder='Search..'/>
                        <label for='check' className={click ? `btn-icon active` :'btn-icon'}>
                            <i className="search-icon fas fa-search"/>
                        </label>
                    </div>
                </div>
                <ul className={click ? `nav-menu active`: 'nav-menu'}>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to ='./producto' className='nav-links' onClick={closeMobileMenu}>
                            Productos
                            {dropdown && <Dropdown/>}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='./carrito' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-shopping-cart"/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='./sign-up' className='nav-links' onClick={closeMobileMenu}>
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navbar;