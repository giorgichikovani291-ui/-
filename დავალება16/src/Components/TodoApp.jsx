import { useState } from "react";
import TodoHero from "./TodoHero";
import TodoInputBar from "./TodoInputBar";
import TodoList from "./TodoList";
import "./TodoApp.css";

function formatNowLabel() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `Today at ${hours}:${minutes} ${ampm}`;
}

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Dinner", time: "Today at 8:00 PM", completed: true },
    { id: 2, text: "Walk with Coby", time: "Today at 3:30 PM", completed: false },
    { id: 3, text: "Buy Groceries", time: "Today at 10:00 AM", completed: false },
    { id: 4, text: "Go to repair shop", time: "Today at 9:00 AM", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      time: formatNowLabel(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-page">
      <div className="todo-card">
        <TodoHero />

        <TodoInputBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleAddTodo}
        />

        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}
