import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("abhi@gmail.com");
  const [password, setPassword] = useState("Abhi123@#");
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {withCredentials: true}
      );
      //console.log(res.data); 
      dispatch(addUser(res.data));
    } catch (error) {
      console.error("Caught error: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>

        {/* Use onSubmit here to handle form submission */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-right mt-2">
              <a href="#forgot-password" className="text-sm text-gray-800 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="button" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="#signup" className="text-gray-800 underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
