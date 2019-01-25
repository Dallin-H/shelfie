import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            productNameInput: '',
            imageURLInput: '',
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
        const productObj = {
            name: this.state.productNameInput,
            imageURL: this.state.imageURLInput,
            price: this.state.priceInput
        }
        axios.post(`http://localhost:4000/api/product`, productObj)
            .then(() => {
                this.props.handleGetProducts()
            })
        this.setState({
            imageURLInput: '',
            productNameInput: '',
            priceInput: 0
        })
    }


    render() {
        return (
            <div className="Form"
                style={{backgroundColor: 'green'}}
            >
                <div
                style={{
                    height: '100px', width: '150px', backgroundColor: 'blue', margin: '10px'
                }}
                ></div>
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
