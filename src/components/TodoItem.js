import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
// import { PropTypes as PT } from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (data) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { list } = data;
  const {
    todo, handleChange, deleteTodoProps, setUpdate,
  } = list;

  console.log(todo, list);
  const { completed, id, title } = todo;
  // console.log(todo);

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChange(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>
          <FaTrash
            style={{ color: 'orangered', fontSize: '16px' }}
          />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

// TodoItem.propTypes = {
//   todos: PT.arrayOf(PT.shape({
//     id: PT.string.isRequired,
//     title: PT.string.isRequired,
//     completed: PT.bool.isRequired,
//     handleChangeProps: PT.func.isRequired,
//     deleteTodoProps: PT.func.isRequired,
//     setUpdate: PT.func.isRequired,
//   })),
// };

export default TodoItem;
