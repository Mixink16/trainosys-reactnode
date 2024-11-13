// src/components/Effect.jsx
import React, { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Current count:', count);
  }, [count]);

  return (
    <div>
      <h2>This is the Effect Activity 1: Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(evt) {
      setPosition({ x: evt.clientX, y: evt.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>This is the Effect Activity 2: Mouse Position</h2>
      <p>Mouse Position: X = {position.x}, Y = {position.y}</p>
    </div>
  );
}

export function RandomColor() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColor(randomColor);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: color, padding: '20px', textAlign: 'center' }}>
      <h2>This is the Effect Activity 3: Random Color</h2>
      <p>Current Color: {color}</p>
    </div>
  );
}

export function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>This is the Effect Activity 4: Fetch Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.title} - Completed: {item.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}
