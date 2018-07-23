import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {res: []}

  componentDidMount() {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(users => {this.setState({ users }); console.log(users)});
  }

  render() {
    return (
      <div className="App">
        <h1>Recepies</h1>
      </div>
    );
  }

}

export default App;
