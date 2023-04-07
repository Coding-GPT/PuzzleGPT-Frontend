import React, { useState } from 'react';
import Slider from 'react-slider';
import axios from 'axios';

function App() {
  const [difficulty, setDifficulty] = useState(5);
  const [puzzle, setPuzzle] = useState('');
  const [clue, setClue] = useState('');

  const generatePuzzle = async () => {
    const response = await axios.post('http://localhost:5001/puzzle', { difficulty });
    setPuzzle(response.data.puzzle);
  };

  const getPuzzleClue = async () => {
    const response = await axios.post('http://localhost:5001/clue', { puzzle });
    setClue(response.data.clue);
  };

  return (
    <div className="App">
      <h1>Word Puzzle Generator</h1>
      <p>Difficulty: {difficulty}</p>
      <Slider
        min={0}
        max={10}
        value={difficulty}
        onChange={value => setDifficulty(value)}
      />
      <button onClick={generatePuzzle}>Generate Puzzle</button>
      <p>{puzzle}</p>
      <button onClick={getPuzzleClue}>Get Clue</button>
      <p>{clue}</p>
    </div>
  );
}

export default App;
