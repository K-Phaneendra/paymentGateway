import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './screens/NavigationBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Based Chat Room</h1>
        </header>
        <NavBar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
