import React from "react";
import './App.css';
import GetClients from "./components/GetClients";
import Test from "./components/Test"
import Test2 from "./components/Test2"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetClients />
        {/*<Test />*/}
      {/*<Test2 />*/}

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
