import React from 'react';
import TodoApp from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoApp/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
