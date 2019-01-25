import React from 'react';

let Product = (props) => {
    return(
       <div className='Product'>
        <div className='Img__container'>
            IMAGE
        </div>
        <div className='Details__container'>
            <h3>{props.name}</h3>
            <h6>{props.price}</h6>
        </div>
       </div>
    )
}

export default Product