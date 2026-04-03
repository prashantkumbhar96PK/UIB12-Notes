import axios from 'axios';
import React, { useState } from 'react'

function UpdateData() {
   let developer={
     name:"adarsh",
    salary:86000
   }
  let [searchId,setSearchId]=useState("");

  function updateRecord(id)
  {
      axios.put('http://localhost:5000/developers/'+id,developer)
      .then(()=>{console.log("Record is updated");
      })
      .catch(err=>console.log(err)
      )
  }
 
  return (
    <div>
      Enter ID for Upadate Developer : 
        <input type="text" id='searchId' name='searchId' value={searchId} onChange={e=>setSearchId(e.target.value)} />
        <button onClick={()=>updateRecord(searchId)}>Update data</button>
    
      <h2>{searchId}</h2>

    </div>
  )
}

export default UpdateData