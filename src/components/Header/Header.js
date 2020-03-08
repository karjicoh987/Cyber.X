import React from 'react'


const Header = ({ menu, logo })=>
    <nav>
        <div className = 'logo'>
            <img src = {logo} alt = 'logo' />
        </div>
    
            <div className = 'menu'>
                {
                    menu.map((item, i)=>
                        <p key = {i}>{item}</p>
                    )
                }
            </div>
    
            <div className = 'social-network'></div>
    </nav>
        

export default Header