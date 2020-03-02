import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import styles from './styles/TodoItem.css';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (name) => {
    setTodos(state => state.filter(todos => todos.name !== name));
  };

  const todoItemElements = todos.map((todo, i) => (
    <li key={i}>
      <TodoItem 
        name={todo.name}
        completed={todo.completed}
        handleDelete={handleDelete}
        styles={styles}
        index={i}
      />
    </li>
  ));

  return (
    <ul>
      Todos:
      {todoItemElements}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default TodoList;
