import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';



class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          index: 0,
          name: 'shoes',
          price: 100
        },
        {
          index: 1,
          name: 'shirts',
          price: 10
        },
        {
          index: 2,
          name: 'pants',
          price: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventory}
        />
        <Form />
      </div>
    );
  }
}


export default App;
