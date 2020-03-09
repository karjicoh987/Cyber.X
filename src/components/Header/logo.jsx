import React from 'react';

const Logo = ({logo}) =>
    <div className = 'logo-cont'>
        <a href = 'vk.com'>
            <img className = 'logo' 
                src = {logo} 
                alt = 'logo'
            />
        </a>
        
    </div>

export default Logo