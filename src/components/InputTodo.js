import React, {PureComponent} from "react";

class InputTodo extends PureComponent {
  state = {
    title: "",
  }

  onChange = e => {
    this.state({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  };

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Add Todo..." 
          value={this.state.title} 
          name="title"
          onChange={this.onChange}
          onSubmit={this.handleSubmit}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo