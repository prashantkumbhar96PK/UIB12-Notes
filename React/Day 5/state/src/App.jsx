import React, { useState } from 'react'

function App() {

      let [state,setState]=useState(0);
      let[name,setName]=useState("pratiksha");
        let [username,setUsername]=useState("");
      function increaseStateValue()
      {
        setState(state+1);
      }
      function decreaseStateValue()
      {
        setState(state-1)
      }

      function changeName()
      {
        let pname=prompt("Enter person name");
        setName(pname)
      }

     
  return (
    <div>
        <h1>Current State Value :{state}</h1>
        <button onClick={increaseStateValue}>State Value ++</button>
        <button onClick={decreaseStateValue}>State value --</button>
        <hr />
        <h1>Name is : {name}</h1>
        <button onClick={changeName}>Change Name</button>
        <hr />
        <h1>Username is : {username}</h1>
        <input type="text" placeholder='Enter User name' onChange={(e)=>setUsername(e.target.value)
        }/>

    </div>
  )
}

export default App