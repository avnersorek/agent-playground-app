import { useState } from 'react'
import { generateRound } from '../utils/emojiUtils'

export function useEmojiGame() {
  const [round, setRound] = useState(1)

  // Initialize game state using lazy initialization
  const [gameState, setGameState] = useState(() => generateRound())

  const startNewRound = () => {
    setGameState(generateRound())
  }

  const handleEmojiClick = (emoji) => {
    if (emoji === gameState.matchingEmoji) {
      setRound(round + 1)
      startNewRound()
    }
  }

  return {
    round,
    leftEmojis: gameState.leftEmojis,
    rightEmojis: gameState.rightEmojis,
    handleEmojiClick
  }
}
