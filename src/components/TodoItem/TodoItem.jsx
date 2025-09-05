import './TodoItem.css';

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <span className={`todo-text ${todo.isDone ? 'done' : ''}`} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  );
}
