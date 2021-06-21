import React, { useState, useEffect } from "react";
import "./App.css";
import TodosList from "./components/TodosList.js";
import Form from "./components/Form";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localStorage.getItem("todos")) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        setTodo={setTodo}
        newTodo={todo}
        allTodos={todos}
        addTodos={setTodos}
      />
      <TodosList todos={todos} setTodos={setTodos} todo={todo} />
    </div>
  );
}

export default App;
