import React from 'react';
import './App.css';
import PlayerList from "./components/PlayerList"
import useDarkMode from "./hooks/useDarkMode"

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <button onClick={ () => toggle() }>Dark Mode</button>
      <PlayerList />
    </div>
  );
}

export default App;
