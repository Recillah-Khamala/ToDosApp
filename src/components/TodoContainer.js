import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.PureComponent {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take kids to school',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Clean the house',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Read for 30 mins',
        completed: false,
      },
    ],
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: exercise,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo
            addTodoProps={this.addTodoItem}
          />
          <TodosList
            todos={this.state.todos}
            handleChange={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
