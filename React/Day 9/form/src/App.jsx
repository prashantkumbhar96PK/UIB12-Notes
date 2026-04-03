import { useForm } from "react-hook-form"


function App() {
  
  let {register,handleSubmit,reset}=useForm();

  function saveData(data)
  {
    console.log(data);
    
  }
  function clearData()
  {
    reset();
  }

  return (
    <div>
      <form action="post" onSubmit={handleSubmit(saveData)}>
        <label htmlFor="name">Name</label>
        <input type="text"  id="name" {...register("name")} />
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
      </form>
    <h1></h1>
    </div>
  )
}

export default App