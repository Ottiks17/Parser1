import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch(`http://localhost:3000/scrape?url=${encodeURIComponent(url)}`);
    const data = await responce.json();
    console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Введите URL"
          />
          <button type="submit">Скрапить</button>
        </form>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
