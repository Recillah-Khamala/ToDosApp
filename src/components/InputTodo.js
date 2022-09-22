import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { PropTypes as PT } from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { addTodoProps } = props;
    const { title } = inputText;
    if (title.trim()) {
      addTodoProps(title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  const { title } = inputText;

  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button onClick={(e) => handleSubmit(e)} type="button" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PT.func.isRequired,
};

export default InputTodo;
