import React from 'react'
import { useState,useContext } from 'react'
import UserContext from "../context/UserContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

    const {user,loginUser,loggedinUser} = useContext(UserContext);
    console.log(user)
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');

    const handlerLogin = (e) => {
        
        console.warn("handle")
       console.log(password);
       const selectedUser = user.find(u => u.firstName === username && u.email === password);


        if(selectedUser)
        {
             alert("Congrats You logged in successfully")
             loginUser(username,password);
             navigate('/main');
            
        }else{
            alert("invalid Username or Password")
        }

    }


  return (
    

    <div>
        <h2>Login Page</h2>
        <label>UserName: 
        <input type='text' value={username} placeholder='UserName'
            onChange={(e)=> (setUsername(e.target.value))}
        />
        </label>
         <label> Password : <input type='password' value={password} placeholder='Password'
            onChange={(e)=>(setPassword(e.target.value))}
         /> </label>
         <button onClick={handlerLogin}>Submit</button>
    </div>
  )
}

export default Login