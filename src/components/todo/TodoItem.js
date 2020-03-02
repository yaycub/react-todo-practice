import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, completed, handleClick, styles }) => {

  return (
    <>
      <h3 className={completed ? styles?.completed : styles?.incomplete}>Todo: {name}</h3>
      <button onClick={handleClick}>{completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
    </>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    completed: PropTypes.object,
    incomplete: PropTypes.object
  }).isRequired
};

export default TodoItem;
