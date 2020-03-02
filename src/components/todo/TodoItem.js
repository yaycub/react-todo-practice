import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, completed, handleCompleted, handleDelete, styles }) => {

  return (
    <>
      <h3 className={completed ? styles?.completed : styles?.incomplete}>Todo: {name}</h3>
      <button onClick={handleCompleted}>{completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
      <button onClick={handleDelete}>Delete Todo</button>
    </>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    completed: PropTypes.object,
    incomplete: PropTypes.object
  }).isRequired
};

export default TodoItem;
