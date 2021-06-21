import React from "react";

const Form = props => {
  const newTodo = e => {
    props.setTodo(e.target.value);
  };

  const arrayTodos = e => {
    e.preventDefault();
    if (props.newTodo !== "")
      props.addTodos([
        ...props.allTodos,
        { text: props.newTodo, completed: false, id: Math.random() * 1000 },
      ]);

    props.setTodo("");
  };

  return (
    <form onSubmit={arrayTodos}>
      <input
        type="text"
        className="search-bar"
        value={props.newTodo}
        onChange={newTodo}
      />
      <button className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
