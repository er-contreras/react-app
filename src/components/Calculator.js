import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(() => ({
      total: newState.total,
      next: newState.next,
      operation: newState.operation,
    }));
  }

  updateDisplay() {
    let { total, next, operation } = this.state;
    total = total || '';
    operation = operation || '';
    next = next || '';
    return `${total} ${operation} ${next}`;
  }

  render() {
    return (
      <div id="calc-container">
        <div id="output">
          {this.updateDisplay()}
        </div>
        <button onClick={() => this.handleClick('AC')} type="button" className="ac">AC</button>
        <button onClick={() => this.handleClick('+/-')} type="button" className="quantity">+/-</button>
        <button onClick={() => this.handleClick('%')} type="button" className="percentage-operator">%</button>
        <button onClick={() => this.handleClick('÷')} type="button" className="divide-operator">÷</button>
        <button onClick={() => this.handleClick('7')} type="button" className="number">7</button>
        <button onClick={() => this.handleClick('8')} type="button" className="number">8</button>
        <button onClick={() => this.handleClick('9')} type="button" className="number">9</button>
        <button onClick={() => this.handleClick('x')} type="button" className="multiply-operator">x</button>
        <button onClick={() => this.handleClick('4')} type="button" className="number">4</button>
        <button onClick={() => this.handleClick('5')} type="button" className="number">5</button>
        <button onClick={() => this.handleClick('6')} type="button" className="number">6</button>
        <button onClick={() => this.handleClick('-')} type="button" className="subtract-operator">-</button>
        <button onClick={() => this.handleClick('1')} type="button" className="number">1</button>
        <button onClick={() => this.handleClick('2')} type="button" className="number">2</button>
        <button onClick={() => this.handleClick('3')} type="button" className="number">3</button>
        <button onClick={() => this.handleClick('+')} type="button" className="add-operator">+</button>
        <button onClick={() => this.handleClick('0')} type="button" id="zero" className="number">0</button>
        <button onClick={() => this.handleClick('.')} type="button" className="number">.</button>
        <button onClick={() => this.handleClick('=')} type="button" className="equals">=</button>
      </div>
    );
  }
}

export default Calculator;
