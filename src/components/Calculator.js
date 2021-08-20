import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [initialState, updateState] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    const { total, next, operation } = calculate(initialState, buttonName);
    updateState({ total, next, operation });
  };

  const updateDisplay = () => {
    let { total, next, operation } = initialState;
    total = total || '';
    operation = operation || '';
    next = next || '';
    return `${total} ${operation} ${next}`;
  };

  return (
    <div id="calc-container">
      <div id="output">
        {updateDisplay()}
      </div>
      <button onClick={() => handleClick('AC')} type="button" className="ac">AC</button>
      <button onClick={() => handleClick('+/-')} type="button" className="quantity">+/-</button>
      <button onClick={() => handleClick('%')} type="button" className="percentage-operator">%</button>
      <button onClick={() => handleClick('÷')} type="button" className="divide-operator">÷</button>
      <button onClick={() => handleClick('7')} type="button" className="number">7</button>
      <button onClick={() => handleClick('8')} type="button" className="number">8</button>
      <button onClick={() => handleClick('9')} type="button" className="number">9</button>
      <button onClick={() => handleClick('x')} type="button" className="multiply-operator">x</button>
      <button onClick={() => handleClick('4')} type="button" className="number">4</button>
      <button onClick={() => handleClick('5')} type="button" className="number">5</button>
      <button onClick={() => handleClick('6')} type="button" className="number">6</button>
      <button onClick={() => handleClick('-')} type="button" className="subtract-operator">-</button>
      <button onClick={() => handleClick('1')} type="button" className="number">1</button>
      <button onClick={() => handleClick('2')} type="button" className="number">2</button>
      <button onClick={() => handleClick('3')} type="button" className="number">3</button>
      <button onClick={() => handleClick('+')} type="button" className="add-operator">+</button>
      <button onClick={() => handleClick('0')} type="button" id="zero" className="number">0</button>
      <button onClick={() => handleClick('.')} type="button" className="number">.</button>
      <button onClick={() => handleClick('=')} type="button" className="equals">=</button>
    </div>
  );
};

export default Calculator;
