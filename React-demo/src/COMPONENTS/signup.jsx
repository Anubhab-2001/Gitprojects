import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
// import "./App.css";

export const SignUp = () => {
  
  const [userName, setUserName] =useState("");
  const [userEmail, setUserEmail] =useState("");
  const [userNumber, setUserNumber] =useState("");
  const [userPassword, setUserPassword] =useState("");
  const navigate= useNavigate();

  localStorage.setItem("Email",JSON.stringify(userEmail));
  localStorage.setItem("Password",JSON.stringify(userPassword));
  const handleSignUp = () => {
    if(userEmail==="admin@gmail.com" && userPassword === "admin" && userName === "admin" && userNumber === "123456789"  ){
      navigate("/login");
  }
  else{
      alert("Invalid username and password");
  }
  }
  return (
    <div className=' d-flex justify-content-center Sign-page'>
            <div>
                <h3 className='text-center mt-3'>SIGNUP HERE</h3>
                <label for="formGroupExampleInput" class="form-label mt-2">Your Name</label>
                <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" class="form-control" placeholder="name" aria-label="First name"></input>
                <br />
                <label for="formGroupExampleInput" class="form-label">Your Email</label>
                <input onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} type="text" class="form-control" placeholder="Email" aria-label="First name"></input>
                <br />
                <label for="formGroupExampleInput" class="form-label">Mob No</label>
                <input onChange={(e)=>setUserNumber(e.target.value)} value={userNumber} type="text" class="form-control" placeholder="number" aria-label="First name"></input>
                <br />
                <label for="formGroupExampleInput" class="form-label">Password</label>
                <input onChange={(e)=>setUserPassword(e.target.value)} value={userPassword} type="text" class="form-control" placeholder="Password" aria-label="First name"></input>
                <div className='d-flex justify-content-center'>
                    <button onClick={handleSignUp} type="button" class="btn btn-primary mt-3 mb-3"><Link to="/login">Sign Up</Link> </button>
                </div>

            </div>


        </div>
  )
}
export default SignUp;