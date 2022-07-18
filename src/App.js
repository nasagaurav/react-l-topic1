import React from 'react';
import './style.css';
//example to show use of usestate Hook.
export default function App() {

  const p1=()=>{}
  const p2=()=>{}
  const p3=()=>{}
  return (
    <div>
      <h1>counter ?</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </div>
  );
}
