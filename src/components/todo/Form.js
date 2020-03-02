import React, { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import TodoList from './TodoList';


const Form = () => {
  const [todo, setTodo] = useState('New Todo');

  const { handleSubmit, todos, setTodos } = useTodos(todo);

  const handleChange = ({ target }) => {
    setTodo(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={handleChange} />
        <button>Create Task</button>
      </form>
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};

export default Form;
