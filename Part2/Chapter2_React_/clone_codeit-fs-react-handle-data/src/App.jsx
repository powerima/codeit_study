import { useState } from 'react';
import styles from './App.module.css';

const initialUser = [
  { id: 'u3', name: '박노드', email: 'parknode@example.com'},
  { id: 'u1', name: '김코딩', email: 'kimcoding@example.com'},
  { id: 'u2', name: '이해커', email: 'leehacker@example.com'},
];

function App() {
  const [users, setUsers] = useState(initialUser);

  /* 이름 순 정렬 이벤트 함수 */
  const handleSortByName = () => {
    // users.sort((a, b) => a.name.localeCompare(b.name));  // wrong
    // const sortedUser = [...users].sort((a, b) => a.name.localeCompare(b.name)); // good
    setUsers((prev) => prev.toSorted((a, b) => a.name.localeCompare(b.name)));  // best
  };

  /* 삭제 버튼 이벤트 함수 */
  const handleDelete = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <div className={styles.appContainer}>
      <h1>유저 목록</h1>
      <button onClick={handleSortByName}>이름 순 정렬</button>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <div>
              <strong>{user.name}</strong>
              <span>({user.email})</span>
            </div>
            <button onClick={() => handleDelete(user.id)}>삭제</button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default App
