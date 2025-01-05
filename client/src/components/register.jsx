import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
    const handleLoginSuccess = (response) => {
        const token = response.credential;
        // Call your authentication API to validate and register the user
        authenticate(token)
          .then((user) => {
            // Handle success, navigate or store user info as required
            console.log("User logged in:", user);
            navigate("/dashboard"); // Example redirect after successful login
          })
          .catch((error) => {
            console.error("Error during authentication:", error);
          });
      };
    
      const handleLoginFailure = (error) => {
        console.error("Google Login Failed:", error);
      };
      
    return (
       <>
       <form className="form-container font-bold  px-96 content-center content-right border-4 relative max-w-fit min-w-fit ">
       <GoogleOAuthProvider clientId="313147226697-hi3adcln0roh30fce4f1g3mfgb9v09s8.apps.googleusercontent.com">
        <div className= "form-inner mt-3 bg-white p-10 space-y-2 space-x-10  items-center text-center border-4 border-l shadow-2xl rounded-lg max-w-fit min-w-fit">
        <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900 ">Register Here </h1>
        <div className=" space-y-2 space-x-9 text-teal-900"  >
            <label htmlFor="Firstname" className="text-3xl ">First Name</label>
            <input type="text" className="text-lg p-3 w-96  border-4" placeholder="First Name" required></input></div>
         <div className=" space-y-2 space-x-10 ">   
            <label htmlFor="Lastname " className="text-3xl ">Last Name</label>
            <input type="text" className="text-lg p-3 w-96  border-4" placeholder="Last Name" required></input>
            </div>
            <div className=" space-y-2 space-x-10 ">
            <label htmlFor="email" className="text-3xl">Email</label>
            <input type="email" className="text-lg p-3 w-96  border-4" placeholder="Email" required></input></div>
            <div className=" space-y-2 space-x-10 "><label htmlFor="password" className="text-3xl">Password</label>
            <input type="password"  className="p-3 w-96  border-4" placeholder="Password" required></input></div>
                <div className=" space-y-2 space-x-10  ">
                    <label htmlFor="password" className=" px-3 space-y-2 space-x-5 text-3xl">Re-password</label>
                    <input type="password" className="text-lg p-3 w-96 border-4" placeholder="Confirm Password" required></input>
                </div>
                <div className="text-center">
            <button type="submit" className="center px-20 bg-orange-500 p-2 mt-8 font-mono text-2xl text-white hover:bg-orange-700  rounded-lg">Register</button> 
            </div>
            
            <div className="relative flex justify-center">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          useOneTap
        />
      </div>
      <div>
      <Link to='/login' className="text-xl text-teal-900 space-y-5">Already have an account? click here</Link>
      </div>
      </div>
      </GoogleOAuthProvider>
       </form>

       </>
    ); 
};

export default Register;