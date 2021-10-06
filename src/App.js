import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard';
import Child from './components/Child';

function App() {
  return (
    <div className="App">
      <GameBoard initialRow={3} initialCol={10}/>

      <Child name='gitglen' id={`#abc${Math.floor((Math.random() * 10000000))}`}/>
      <header className="App-header">
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
