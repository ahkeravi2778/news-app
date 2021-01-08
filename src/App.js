import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Ahkeravi Click To Know More...
        </p>
        <a
          className="App-link"
          href="/news"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic newsApp
        </a>
      </header>
    </div>
  );
}

export default App;
