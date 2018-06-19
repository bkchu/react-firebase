import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
