import { useState } from "react";
import { addUser } from "../services/UserService";

function AddUser() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {name,email,password};

    addUser(user)
      .then(()=>alert("User Added"))
      .catch(err=>console.log(err));
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Add</button>
      </form>

    </div>
  );
}

export default AddUser;