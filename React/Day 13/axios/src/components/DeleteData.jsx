import axios from 'axios';
import React, { useState } from 'react'

function DeleteData() {
  let [searchId,setSearchid]=useState("");


  function deleteRecord(id)
  {
    axios.delete('http://localhost:5000/developers/'+id)
    .then(()=>console.log("Record deleted successfully...")
    )
    .catch(err=>console.log(err)
    )
  }


  return (
    <div>
      Enter ID to Delete Developer :
      <input type="text" name="searchId" id="searchId" value={searchId} onChange={e=>setSearchid(e.target.value)} />
      <button onClick={()=>deleteRecord(searchId)}>Delete Data</button>
      <h2>{searchId}</h2>
    </div>
  )
}

export default DeleteData