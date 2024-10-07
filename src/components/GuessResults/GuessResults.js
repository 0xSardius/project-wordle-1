import React from "react";

function GuessResults({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess, index) => (
        <p key={index} class="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
