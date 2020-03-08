import React from 'react'

const Menu = ({ menu }) =>
            <div className = 'menu'>
                {
                    menu.map((item, i)=>
                        <p key = {i}>{item}</p>
                    )
                }
            </div>

export default Menu;