import './TodoItem.css';
import trashIcon from '../../assets/trash.svg';

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <span className={`todo-text ${todo.isDone ? 'done' : ''}`} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        <img src={trashIcon} />
      </button>
    </li>
  );
}
