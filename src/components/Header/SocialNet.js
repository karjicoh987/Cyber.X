import React from 'react';

const SocialNet = ({ listNet }) => 
    <div className = 'social-network'>
        {
            listNet.map((net, i)=>
            <img    src = {net} 
                    alt = 'Картинка'
                    key = {i} 
            />
            )
        }
    </div>

export default SocialNet;