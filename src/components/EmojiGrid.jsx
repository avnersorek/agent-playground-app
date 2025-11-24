export function EmojiGrid({ emojis, onEmojiClick, side }) {
  return (
    <div className={`side ${side}-side`}>
      <div className="emoji-grid">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className={`emoji-button ${emoji ? 'has-emoji' : 'empty'}`}
            onClick={() => emoji && onEmojiClick(emoji)}
            disabled={!emoji}
          >
            {emoji || ''}
          </button>
        ))}
      </div>
    </div>
  )
}
