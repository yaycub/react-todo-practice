import { useState } from 'react';

export const useTodos = (todo) => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos(state => [...state, { name: todo, completed: false }]);
  };

  return { todos, handleSubmit, setTodos };
};
