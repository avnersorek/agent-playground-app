import './App.css'
import { useEmojiGame } from './hooks/useEmojiGame'
import { GameHeader } from './components/GameHeader'
import { EmojiGrid } from './components/EmojiGrid'

function App() {
  const { round, leftEmojis, rightEmojis, handleEmojiClick } = useEmojiGame()

  return (
    <div className="app">
      <GameHeader round={round} />

      <div className="game-container">
        <EmojiGrid
          emojis={leftEmojis}
          onEmojiClick={handleEmojiClick}
          side="left"
        />

        <div className="divider"></div>

        <EmojiGrid
          emojis={rightEmojis}
          onEmojiClick={handleEmojiClick}
          side="right"
        />
      </div>
    </div>
  )
}

export default App
