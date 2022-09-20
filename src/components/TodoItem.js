import React from 'react';

class TodoItem extends React.PureComponent {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.title}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
