import { useState,useEffect } from "react";
import { addSkill,getSkills } from "../services/SkillService";

function Skills(){

  const [skillName,setSkillName] = useState("");
  const [description,setDescription] = useState("");
  const [level,setLevel] = useState("");
  const [userId,setUserId] = useState("");
  const [skills,setSkills] = useState([]);

  useEffect(()=>{
    loadSkills();
  },[]);

  const loadSkills = () => {
    getSkills().then(res=>setSkills(res.data));
  };

  const handleSubmit = (e)=>{

    e.preventDefault();

    const skill = {skillName,description,level,userId};

    addSkill(skill)
      .then(()=>{
        alert("Skill Added");
        loadSkills();
      })
      .catch(err=>console.log(err));

  };

  return(
    <div>

      <h2>Add Skill</h2>

      <form onSubmit={handleSubmit}>

        <input
        placeholder="Skill Name"
        onChange={(e)=>setSkillName(e.target.value)}
        />

        <br/>

        <input
        placeholder="Description"
        onChange={(e)=>setDescription(e.target.value)}
        />

        <br/>

        <input
        placeholder="Level"
        onChange={(e)=>setLevel(e.target.value)}
        />

        <br/>

        <input
        placeholder="User ID"
        onChange={(e)=>setUserId(e.target.value)}
        />

        <br/>

        <button type="submit">Add Skill</button>

      </form>

      <h2>Skills List</h2>

      <ul>
        {skills.map(skill=>(
          <li key={skill.id}>
            {skill.skillName} - {skill.level}
          </li>
        ))}
      </ul>

    </div>
  );

}

export default Skills;