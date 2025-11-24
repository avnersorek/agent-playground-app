import { useState, useEffect } from 'react'
import { generateRound } from '../utils/emojiUtils'

export function useEmojiGame() {
  const [round, setRound] = useState(1)
  const [leftEmojis, setLeftEmojis] = useState([])
  const [rightEmojis, setRightEmojis] = useState([])
  const [matchingEmoji, setMatchingEmoji] = useState('')

  useEffect(() => {
    startNewRound()
  }, [])

  const startNewRound = () => {
    const { leftEmojis, rightEmojis, matchingEmoji } = generateRound()
    setLeftEmojis(leftEmojis)
    setRightEmojis(rightEmojis)
    setMatchingEmoji(matchingEmoji)
  }

  const handleEmojiClick = (emoji) => {
    if (emoji === matchingEmoji) {
      setRound(round + 1)
      startNewRound()
    }
  }

  return {
    round,
    leftEmojis,
    rightEmojis,
    handleEmojiClick
  }
}
