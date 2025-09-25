/*
  Part 2 - Chapter 1. React 
  
  codeit-fullstack-react-start

  Panel.jsx

  2025. 09. 25

  clone coding
  
*/

import './Panel.css';

export function Panel({ children }) {
  return <section className="panel">{children}</section>;
}