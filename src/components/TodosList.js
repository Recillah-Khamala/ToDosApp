import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (data) => {
  const {
    handleChange, deleteTodoProps, setUpdate, todos,
  } = data;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          list={{
            handleChange, deleteTodoProps, setUpdate, todo,
          }}
        />
      ))}
    </ul>
  );
};

export default TodosList;
