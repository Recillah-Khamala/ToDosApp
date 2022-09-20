import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.PureComponent {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take kids to school',
        completed: true,
      },
      {
        id: 2,
        title: 'Clean the house',
        completed: false,
      },
      {
        id: 3,
        title: 'Read for 30 mins',
        completed: false,
      },
    ],
  }

  render() {
    return (
      <>
        <Header />
        <TodosList todos={this.state.todos} />
      </>
    );
  }
}

export default TodoContainer;
