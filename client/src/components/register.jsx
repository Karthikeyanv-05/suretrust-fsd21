import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { baseUrl, CLIENT_ID } from "../utils/baseUrl";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  
  const handleGoogleLoginSuccess = async (response) => {
    const credential = response.credential;

    if (!credential) {
      console.error("Google login response is missing credential.");
      toast.error("Google login failed. Missing credential.");
      return;
    }

    try {
      
      const loginResponse = await axios.post(`${baseUrl}/api/auth/google_auth`, {
        tokenId: credential, 
      });

      const { user, token } = loginResponse.data;
      toast.success("Google login success");

      
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error("Google login failed.");
    }
  };

  
  const handleGoogleLoginFailure = () => {
    console.error("Google login failed");
    toast.error("Google login failed.");
  };

  // Handle form submission for registration
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    if (!email || !password || !confirmPassword || password !== confirmPassword) {
      return toast.error("Please fill in all required fields correctly.");
    }
  
    try {
    
      const payload = {
        email,
        password,
        name: email.split('@')[0],  
      };
  
      const response = await axios.post(`${baseUrl}/api/auth/signup`, payload);
  
      const { token, user } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
  
      toast.success("Registration successful");
      navigate("/dashboard");  
    } catch (error) {
      console.error("Error during registration:", error.response ? error.response.data : error.message);
      toast.error(error.response?.data?.error || "Registration failed. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <form
        className="form-container font-bold px-96 content-center content-right border-4 relative max-w-fit min-w-fit"
        onSubmit={handleSubmit}
      >
        <GoogleOAuthProvider clientId={CLIENT_ID || ""}>
          <div className="form-inner mt-3 bg-white p-10 space-y-2 space-x-10 items-center text-center border-4 border-l shadow-2xl rounded-lg max-w-fit min-w-fit">
            <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">
              Register Here
            </h1>

            <div className="space-y-2 space-x-9 text-teal-900">
              <label htmlFor="Firstname" className="text-3xl">First Name</label>
              <input
                type="text"
                className="text-lg p-3 w-96 border-4"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 space-x-10">
              <label htmlFor="Lastname" className="text-3xl">Last Name</label>
              <input
                type="text"
                className="text-lg p-3 w-96 border-4"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 space-x-10">
              <label htmlFor="email" className="text-3xl">Email</label>
              <input
                type="email"
                className="text-lg p-3 w-96 border-4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 space-x-10">
              <label htmlFor="password" className="text-3xl">Password</label>
              <input
                type="password"
                className="p-3 w-96 border-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 space-x-10">
              <label htmlFor="confirmPassword" className="px-3 space-y-2 space-x-5 text-3xl">Re-password</label>
              <input
                type="password"
                className="text-lg p-3 w-96 border-4"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="center px-20 bg-orange-500 p-2 mt-8 font-mono text-2xl text-white hover:bg-orange-700 rounded-lg"
              >
                Register
              </button>
            </div>

            {/* Google Login Button */}
            <div className="relative flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
               // useOneTap
              />
            </div>

            <div>
              <Link to="/login" className="text-xl text-teal-900 space-y-5">
                Already have an account? Click here
              </Link>
            </div>

            {/* Cancel Button */}
            <div className="text-center mt-4">
              <button
                type="button"
                className="px-20 bg-gray-500 p-2 font-mono text-2xl text-white hover:bg-gray-700 rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </GoogleOAuthProvider>
      </form>

      <ToastContainer />
    </>
  );
};

export default Register;
