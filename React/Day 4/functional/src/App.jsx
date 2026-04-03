import React from 'react'
import Head from './components/Header'
import { Add, Div, Mult, Sub } from './components/Calculator'

function App() {

  let x=10;
  let y=20;
  
  return (
    <div>
      <Head brand="Complete java classes" branch="karvenanagar"/>
      <Add x={x} y={y}/>
  
      <Sub/>
      <Mult/>
      <Div/>
    </div>
  )
}

export default App