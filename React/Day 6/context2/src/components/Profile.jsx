import React, { useContext } from 'react'
import { UserContext } from '../App'

function Profile() {
let setUser=useContext(UserContext);
  let user={
  id:101,
  name:"akshay",
  gender:"male"
}


function passData()
{
  setUser(user)
}

   
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={passData}>PassData</button>

    
     </div>
  )
}

export default Profile