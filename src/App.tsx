import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
//  import Accordian from "./Accordian"
import AwesomeComponent from "./AwesomeComponent"
function App() {
  const [name,setName]=useState<String>('hello')
  return (
    <div className="App">
    <AwesomeComponent name={name} setName={setName} />
    {/* <Accordian preview="hello"/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
