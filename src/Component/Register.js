import React from "react";
import "./Register.css";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const setvalue = () => {
  
    const useranme = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
    const confirmpassword = document.getElementById("psw-repeat").value;
    // alert(confirmpassword)

    localStorage.setItem("username", useranme);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassword);

    // localStorage.setItem('username' , 'abcb');
    if (password !== confirmpassword) {
      alert("Password should be match... ");
      navigate('/Register')
    }
    else{
      alert('Successfully Registered  ')
      navigate("/Login");
    }
    // alert('Register successfully ....')
    if (useranme == true) {
      navigate("/Login");
      // alert('asss...')
      console.log(useranme == true);
    }
    // navigate("/Login");

    //  console.log( localStorage.setItem('email',email) == true);
    // navigate('/Login')
  };
  return (
    <>
      <form>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
            required
          ></input>

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

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit" className="registerbtn" onClick={setvalue}>
            Register
          </button>
        </div>
        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
