import React, { useEffect, useState } from 'react'

function App() {
  let [count,setCount]=useState(0);
  let [color,setcolor]=useState("red")

let increaseCount=()=>{
  setCount(count=count+1)
}

let decreaseCount=()=>{
  setCount(count=count-1)
}

let changeColor=()=>{
  setcolor(color=> (color==='red' ? 'black' : 'red'))
}

useEffect(()=>{console.log('hello');
},[color])

  return (
    <div>
        <h1 style={{color:color}}>Count Value is {count}</h1>
        <button onClick={increaseCount}>Count++</button>
        <br /><br />
        <button onClick={decreaseCount}>Count--</button>
        <br /><br />
        <button  onClick={changeColor}>Change Color</button>

    </div>
  )
}

export default App