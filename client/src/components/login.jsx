import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import  CLIENT_ID from "../utils/baseUrl"; 
import { ClipLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    
    if (!email || !password || (!isLoginView && password !== confirmPassword)) {
      return toast.error("Please fill in all required fields correctly.");
    }

    try {
      let response;
      if (isLoginView) {
    
        response = await axios.post(`/api/auth/login`, { email, password });
      } else {
        
        response = await axios.post(`/api/auth/signup`, { email, password, name: email });
      }

      const { token, user } = response.data;

      if (response.status === 200) {
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast.success("Authentication successful"),2000;
        navigate("/dashboard");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
     
      toast.error(error?.response?.data?.message || "Authentication failed. Please try again.");
    }
  };

 
  const handleGoogleLoginSuccess = async (response) => {
    const credential = response?.credential;

    if (!credential) {
      console.error("Google login response is missing credential.");
      toast.error("Google login failed. Missing credential.");
      return;
    }

    try {
      
      const loginResponse = await axios.post(`/api/auth/google_auth`, {
        tokenId: credential, 
      });

      const { user, token } = loginResponse.data;
      toast.success("Google login success");

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google login:", error);
      // Display detailed error
      toast.error(error?.response?.data?.message || "Google login failed.");
    }
  };

 
  const handleGoogleLoginFailure = () => {
    console.error("Google login failed");
    toast.error("Google login failed.");
  };

  const handleCancel = () => {
    navigate("/"); 
  };

  return (
    <>
      {loading && <ClipLoader loading={loading} size={50} color={"#000"} />}
      <form
        className="form-container font-bold px-96 content-center content-right border-4 relative max-w-fit min-w-fit"
        onSubmit={handleSubmit}
      >
        <GoogleOAuthProvider clientId={CLIENT_ID || ""}>
          <div className="form-inner mt-3 bg-white p-10 space-y-2 space-x-10 items-center text-center border-4 border-l shadow-2xl rounded-lg max-w-fit min-w-fit">
            <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">
              {isLoginView ? "Login" : "Sign Up"} Here
            </h1>

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

            {!isLoginView && (
              <div className="space-y-2 space-x-10">
                <label htmlFor="confirmPassword" className="text-3xl">Confirm Password</label>
                <input
                  type="password"
                  className="p-3 w-96 border-4"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="center px-20 bg-orange-500 p-2 mt-8 font-mono text-2xl text-white hover:bg-orange-700 rounded-lg"
              >
                {isLoginView ? "Login" : "Sign Up"}
              </button>
            </div>

            {/* Google Login Button */}
            <div className="relative flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure} 
              />
            </div>

            <div>
              <Link to={isLoginView ? '/register' : '/login'} className="text-xl text-teal-900 space-y-5">
                {isLoginView ? "Don't have an account? Click here" : "Already have an account? Login here"}
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

export default Login;
