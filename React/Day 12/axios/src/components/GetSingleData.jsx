import axios from 'axios';
import React from 'react'
import { useState } from 'react'


function GetSingleData() {
let [searchId,setSearchId]=useState("");
let [singleDeveloper,setSingleDeveloper]=useState(null);

function getSingleData(id)
{
  axios.get('http://localhost:5000/developers/'+id)
  .then((res)=>setSingleDeveloper(res.data))
  .catch(err=> console.log(err)
  )
}

  return (
    <div>
      Enter SearchID: 
    <input type="text" name='searchId' id='searchId' value={searchId} onChange={e=>setSearchId(e.target.value)}/>
    <button onClick={()=>getSingleData(searchId)}>Get Single Data</button>
    <h2>{searchId}</h2>
    <br />
    {
      singleDeveloper && 
      <table border={2} width="50%">
         <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>SALARY</th>
    </tr>

  </thead>
  <tbody>
    <tr key={singleDeveloper.id}>
      <td>{singleDeveloper.id}</td>
      <td>{singleDeveloper.name}</td>
      <td>{singleDeveloper.salary}</td>
    </tr>
  </tbody>
      </table>
    }

    </div>
  )
}

export default GetSingleData