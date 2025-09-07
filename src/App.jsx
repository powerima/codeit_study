import { useState } from 'react';
import styles from './App.module.css';

const initialUsers = [
  { id: 'u3', name: '박노드', email: 'parknode@example.com' },
  { id: 'u1', name: '김코딩', email: 'kimcoding@example.com' },
  { id: 'u2', name: '이해커', email: 'leehacker@example.com' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className={styles.appContainer}>
      <h1>유저 목록</h1>
    </div>
  );
}

export default App;
