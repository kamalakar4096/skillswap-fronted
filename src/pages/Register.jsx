import { useState } from "react";
import { addUser } from "../services/UserService";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {name,email,password};

    addUser(user)
      .then(()=>alert("User Registered"))
      .catch(err=>console.log(err));

  };

  return(
    <div>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
        />

        <br/>

        <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <br/>

        <input
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <br/>

        <button type="submit">Register</button>

      </form>

    </div>
  );

}

export default Register;