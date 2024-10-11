import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
// Add import for Banner component
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  // Add state for gameStatus
  const [gameStatus, setGameStatus] = useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    // Check for win or lose conditions
    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onSubmit={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          numOfGuesses={guesses.length}
          answer={answer}
          onRestart={resetGame}
        />
      )}
    </>
  );
}

export default Game;
