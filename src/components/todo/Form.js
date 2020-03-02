import React, { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';


const Form = () => {
  const [todo, setTodo] = useState('New Todo');

  const { handleSubmit } = useTodos(todo);

  const handleChange = ({ target }) => {
    setTodo(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={todo} onChange={handleChange} />
      <button>Create Task</button>
    </form>
  );
};

export default Form;
