import React from 'react'
import SocialNet from './SocialNet'
import Menu from './Menu';
const Header = ({ logo, menu, socialNet })=>

    <nav>  
        <div className = 'logo-cont'>
            <img className = 'logo' 
            src = {logo} 
            alt = 'logo' />
        </div>
        <Menu menu = {menu} socialNet = {socialNet}/>
        {/* <SocialNet socialNet = {socialNet}/> */}
    </nav>


   
        

export default Header