import React from 'react';
import PropsTypes from 'prop-types'

const SocialNet = ({ socialNet }) => 
    
    <div className = 'social-net'>
        {
            socialNet.map((net, i)=>
            <a href = 'vk.com'>
                <img
                  src = {net} 
                    alt = 'Картинка'
                    key = {i} 
                    height = '35px'
                    width = '35px'
                />
            </a>
                

            )
        }
         <a href = 'vk.com'>
            <p className = "signin">sign in</p>
         </a>
    </div>

SocialNet.propTypes = {
    socialNet:PropsTypes.string
}

        


export default SocialNet;