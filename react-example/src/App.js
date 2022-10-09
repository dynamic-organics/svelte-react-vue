import logo from './logo.svg';
import './App.css';
import './app.scss';
import Grid from './components/Grid';
import PlayerName from './components/PlayerName';
import UserCount from './components/UserCount';

// This was pulled over from svelte, however this will not be stateful
let users = [
  {
    name: "Domo Arigato",
    squares: []
  }, 
  {
    name: "Mr. Roboto",
    squares: []
  }
]

let currentUser = users[0];
let symbol = "X";
let gameOver = false;

// For any component where you need to lift the state, the parent component needs to 
// create and inject the function into the component props
// Similarly, the component must be aware of the injected function
const updateSelection = ((squareIndex) => {
  console.log(squareIndex);
  symbol = "X" ? "O" : "X";
  currentUser.squares.push(squareIndex);
  if (calculateWinnner(currentUser)) {
    gameOver = true;
    return;
  }
  console.log(currentUser);
  currentUser = currentUser == users[0] ? users[1] : users[0];
  console.log(currentUser);
})

const updatePlayerName = ((i, name) => {
  users[i].name = name;
  console.log(users);
})

const calculateWinnner = ((user) => {
  let winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ]
  // Horizontal
  let win = false;

  for (let combo of winners) {
    let win = checkCombo(combo, user);
    if (win) { 
      console.log("We got a winner!");
      console.log(user);
      return win;
    }
  }
  
  return false;
})

const checkCombo = ((arr, user) => {
  let one = false, two = false, three = false; 

  for (let square of user.squares) {
    console.log(`Checking ${square}`);
    console.log(arr[0]);
    if (square === arr[0]) {
      
      console.log("Matches one");
      one = true;
    }
    if (square === arr[1]) {
      console.log("Matches two");
      two = true;
    }
    if (square === arr[2]) {
      console.log("Matches three");
      three = true;
    }
  }

  return one && two && three;
})

function App() {
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
          // Had to convert the index to string because... *shrug*
          <PlayerName key={`${i}`} user={new String(i)} updatePlayerName={updatePlayerName} />
        )
      })}
      <Grid updateSelection={updateSelection} symbol={symbol} />
      {users.map((user, i) => {
        return (
          // Had to convert the index to string because... *shrug*
          <UserCount key={`${i}`} user={users[i].name} currentCount={users[i].squares.length } />
        )
      })}      
    </div>
  );
}

export default App;
