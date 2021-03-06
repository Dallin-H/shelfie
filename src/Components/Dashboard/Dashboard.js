import React, { Component } from 'react';
import Product from './../Product/Product'

class Dashboard extends Component {



    render() {
        const mappedInventory = this.props.inventory.map((productObj) => {
            return (
                <Product
                    key={productObj.id}
                    name={productObj.name}
                    price={productObj.price}
                />
            )
        })


        return (
            <div className="Dashboard"
            >
                Dashboard
        {mappedInventory}
            </div>
        );
    }
}

export default Dashboard;
