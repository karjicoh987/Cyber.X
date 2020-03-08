import React from 'react'
import SocialNet from './SocialNet'

const Menu = ({ menu,socialNet }) =>
            <div className = 'menu'>
                
                    {
                        menu.map((item, i)=>
                            <p key = {i}>{item}</p>
                        )
                    }
                <SocialNet socialNet = {socialNet}/>
            </div>

export default Menu;