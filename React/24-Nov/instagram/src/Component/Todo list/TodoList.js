import React, { useState } from "react";
import TodoForm from "./TodoList";

function TodoList() {
  const [todos, setTodo] = useState([]);
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm />
    </div>
  );
}

export default TodoList;
