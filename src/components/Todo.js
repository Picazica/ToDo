import React from "react";

const Todo = props => {
  const changeStatus = () => {
    props.setTodos(
      props.todos.map(item => {
        if (props.todo.id === item.id) return { ...item, completed: true };
        return item;
      })
    );
  };

  const removeTodo = () => {
    props.setTodos(
      props.todos.filter(item => {
        return props.todo.id !== item.id;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </li>
      <button onClick={changeStatus} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
