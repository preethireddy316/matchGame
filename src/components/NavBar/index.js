const NavBar = props => {
  const {score, timeLeft} = props
  return (
    <nav>
      <ul>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>
        <li>
          <p>Score:{score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{timeLeft} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
