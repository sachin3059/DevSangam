import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { motion } from "framer-motion";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/signup`,
        { firstName, lastName, email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile/edit");
    } catch (error) {
      console.error(error?.response?.data?.message);
      alert(error?.response?.data?.message);
    }
  };

  const checkPasswordStrength = (pwd) => {
    setPassword(pwd);
    if (pwd.length < 6) setPasswordStrength("Weak ❌");
    else if (pwd.match(/[A-Z]/) && pwd.match(/[0-9]/) && pwd.match(/[\W]/))
      setPasswordStrength("Strong ✅");
    else setPasswordStrength("Moderate ⚠️");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white shadow-xl rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Create an Account</h2>
        <p className="text-gray-500 text-center text-sm mb-4">Join us today and start your journey!</p>

        <div className="space-y-4">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-gray-600 text-sm">First Name</label>
            <input
              className="w-full px-3 py-2 border rounded-sm focus:ring focus:ring-blue-300 outline-none"
              type="text"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-gray-600 text-sm">Last Name</label>
            <input
              className="w-full px-3 py-2 border rounded-sm focus:ring focus:ring-blue-300 outline-none"
              type="text"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-sm focus:ring focus:ring-blue-300 outline-none"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              className="w-full px-3 py-2 border rounded-sm focus:ring focus:ring-blue-300 outline-none"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => checkPasswordStrength(e.target.value)}
            />
            <p className={`text-sm mt-1 ${passwordStrength === "Strong ✅" ? "text-green-600" : "text-red-600"}`}>
              {passwordStrength}
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 transition-all"
            onClick={handleSignUp}
          >
            Sign Up
          </motion.button>

          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
