// src/App.jsx
import React from 'react';
import { ContextWrapper } from './components/Context';
import { Counter, MousePosition, RandomColor, FetchData } from './components/Effect';
import { LightSwitch, StateCounter, ColorPicker, TodoList } from './components/State';

function App() {
  return (
    <div>
      <ContextWrapper />
      <Counter />
      <MousePosition />
      <RandomColor />
      <FetchData />
      <LightSwitch />
      <StateCounter />
      <ColorPicker />
      <TodoList />
    </div>
  );
}

export default App;
