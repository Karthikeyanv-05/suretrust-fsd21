import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setUser, clearUser } from "../redux/userSlice"; // Import actions
import { baseUrl ,CLIENT_ID } from "../utils/baseUrl"; // Your base URL
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true); // Default is login view
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for email and password fields
    if (!email || !password || (!isLoginView && password !== confirmPassword)) {
      return toast.error("Please fill in all required fields correctly.");
    }
    

    try {
      let response;
      if (isLoginView) {
        // Login logic
        response = await axios.post(`${baseUrl}/api/auth/login`, {
          email,
          password,
        });
      } else {
        // Sign-up logic
        response = await axios.post(`${baseUrl}/api/auth/signup`, {
          email,
          password,
          name: email,
        });
      }

      // Handle response and store token
      const token = response.data.token;
      localStorage.setItem("token", token);
      toast.success("Login/Signup success");
      dispatch(setUser(response.data.user)); // Assuming response contains user data
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("An error occurred during authentication.");
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const { credential, clientId } = credentialResponse;

    try {
      const response = await axios.post(`${baseUrl}/api/auth/google_auth`, {
        credential,
        client_id: clientId,
      });

      const { user, token } = response.data;
      toast.success("Login success");

      // Store user information and JWT token
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      // Dispatch user data to Redux store
      dispatch(setUser(user));
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(clearUser());
  };

  return (
    <>
      <form
        className="form-container font-bold px-96 content-center content-right border-4 relative max-w-fit min-w-fit"
        onSubmit={handleSubmit}
      >
        <GoogleOAuthProvider clientId='process.env.CLIENT_ID'> {/* Replace with actual Google client ID */}
          <div className="form-inner mt-3 bg-white p-10 space-y-2 space-x-10 items-center text-center border-4 border-l shadow-2xl rounded-lg max-w-fit min-w-fit">
            <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">
              Login Here
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

            <div className="relative flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                useOneTap
              />
            </div>

            <div>
              <Link to={isLoginView ? '/register' : '/login'} className="text-xl text-teal-900 space-y-5">
                {isLoginView ? "Don't have an account? Click here" : "Already have an account? Login here"}
              </Link>
            </div>
          </div>
        </GoogleOAuthProvider>
      </form>

      <ToastContainer />
    </>
  );
};

export default Login;
