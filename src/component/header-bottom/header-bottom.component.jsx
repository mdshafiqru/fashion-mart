import React from 'react';
import './header-bottom.styles.scss'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import CartIcon from '../../assets/cart-icon.png'
import SearchIcon from '../../assets/search-icon.png'



const HeaderBottom = () => (
    <div className ='header-bottom'>
        <div className='header-bottom-container'>
            <Link to ='/' className='logo-container'>
                <Logo className = 'logo'/>
            </Link>

            <div className='nav-bar' >
                <NavLink exact to = '/' className='nav-menu-option' activeClassName='selected' activeStyle={{color: "#3cb878", borderBottom:"3px solid #3cb878"}}> Home  </NavLink>
                <NavLink exact to = '/men' className='nav-menu-option' activeStyle={{color: "#3cb878", borderBottom:"3px solid #3cb878"}}> Men </NavLink>
                <NavLink exact to = '/women' className='nav-menu-option' activeStyle={{color: "#3cb878", borderBottom:"3px solid #3cb878"}}> Women </NavLink>
                <NavLink exact to = '/kids' className='nav-menu-option' activeStyle={{color: "#3cb878", borderBottom:"3px solid #3cb878"}}> kids </NavLink>
                <NavLink exact to = '/accessories' className='nav-menu-option' activeStyle={{color: "#3cb878", borderBottom:"3px solid #3cb878"}}> accessories </NavLink>
                
            </div>

            <div className='right-item'>
                <div className='cart-counter'>
                    <div className='counter'>
                    0
                    </div>
                
                </div>
                <div className='cart option'> 
                    <img className='cart-icon' src={CartIcon} alt='cart-icon' /> 
                </div>
                <div className='search option'> <img src={SearchIcon} alt='search-icon' /> </div>
                <Link to='signin' className='option'>
                    SIGN IN
                </Link>
            </div>
        </div>
        

    </div>
)

export default HeaderBottom;
