import React from 'react';
import SocialNet from './SocialNet';
import Menu from './Menu';
import Logo from './logo';


const Header = ({ logo, menu, socialNet })=>

    <nav>  
        <Logo logo = {logo} />
        <Menu menu = {menu} socialNet = {socialNet} />
        <SocialNet socialNet = {socialNet} />
    </nav>


   
        

export default Header