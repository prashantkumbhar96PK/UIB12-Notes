import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function ViewAllData() {
   let [developers,setDevelopers]=useState([]);

  function getData()
  {
    axios.get('http://localhost:5000/developers').then((res)=>{
        setDevelopers(res.data)
    }).catch(err=>console.log(err)
    )
  }

  return (
    <div>

<button onClick={getData}>View All Data</button>
<br /><br />
<h1>Developers Information</h1>
<table border={2} width="50%">
  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>SALARY</th>
    </tr>

  </thead>
  <tbody>
    {
      developers.map(dev=>
        <tr key={dev.id}>
          <td>{dev.id}</td>
          <td>{dev.name}</td>
          <td>{dev.salary}</td>
        </tr>
      )
    }

  </tbody>
</table>


    </div>
  )
}

export default ViewAllData