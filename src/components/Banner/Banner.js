import React from "react";

function Banner({ gameStatus, numOfGuesses, answer, onRestart }) {
  return (
    <div className={`${gameStatus === "won" ? "happy" : "sad"} banner`}>
      {gameStatus === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default Banner;
