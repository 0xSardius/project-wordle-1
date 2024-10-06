import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess.toUpperCase());
    setGuess("");
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        minLength={5}
        maxLength={5}
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
