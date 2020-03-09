import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({ menu }) =>
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


Menu.propTypes = {
    menu: PropTypes.array
}

export default Menu;