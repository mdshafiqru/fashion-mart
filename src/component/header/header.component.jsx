import React from 'react';
import './header.styles.scss'
import HeaderTop from '../header-top/header-top.component'
import HeaderBottom from '../header-bottom/header-bottom.component'

const Header = ({ currentUser }) => (
    <div className='header'>
        <HeaderTop />
        <HeaderBottom currentUser={currentUser} />
    </div>
    
)

export default Header;
