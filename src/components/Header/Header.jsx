import React from 'react';
import PropTypes from 'prop-types'

import SocialNet from './SocialNet';
import Menu from './Menu';
import Logo from './logo';



const Header = ({ logo, menu, socialNet })=>

    <nav>  
        <Logo logo = {logo} />
        <Menu menu = {menu} />
        <SocialNet socialNet = {socialNet} />
    </nav>


Header.propTypes = {
    logo:PropTypes.string,
    menu:PropTypes.array,
    socialNet:PropTypes.array
}  
        

export default Header