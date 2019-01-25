import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
    this.handleGetProducts = this.handleGetProducts.bind(this)
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/inventory`)
      .then(response => {
        this.setState({
          inventory: response.data
        })
      })
  }

  handleGetProducts() {
    axios.get(`http://localhost:4000/api/inventory`)
      .then(response => {
        this.setState({
          inventory: response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline' }}>
          <Dashboard
            inventory={this.state.inventory}
          />
          <Form
            inventory={this.state.inventory}
            handleGetProducts={this.handleGetProducts}
          />
        </div>
      </div>
    );
  }
}


export default App;
