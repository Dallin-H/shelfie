import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            imageURLInput: '',
            productNameInput: '',
            priceInput: 0
        }
        this.handleCancelButton = this.handleCancelButton.bind(this)
        this.handleAddToInventoryButton = this.handleAddToInventoryButton.bind(this)
    }
    //methods here:
    handleImageURLInput(value) {
        this.setState({
            imageURLInput: value
        })
    }

    handleProductNameInput(value) {
        this.setState({
            productNameInput: value
        })
    }

    handlePriceInput(value) {
        this.setState({
            priceInput: value
        })
    }

    handleCancelButton() {
        this.setState({
            imageURLInput: '',
            productNameInput: '',
            priceInput: 0
        })
    }

    handleAddToInventoryButton() {

    }


    render() {
        return (
            <div className="Form">
                {/*img will be a default until populated, then reset to default after cancel or add */}
                {/* <img /> */}
                <h6>Image URL:</h6>
                <input
                    onChange={(e) => this.handleImageURLInput(e.target.value)}
                    value={this.state.imageURLInput}
                />
                <h6>Product Name:</h6>
                <input
                    onChange={(e) => this.handleProductNameInput(e.target.value)}
                    value={this.state.productNameInput}
                />
                <h6>Price:</h6>
                <input
                    onChange={(e) => this.handlePriceInput(e.target.value)}
                    value={this.state.priceInput}
                />
                <div className='Button__container'>
                    <button
                        onClick={() => this.handleCancelButton()}>
                        Cancel </button>
                    <button
                        onClick={() => this.handleAddToInventoryButton()}>
                        Add to Inventory </button>
                </div>
            </div>
        );
    }
}

export default Form;
