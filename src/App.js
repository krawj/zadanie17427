import React, { Component } from 'react';
import './App.css';

// import CounterF from './components/CounterF';
import Counter from './components/Counter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="AppHeader">
          <h1 className="App-title">Licznik w ReactJS</h1>
        </header>
        <Counter initValue="108"/>
      </div>
    )
  }
}

/* function App() {
  return (
    <div className="App">
      New App
      <CounterF/>
      <Counter/>
    </div>
  );
} */

export default App;
