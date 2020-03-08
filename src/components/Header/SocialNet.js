import React from 'react';

const SocialNet = ({ socialNet }) => 
    
    <div className = 'social-net'>
        {
            socialNet.map((net, i)=>
                <img
                  src = {net} 
                    alt = 'Картинка'
                    key = {i} 
                    height = '35px'
                    width = '35px'
            />

            )
        }
         <p className = "signin">sign in</p>
    </div>
        

        


export default SocialNet;