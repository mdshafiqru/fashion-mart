import React from 'react';
import './header-bottom.styles.scss'
import {   Link } from 'react-router-dom'

const HeaderBottom = () => (
    <div>
        
        <Link to ='/' > Home </Link>
        <Link to ='shop' > MENS </Link>
        <Link to ='signin' > WOMENS </Link>
        <Link to ='about' > SIGN IN </Link>
        
    </div>
)

export default HeaderBottom;
