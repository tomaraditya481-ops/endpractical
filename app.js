const { useState } = React;

function factorial(n) {
  if (n < 0) return null;
  let result = 1n;
  for (let i = 2n; i <= n; i += 1n) {
    result *= i;
  }
  return result;
}

function App() {
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
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'card' },
        React.createElement('h1', { className: 'heading' }, 'Responsive Factorial Calculator'),
        React.createElement('p', { className: 'description' }, 'Enter a non-negative integer to calculate its factorial. This responsive React page works well on desktop and mobile screens.'),
        React.createElement('form', { onSubmit: handleSubmit },
          React.createElement('div', { className: 'input-group' },
            React.createElement('label', null, 'Number'),
            React.createElement('input', {
              type: 'number',
              min: '0',
              step: '1',
              value: value,
              onChange: (event) => setValue(event.target.value),
              placeholder: 'e.g. 5'
            })
          ),
          React.createElement('button', { type: 'submit' }, 'Calculate Factorial')
        ),
        error && React.createElement('div', { className: 'result', style: { background: '#fee2e2', borderColor: '#fecaca', color: '#991b1b' } }, error),
        result && React.createElement('div', { className: 'result' }, result),
        React.createElement('p', { className: 'footer' }, 'Built with React and responsive CSS for modern devices.')
      )
    )
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));
