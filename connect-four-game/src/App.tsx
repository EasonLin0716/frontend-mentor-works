import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Play vs player
        Game rules
        Rules
        Objective
        Be the first player to connect 4 of the same colored discs in a row (either 
        vertically, horizontally, or diagonally).
        How to play
        Red goes first in the first game.
        Players must alternate turns, and only one disc can be dropped in each turn. 
        The game ends when there is a 4-in-a-row or a stalemate.
        The starter of the previous game goes second on the next game.
        Pause
        Continue game
        Restart
        Quit game
        Menu
        Restart
        Player 1
        Player 2
        Player 1's turn
        Player 2's turn
        Wins
        Play again
      </p>
    </>
  )
}

export default App
