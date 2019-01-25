import React from 'react';
import axios from 'axios';

let Product = (props) => {
    let handleDeleteMessage = () => {
        const productID = //oh my sweeet chicken tenders. I don't know.
            axios.delete(`http://localhost:4000/api/product/${productID}`)
                .then(() => {
                    this.props.handleGetProducts()
                })
    }


    return (
        <div className='Product'
            style={{
                backgroundColor: '#D34735', width: '350x', height: 'auto',
                display: 'flex', justifyContent: 'centered', margin: '10px'
            }}>
            <div className='Img__container'
                style={{ height: '100px', width: '150px', backgroundColor: 'blue', margin: '5px' }}>
                IMAGE
            </div>
            <div className='Rightside__container'>
                <div className='Details__container'>
                    <div>
                        <h3>{props.name}</h3>
                        <h6>${props.price}</h6>
                    </div>
                </div>
                <div className="Button__container">
                    <button> EDIT </button>
                    <button
                        onClick={() => handleDeleteMessage()}>
                        DELETE
            </button>
                </div>
            </div>
        </div>
    )
}

export default Product