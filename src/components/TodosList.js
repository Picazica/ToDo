import React from "react";
import Todo from "./Todo.js";

const TodosList = props => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map(todo => {
          return (
            <Todo
              todo={todo}
              status={todo.status}
              todos={props.todos}
              setTodos={props.setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodosList;
