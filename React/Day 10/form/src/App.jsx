import { useForm } from "react-hook-form"
import './App.css';
import { NameValidation } from "./validations/Validations";
function App() {
  
  let {register,handleSubmit,reset,setValue,formState:{errors}}=useForm();

  function saveData(data)
  {
    console.log(data);
    
  }
  function clearData()
  {
    reset();
  }

  function updateData()
  {
    let person={
      'name':"akshay patil",
      'gender':"male",
      'username':"akshay@gmail.com",
      'password':'akshay123'
    }

    // setValue("name",person.name);
    for(let prop in person)
    {
      setValue(prop,person[prop]);
    }
  }
  return (
    <div>
      <form action="post" onSubmit={handleSubmit(saveData)}>
        <label htmlFor="name">Name</label>
        <input type="text"  id="name" {...register("name",NameValidation)} />
        <p>{errors.name && errors.name.message}</p>
        <br />
        <label htmlFor="gender">Gender</label>
        <input type="radio"  id="male" value="male" {...register("gender")}/>
        <label htmlFor="male">Male</label>
        <input type="radio"  id="female" value="female" {...register("gender")}/>
        <label htmlFor="female">Female</label>
        <br />
        <label htmlFor="uname">Username</label>
        <input type="text"  id="uname" {...register("username")}/>
        <br />
         <label htmlFor="pass">Password</label>
        <input type="text"  id="pass" {...register("password")}/>
        <br /> 
        <button>Submit</button>
        &nbsp;
        &nbsp;
        <button onClick={clearData}>Reset</button>
         &nbsp;
        &nbsp;
        <button onClick={updateData}>Set Default</button>

      </form>
    <h1></h1>
    </div>
  )
}

export default App