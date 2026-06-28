import type { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <div className="todo-item-text">
        <span className="todo-item-title">{todo.text}</span>
        <span className="todo-item-time">{todo.time}</span>
      </div>

      <div className="todo-item-actions">
        <button
          className={todo.completed ? "todo-check checked" : "todo-check"}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed && "✓"}
        </button>
        <button className="todo-trash" onClick={() => onDelete(todo.id)}>
          🗑
        </button>
      </div>
    </li>
  );
}
