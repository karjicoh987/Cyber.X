import React from 'react';
import PropTypes from 'prop-types'

const Logo = ({logo}) =>
    <div className = 'logo-cont'>
        <a href = 'vk.com'>
            <img className = 'logo' 
                src = {logo} 
                alt = 'logo'
            />
        </a>
    </div>

Logo.propTypes = {
    logo:PropTypes.string
}
export default Logo