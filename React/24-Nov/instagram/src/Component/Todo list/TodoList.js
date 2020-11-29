import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "../_Cards.scss";
function TodoList() {
  const [todos, setTodo] = useState([]);

  //Add Comment
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    setTodo(newTodo);
    // console.log(...todos);
  };

  //Edit Comment
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodo((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //Remove Comment
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodo(removeArr);
  };

  //Complete Comment
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodo(updatedTodos);
  };
  return (
    <div>
      {/* <h1>What's the plan for today?</h1> */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
