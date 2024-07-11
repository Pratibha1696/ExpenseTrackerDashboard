import React, { useState } from 'react';
import '../components/Calculator.css';

const calculatorPage = () => {
  const [value, setValue] = useState('');

  const handleClick = (val) => {
    setValue(value + val);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleEquals = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#b342f5" }}>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={value} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}>*</button>

          <button className="operator" onClick={() => handleClick('/')}>/</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEquals}>=</button>
          <button onClick={() => handleClick('0')}>0</button>
        </div>
      </div>
    </>
  );
};

export default calculatorPage;
