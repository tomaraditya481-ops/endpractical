import { useState } from 'react';

function factorial(n) {
  if (n < 0) return null;
  let result = 1n;
  for (let i = 2n; i <= n; i += 1n) {
    result *= i;
  }
  return result;
}

export default function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const number = Number(value);

    if (Number.isNaN(number) || !Number.isInteger(number)) {
      setError('Please enter a whole number.');
      setResult('');
      return;
    }

    if (number < 0) {
      setError('Factorial is defined only for non-negative integers.');
      setResult('');
      return;
    }

    if (number > 170) {
      setError('Choose a smaller number to avoid extremely large output.');
      setResult('');
      return;
    }

    setError('');
    const computed = factorial(BigInt(number));
    setResult(`${number}! = ${computed}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">Responsive Factorial Calculator</h1>
        <p className="description">
          Enter a non-negative integer to calculate its factorial. This responsive React page works well on desktop and mobile screens.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="factorial-input">Number</label>
            <input
              id="factorial-input"
              type="number"
              min="0"
              step="1"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="e.g. 5"
            />
          </div>

          <button type="submit">Calculate Factorial</button>
        </form>

        {error && (
          <div className="result error-box">{error}</div>
        )}

        {result && (
          <div className="result">{result}</div>
        )}

        <p className="footer">Built with React and responsive CSS for modern devices.</p>
      </div>
    </div>
  );
}
