import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    fetch('/test')
      .then(res => res.text())
      .then(setMessage);
  }

  return (
    <div className="App">
      <header className="App-header">
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
        
        <button onClick={handleClick}>Connected?</button>
        <h1>{message}</h1>

      </header>
    </div>
  );
}

export default App;
