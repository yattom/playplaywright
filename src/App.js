import React from "react";
import logo from './logo.svg';
import './App.css';

class SayHello extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      greeting: '',
    };
  }

  setName(e) {
    this.setState({name: e.target.value})
  }

  sayHello() {
    this.setState({greeting: 'Hi, ' + this.state.name + '!'});
  }

  render() {
    return <div>
      <h1>Name</h1>
      <input name="name" id="name"
        onChange={(e) => { this.setName(e) }}/><br />
      <button id="say_hello"
        onClick={() => {this.sayHello()}} >Greet</button>
      <div id="greeting">{this.state.greeting}</div>
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
