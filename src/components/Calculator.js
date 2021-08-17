import './Calculator.css';

function MyComponent() {
  return (
    <div id="calc-container">
      <div id="output">0</div>
      <button type="button" className="ac">AC</button>
      <button type="button" className="quantity">+/-</button>
      <button type="button" className="percentage-operator">%</button>
      <button type="button" className="divide-operator">÷</button>
      <button type="button" className="number">7</button>
      <button type="button" className="number">8</button>
      <button type="button" className="number">9</button>
      <button type="button" className="multiply-operator">x</button>
      <button type="button" className="number">4</button>
      <button type="button" className="number">5</button>
      <button type="button" className="number">6</button>
      <button type="button" className="subtract-operator">-</button>
      <button type="button" className="number">1</button>
      <button type="button" className="number">2</button>
      <button type="button" className="number">3</button>
      <button type="button" className="add-operator">+</button>
      <button type="button" id="zero" className="number">0</button>
      <button type="button" className="number">.</button>
      <button type="button" className="equals">=</button>
    </div>
  );
}

export default MyComponent;
