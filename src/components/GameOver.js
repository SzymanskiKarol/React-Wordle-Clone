import React, { useContext } from 'react'
import { AppContext } from "../App"

function GameOver() {
    const { gameOver, setGameOver, correctWord, currAttempt } = useContext(AppContext)
    return (
        <div className='gameOver'>
            <h3>{gameOver.guessedWord ? "Yes! Correct Word! You Win!" : "You Failed"}</h3>
            <h1>Correct word: {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}

export default GameOver