import { Link } from "react-router-dom";
import "./App.css";
import { useRef } from "react";
import axios from "axios";

function signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function addaccount() {
    axios.post("http://localhost:3000/accounts", {
      Email: emailRef.current.value,
      password: passwordRef.current.value,
    }).then(() => {
      alert("Account created!");
    }).catch((err) => {
      console.error(err);
      alert("Error creating account");
    });
    emailRef.current.value=""
    passwordRef.current.value=""
  }

  return (
    <div className="page-center">
      <div className="text-bg-primary p-3 mx-auto d-block cls1">
        <h1>SignUp</h1>

        <div className="cls2">
          <label>Email:</label>
          <input type="text" ref={emailRef} />
        </div>

        <div className="cls2">
          <label>Create Password</label>
          <input type="password" ref={passwordRef} />
        </div>

        <button className="btn btn-success mt-3" onClick={addaccount}>SignUp</button>
        <p className="mt-2">
          Already have an account? <Link to="/login" className="p1">Login here</Link>
        </p>
      </div>
    </div>
  );
}
export default signup;
