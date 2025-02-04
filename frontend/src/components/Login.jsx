import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.post(
                "http://localhost:3000/login",
                { email, password },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data?.data));
            navigate("/feed");
        } catch (error) {
            setError(error?.response?.data?.message || "Login failed. Try again.");
        }
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center border border-gray-300 shadow-lg p-8 rounded-lg w-96 bg-white">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Welcome again!</h2>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex flex-col w-full mt-3">
                    <label className="mb-1 font-medium text-gray-600">Email</label>
                    <input
                        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full mt-3">
                    <label className="mb-1 font-medium text-gray-600">Password</label>
                    <input
                        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Forgot Password */}
                <div className="w-full text-right mt-2">
                    <Link to="#forgot-password" className="text-sm text-blue-500 hover:underline">
                        Forgot password?
                    </Link>
                </div>

                {/* Login Button */}
                <button
                    className={`mt-4 px-4 py-2 w-full rounded-md text-white ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    } transition-all`}
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Signing in..." : "Sign In"}
                </button>

                {/* Signup Redirect */}
                <div className="mt-4 text-sm">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/signup" className="font-semibold text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
