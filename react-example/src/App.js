import logo from './logo.svg';
import './App.css';
import './app.scss';
import Grid from './components/Grid';
import PlayerName from './components/PlayerName';
import UserCount from './components/UserCount';
import { useState } from 'react';
import { calculateWinner } from './utils';

function App() {

let [users, setUsers] = useState([
  {
    name: "Domo Arigato",
    squares: []
  }, 
  {
    name: "Mr. Roboto",
    squares: []
  }
])

let [currentUser, setCurrentUser] = useState(users[0]);
let [gameOver, setGameOver] = useState(false);
let [symbol, setSymbol] = useState("X");

const updateSelection = ((squareIndex) => {
  setSymbol(symbol == "X" ? "O" : "X"); 
  currentUser.squares.push(squareIndex);
  if (calculateWinner(currentUser)) {
    setGameOver(true);
    return;
  }
  setCurrentUser(currentUser == users[0] ? users[1] : users[0]);
})

const updatePlayerName = ((i, name) => {
  users[i].name = name;
  setUsers([...users]); 
})

return (
    <div className="App">
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
      {users.map((user, i) => {
        return (
          <PlayerName key={`${i}`} user={new String(i)} updatePlayerName={updatePlayerName} />
        )
      })}
      <Grid updateSelection={updateSelection} symbol={symbol} />
      {users.map((user, i) => {
        return (
          <UserCount key={`${i}`} user={users[i].name} currentCount={users[i].squares.length } />
        )
      })} 
      {gameOver ? <h2 className="game-over">GAME OVER! {currentUser.name} WINS!</h2> : ""}     
    </div>
  );
}

export default App;
