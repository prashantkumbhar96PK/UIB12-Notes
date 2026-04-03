import React, { createContext, useState } from 'react'
import Header from './components/Header'


export let UserContext=createContext();



function App() {
let {user,setUser}=useState({});

  return (
    <div>
      <h1>App</h1>

     

      <h2>User ID :{user.id}</h2>
      <h2>User Name: {user.name}</h2>
      <h2>User Gender:{user.gender}</h2>

       <UserContext.Provider value={setUser}>
         <Header/>
      </UserContext.Provider>
     
    </div>
  )
}

export default App