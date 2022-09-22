import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
  state = {
    title: '',
  }

  onChange = (e) => {
    this.state({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      this.props.addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {

    const { title } = this.state

    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
