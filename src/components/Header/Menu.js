import React from 'react'
import SocialNet from './SocialNet'

const Menu = ({ menu,socialNet }) =>
            <div className = 'menu'>
                <div className = 'child-menu'>
                    {
                        menu.map((item, i)=>
                            <p key = {i}>{item}</p>
                        )
                    }
                </div>
           
                <SocialNet socialNet = {socialNet}/>
            </div>

export default Menu;