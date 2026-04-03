import React from 'react'
import Students from './components/Students'

function App() {

  let fruits=["apple","banana","cherry","mango","orange"]

  let students=[
    {
      rollno:1,
      name:"akshay",
      marks:75
    },
     {
      rollno:2,
      name:"amit",
      marks:85
    },
     {
      rollno:3,
      name:"pratik",
      marks:76
    }
  ]

  return (
    <div>
      <div>
         <ol>
       {
        fruits.map((fruit,i)=> <li key={i}> {fruit}  </li>)
       }
      </ol>
      </div>

      <hr />
      <div>
            
      <table border={2}>
        <thead>
          <tr>
          <th>RollNo</th>
          <th>Name</th>
          <th>Marks</th>
          </tr>
        

        </thead>
        <tbody>
          {
            students.map((stu,i)=> <tr key={i}>
              <td>{stu.rollno}</td>
              <td>{stu.name}</td>
              <td>{stu.marks}</td>
            </tr>)
          }

        </tbody>
      </table>
      </div>
      <div>
       {
        students.map((stu,i)=>
          <Students key={i} rollno={stu.rollno} name={stu.name} marks={stu.marks}/>
        )
       }
      </div>


    </div>
  )
}

export default App