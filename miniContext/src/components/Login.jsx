import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";
//context where we send the data

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}  = useContext(UserContext);
  
  const handleSub = (e) =>{
    e.preventDefault();
    setUser({username, password})
  }

  return (
    <div>
      <h2>Guten Morgen</h2>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" /><br/>
      <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password"/><br/>
      <button onClick={handleSub}>Submit</button>
    </div>
  )
}

export default Login