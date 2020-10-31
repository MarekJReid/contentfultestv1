import React from 'react'
import '../about.scss'



function PhotoBox({id}) {
    
 
    return (
        <div>
            <div class="photo-box-img">
            <img src={require(`../../../../images/about/concept/${id}.jpg`)} />
            </div>
        
      
          
        </div>
    )
}


export default PhotoBox
