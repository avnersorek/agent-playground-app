export const EMOJI_POOL = [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
  '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙',
  '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
  '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥',
  '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮',
  '🥵', '🥶', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕',
  '😟', '🙁', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨',
  '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩',
  '😫', '🥱', '😤', '😡', '😠', '🤬', '👹', '👺', '💀', '👻',
  '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀'
]

export function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function getRandomPositions(count, total) {
  const positions = []
  while (positions.length < count) {
    const pos = Math.floor(Math.random() * total)
    if (!positions.includes(pos)) {
      positions.push(pos)
    }
  }
  return positions
}

export function generateRound() {
  const GRID_SIZE = 25
  const EMOJIS_PER_SIDE = 5

  // Pick one matching emoji
  const matchingEmoji = EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)]

  // Get remaining emojis
  const remainingEmojis = EMOJI_POOL.filter(e => e !== matchingEmoji)

  // Pick 4 unique emojis for the non-matching positions (for each side)
  const shuffledRemaining = shuffleArray(remainingEmojis)
  const leftOthers = shuffledRemaining.slice(0, 4)
  const rightOthers = shuffledRemaining.slice(4, 8)

  // Create arrays with the matching emoji and others
  const leftEmojiSet = [matchingEmoji, ...leftOthers]
  const rightEmojiSet = [matchingEmoji, ...rightOthers]

  // Get random positions for each side
  const leftPositions = getRandomPositions(EMOJIS_PER_SIDE, GRID_SIZE)
  const rightPositions = getRandomPositions(EMOJIS_PER_SIDE, GRID_SIZE)

  // Create 5x5 grids with emojis at specific positions
  const leftEmojis = Array(GRID_SIZE).fill(null).map((_, index) => {
    const posIndex = leftPositions.indexOf(index)
    return posIndex !== -1 ? leftEmojiSet[posIndex] : null
  })

  const rightEmojis = Array(GRID_SIZE).fill(null).map((_, index) => {
    const posIndex = rightPositions.indexOf(index)
    return posIndex !== -1 ? rightEmojiSet[posIndex] : null
  })

  return { leftEmojis, rightEmojis, matchingEmoji }
}
