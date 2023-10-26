import React, { Fragment, useState } from "react";
import Register from "./Register";

const Login = ({}) => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const checkUsername = async (e) => {
    try {
        const response = await fetch(`http://localhost:5000/register`);
        const jsonData = await response.json();

        // Find the user with matching username and password
        const user = jsonData.find(user => user.username === username && user.password === password);

        if (user) {
            console.log("User found:", user);
            window.location = "/employeePortal";
        } else {
            console.log("User not found");
            return "incorrect credentials"
        }
    } catch (err) {
        console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="text-center">
        <h1>Login</h1>
      <small className="m-1">Username: </small>
      <br />
      <input
        type="text"
        className="ms-1 mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <small className="m-1">Password: </small>
      <br />
      <input
        type="password"
        className="ms-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button 
        type="button" 
        className="btn btn-primary text-center m-2" 
        onClick={checkUsername}>
          Sign In
      </button>
      </div>
      
      
      <Register />
    </Fragment>
  ) 
}

export default Login;


