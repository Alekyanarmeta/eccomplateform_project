import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import {useNavigate } from "react-router-dom";
export const logindetails=createContext()
function Login() {
  const [account, findAccount] = useState([]);
  const Email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    getaccount();
  },[]);
  async function getaccount() {
    try {
      const res = await axios.get("http://localhost:3000/accounts");
      findAccount(res.data);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  }

  function Authenticate() {
    
    let test=false;
    console.log(account)
    for(let a of account)
    {
        if(a.Email===Email.current.value & a.password===password.current.value)
        {
            test=true;
            break;
        }
    }
    console.log(test)
    Email.current.value="";
    password.current.value="";
    if (test){
        navigate("/home")
    }
    else{
        alert("login fail")
    }
  }

  return (
    <div className="page-center">
      <div className="text-bg-primary p-3 mx-auto d-block cls1">
        <h1>Login</h1>
        <div className="cls2">
          <label>Email:</label>
          <input type="text" ref={Email} />
        </div>
        <div className="cls2">
          <label>Password:</label>
          <input type="password" ref={password} />
        </div>
        <button className="btn btn-success mt-3" onClick={Authenticate}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
