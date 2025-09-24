/*
  Part 2 - Chapter 1. React 
  
  codeit-fullstack-react-start

  App.jsx

  2025. 09. 24

  clone coding
  
*/


import './App.css';

function App() {
  const title = '오늘의 할 일';
  const todos = [];

  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="today">오늘은 {new Date().toLocaleDateString()} 입니다.</p>
      </div>
      <section className="input-section">
        <input type="text" placeholder="새로운 할 일을 입력하세요" />
        <button>추가</button>        
      </section>
      <section className="list-section">
        {todos.length === 0 ? (
          <p className="no-todos">할 일이 없습니다!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App
