import React, { useState, useEffect } from 'react';

export function LightSwitch() {
  const [isLightOn, setIsLightOn] = useState(false);

  function toggler() {
    setIsLightOn(prevState => !prevState);
  }

  return (
    <div style={{ backgroundColor: isLightOn ? '#fefefe' : '#333', color: isLightOn ? '#000' : '#fff', padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
      <h2>{isLightOn ? 'The light is ON' : 'The light is OFF'}</h2>
      <button onClick={toggler}>{isLightOn ? 'Turn Off' : 'Turn On'}</button>
    </div>
  );
}

export function StateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const savedCount = localStorage.getItem('counter');
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value, 10);
    if (newStep >= 1) {
      setStep(newStep);
    }
  };

  return (
    <div>
      <h2>This is the State Activity 2: Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment by {step}</button>
      <button onClick={decrement}>Decrement by {step}</button>

      <div>
        <label htmlFor="stepInput">Set Step Value: </label>
        <input
          id="stepInput"
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
        />
      </div>

      <div>
        <p>
          <strong>Note:</strong> The counter value is persisted in local storage.
        </p>
      </div>
    </div>
  );
}

export function ColorPicker() {
  const [color, setColor] = useState('red');

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <h2>This is the State Activity 3: ColorPicker</h2>
      <select value={color} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ width: '100px', height: '100px', backgroundColor: color, marginTop: '20px' }}></div>
    </div>
  );
}

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function deleteTodo(todo) {
    setTodos(todos.filter(t => t !== todo));
  }

  return (
    <div>
      <h2>This is the State Activity 4: TodoList</h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
