import './index.css'

const GameResult = props => {
  const {score, backToGame} = props
  const back = () => {
    backToGame()
  }
  return (
    <div className="bg-container">
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p>YOUR SCORE</p>
        <p>{score}</p>
        <button type="button" onClick={back}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameResult
