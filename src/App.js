import React from 'react';
import './style.css';
//example to show use of usestate Hook.
export default function App() {
  const [x, setx] = React.useState(0); // [0,function]
  // x=0
  // setx=function

  console.log(React.useState(0));

  const p1 = () => {
    setx(x+1)
  };
  const p2 = () => {
    setx(x-1)
  };
  const p3 = () => {
    setx(0);//set value of x is 0
  };
  return (
    <div>
      <h1>counter {x}</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </div>
  );
}
