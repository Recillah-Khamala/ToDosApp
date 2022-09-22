import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </>
    );
  }
}

export default TodosList;
