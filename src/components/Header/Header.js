import React from 'react'
import SocialNet from './SocialNet'
import Menu from './Menu';
const Header = ({ logo, menu, socialNet })=>

    <nav>  
        <img className = 'logo' 
        src = {logo} 
        alt = 'logo' />
        <Menu menu = {menu}/>
        <SocialNet socialNet = {socialNet}/>
    </nav>


   
        

export default Header