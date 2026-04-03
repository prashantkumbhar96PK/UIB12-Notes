
import './App.css'

function App() {
  
let age=25;

let user={
  id:101,
  name:"akshay",
  mobno:12345
}

function display(x,y)
{
  console.log(x+y);
  
}

  return <div>
    <h1 id='a' className='headings' style={{color:'red',backgroundColor:'aqua'}}>This is first heading</h1>
   <h1>My age is {age}</h1>
   <hr />
  <h3>User id is {user.id}</h3> 
  <h3>User Name is {user.name}</h3>
  <h3>User Mobile No is {user.mobno}</h3>
  <button onClick={()=>display(2,7)}>click me</button>
  </div>
}

export default App
