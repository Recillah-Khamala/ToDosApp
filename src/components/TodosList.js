import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <li TodoItem key={todo.id}>{todo}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodosList;
