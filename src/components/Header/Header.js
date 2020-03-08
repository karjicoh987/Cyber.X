import React from 'react'
import SocialNet from './SocialNet'
import Menu from './Menu';
const Header = ({data})=>
    <nav>
        <img className = 'logo' src = {logo} alt = 'logo' />
        <Menu listMenu = {}/>
        <SocialNet listNet = {}/>
    
    </nav>
        

export default Header