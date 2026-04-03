
import React from 'react'

function Students(props) {
  let {rollno,name,marks}=props;
  return (
    <div>
      <ol key={rollno}>
        <li>{rollno}</li>
        <li>{name}</li>
        <li>{marks}</li>
      </ol>


    </div>
  )
}

export default Students