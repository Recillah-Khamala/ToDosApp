import React from 'react';
// import { PropTypes as PT } from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (data) => {
  const {
    handleChange, deleteTodoProps, setUpdate, todos,
  } = data;
  console.log(handleChange);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          // todo={todo}
          list={{
            handleChange, deleteTodoProps, setUpdate, todo,
          }}
          // handleChangeProps={handleChangeProps}
          // deleteTodoProps={deleteTodoProps}
          // setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

// TodosList.propTypes = {
//   todos: PT.arrayOf(PT.shape({
//     id: PT.string.isRequired,
//     title: PT.string.isRequired,
//     completed: PT.bool.isRequired,

//   })),
// };

export default TodosList;
