import React from 'react';
import './style.css';
//example to show use of usestate Hook.
// https://unsplash.com/
export default function App() {
  const [a, seta] = React.useState([]);
  // a=[]
  // seta=function

  const p1 = () => {
    const url = prompt('enter image url');
    seta([...a, url]);
  };
  return (
    <div>
      <button onClick={p1}>add gallery</button>
      <h1>total gallery {a.length}</h1>
      {a.map((item) => (
        <img src={item} width="100" height="100" alt="gallery" />
      ))}
    </div>
  );
}
