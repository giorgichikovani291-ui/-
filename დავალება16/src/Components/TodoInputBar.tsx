import type { ChangeEvent, FormEvent } from "react";

interface TodoInputBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function TodoInputBar({
  value,
  onChange,
  onSubmit,
}: TodoInputBarProps) {
  return (
    <form className="todo-input-bar" onSubmit={onSubmit}>
      <div className="todo-input-pill">
        <span className="todo-input-check">✓</span>
        <input
          type="text"
          placeholder="Note"
          value={value}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="todo-add-btn">
        +
      </button>
    </form>
  );
}
