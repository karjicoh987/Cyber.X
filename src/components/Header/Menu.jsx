import React from 'react'

const Menu = ({ menu,socialNet }) =>
            <div className = 'menu'>
                <div className = 'child-menu'>
                    {
                        menu.map((item, i)=>
                            <a href = 'vk.com'>
                                <p key = {i}>{item}</p>
                            </a>
                        )
                    }
                </div>
            </div>

export default Menu;