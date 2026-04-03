import React, { useContext } from 'react'
import { UserContext } from '../App'

function Profile() {
  let user=useContext(UserContext);
   
  return (
    <div>
      <h1>Profile</h1>
      <h2>User ID: {user.id}</h2>
      <h2>User Name: {user.name}</h2>
      <h2>User Gender:{user.gender}</h2>
     </div>
  )
}

export default Profile