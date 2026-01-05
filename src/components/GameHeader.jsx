import PropTypes from 'prop-types'

export function GameHeader({ round }) {
  return (
    <div className="header">
      <h1>Emoji Double</h1>
      <p>Select the emoji that appears in both sides</p>
      <p className="round">Round: {round}</p>
    </div>
  )
}

GameHeader.propTypes = {
  round: PropTypes.number.isRequired
}
