import { createContext, useEffect, useRef, useState } from "react";
import {useNavigate } from "react-router-dom";
export const logindetails=createContext()
function Login() {
  const Email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
 const Authenticate=()=> {
  if(Email.current.value===localStorage.getItem("email") && password.current.value===localStorage.getItem("password")){
    alert("login sucessfull")
    navigate("/home")
  }
  else{
    alert("password or email is incorrect")
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
