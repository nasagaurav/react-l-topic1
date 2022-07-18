import React from 'react';
import './style.css';
//example to show use of usestate Hook.
export default function App() {
  const [a, seta] = React.useState([]); //[ [] , function ]
  // a=[]
  // seta=function
  // console.log(React.useState([]))

  const p1=()=>{
      seta(  [...a,'']  )    
  }
  return (
    <div>
      <button onClick={p1}>add more questions </button>
      <h1>total questions {a.length} </h1>
      <ol>
        {a.map(item=><li>question </li>)}
      </ol>
    </div>
  );
}
