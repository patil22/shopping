import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const checkvalue = () => {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById('psw').value ;
    const confirmpassword = document.getElementById('psw-repeat').value ;
    if(password!=confirmpassword){
      alert('Password should be  matched ... ')
    }

    const localStorage_email = localStorage.getItem("email");
    const localStorage_password = localStorage.getItem('password');
    const localStorage_confirmpassword = localStorage.getItem('confirmpassword');

    // const localStorage_confirmpassword = localStorage.getItem('confirmpassword');
    if (email === localStorage_email && password ===localStorage_password && confirmpassword ===localStorage_confirmpassword  ) {
       alert("Login Success ...");
      navigate('/Product')

    } else {
      alert("Please Enter Proper details ..  ");
    } 
  };

  //Runs only on the first render

  return (
    <>
      <div>Login</div>
      {/* <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />

        <button type="submit" onClick={checkvalue}>Submit</button>
      </form> */}

      <form>
        <div className="container">
       <h1>Login </h1>
             {/* <p>Please fill in this form to create an account.</p>
          <hr /> */}

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          ></input>

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />

          {/* <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p> */}

          <button type="submit" className="registerbtn" onClick={checkvalue}>
            Login
          </button>
        </div>

        {/* <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div> */}


      </form>
    </>
  );
};

export default Login;
