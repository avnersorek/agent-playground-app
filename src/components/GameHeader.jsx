export function GameHeader({ round }) {
  return (
    <div className="header">
      <h1>Emoji Double</h1>
      <p className="round">Round: {round}</p>
    </div>
  )
}
