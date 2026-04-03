import React, { createContext } from 'react'
import Header from './components/Header'


export let UserContext= createContext();

let user={
  id:101,
  name:"akshay",
  gender:"male"
}

function App() {

  return (
    <div>
      <h1>App</h1>
      <UserContext.Provider value={user}>
         <Header/>
      </UserContext.Provider>
     
    </div>
  )
}

export default App