/*
  Part 2 - Chapter 1. React 
  
  codeit-fullstack-react-start

  App.jsx

  2025. 09. 24

  clone coding
  
*/


import './App.css';
import { Panel } from './components/Panel';
import { TodoItem } from './components/TodoItem';
import { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState(['리액트 기초 배우기', 'To-Do List 만들어보기']);
  const [inputText, setInputText] = useState('');
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };

  const handleKeyDown = (event) => {
    // 한글 입력 중일 때는 Enter 키 동작을 무시
    if(event.nativeEvent.isComposing) return;
    if(event.key != 'Enter') return;
    handleAddTodo();
  };
  
  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    setTodos((prev) => [...prev, inputText]);
    setInputText('');
  };
  
  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">오늘의 할 일</h1>
        <p className="today">오늘은 {new Date().toLocaleDateString()} 입니다.</p>
      </div>
      <Panel>
        <div className="input-container">
          <input type="text" className="todo-input" placeholder="새로운 할 일을 입력하세요"
            value={inputText} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <button className="add-button" onClick={handleAddTodo}>추가</button>        
        </div>
      </Panel>
      <Panel>
        {todos.length === 0 ? (
          <p className="no-todos">할 일이 없습니다!</p>
        ) : (
          <ul className="todo-list">
            {todos.map((text, index) => (
              <TodoItem key={index} text={text} />
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}

export default App
