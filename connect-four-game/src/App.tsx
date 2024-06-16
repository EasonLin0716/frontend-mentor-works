import './App.css'
import VSCPUButton from './components/button/VSCPUButton'
import VSPlayerButton from './components/button/VSPlayerButton'
import ContinueGameButton from './components/button/ContinueGameButton'
import QuitGameButton from './components/button/QuitGameButton' 
import MenuButton from './components/button/MenuButton'
import RulesConfirmButton from './components/button/RulesConfirmButton'

function App() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <VSCPUButton />
        <VSPlayerButton />
        <ContinueGameButton />
        <QuitGameButton />
        <MenuButton />
        <RulesConfirmButton />
      </div>
      <p>
        {/* Play vs player
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
        Play again */}
      </p>
    </>
  )
}

export default App
