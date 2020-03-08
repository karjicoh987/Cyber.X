import React from 'react'

const Menu = ({ listMenu }) =>
            <div className = 'menu'>
                {
                    listMenu.map((item, i)=>
                        <p key = {i}>{item}</p>
                    )
                }
            </div>

export default Menu;