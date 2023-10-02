import React, { useState } from 'react';
import '../css/SimpleMath.css';

const SimpleMath = () => {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const handleMultiplication = () => {
    setResult(number1 * number2);
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  const handleDivision = () => {
    if (number2 !== 0) {
      setResult(number1 / number2);
    } else {
      alert("Division by zero is not allowed!");
    }
  };

  return (
    <div className="simple-math">
      <h2>Simple Math Operations</h2>
      <div className='input'>
        <input
          type="number"
          placeholder="Enter number 1"
          value={number1}
          onChange={handleNumber1Change}
        />
        <input
          type="number"
          placeholder="Enter number 2"
          value={number2}
          onChange={handleNumber2Change}
        />
      </div>
      <div className="button">
      <button onClick={handleMultiplication}>X</button>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default SimpleMath;
