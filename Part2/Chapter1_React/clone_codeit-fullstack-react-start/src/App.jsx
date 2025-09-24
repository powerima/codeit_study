function App() {
  return (
    <div>
      <h1>오늘의 할 일</h1>
      <section>
        <input type="text" placeholder="새로운 할 일을 입력하세요" />
        <button>추가</button>        
      </section>
      <section>
        <ul className="todo-list">
          <li>리액트 기초 배우기</li>
          <li>To-Do List 만들어보기</li>
        </ul>
      </section>
    </div>
  );
}

export default App
