import React from 'react';

const SocialNet = ({ socialNet }) => 
    <div className = 'social-network'>
        {
            socialNet.map((net, i)=>
            <img    src = {net} 
                    alt = 'Картинка'
                    key = {i} 
            />
            )
        }
    </div>

export default SocialNet;