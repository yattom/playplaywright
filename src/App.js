import React from "react";
import logo from './logo.svg';
import './App.css';

class SayHello extends React.Component {
  render() {
    return <div>
      <h1>Name</h1>
      <input name="name" id="name" />
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <SayHello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          !!!Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
