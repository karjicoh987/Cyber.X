import React from 'react';

const Logo = ({logo}) =>
    <div className = 'logo-cont'>
        <img className = 'logo' 
        src = {logo} 
        alt = 'logo'
        href = "vk.com" />
    </div>

export default Logo