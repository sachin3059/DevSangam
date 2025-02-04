import { useNavigate } from "react-router-dom";

const Error = ({ message }) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg border border-gray-300">
                <h1 className="text-3xl font-semibold text-gray-800">Something Went Wrong</h1>
                <p className="text-gray-600 mt-3">{message || "We encountered an error while processing your request. Please try again later."}</p>
                <button 
                    onClick={() => navigate("/")} 
                    className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    Go Home Page
                </button>
            </div>
        </div>
    );
};

export default Error;