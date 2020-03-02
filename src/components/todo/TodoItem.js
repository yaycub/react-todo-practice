import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, completed, handleDelete, styles }) => {

  return (
    <>
      <h3 className={completed ? styles?.completed : styles?.incomplete}>Todo: {name}</h3>
      <button onClick={() => handleDelete(name)}>Delete Todo</button>
    </>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  styles: PropTypes.shape({
    completed: PropTypes.string,
    incomplete: PropTypes.string
  }).isRequired
};

export default TodoItem;
