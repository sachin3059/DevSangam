import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get("http://localhost:3000/user/connections", { withCredentials: true });
            console.log(res?.data?.data);
            dispatch(addConnections(res?.data?.data));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) return;
    if (connections.length === 0) return <h1 className="text-center text-gray-600 text-lg">No connections found</h1>;

    return (
        <div className="flex flex-col items-center py-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Connections</h1>
            <div className="w-full max-w-2xl space-y-4">
                {connections.map((connection) => (
                    <div 
                        key={connection._id}
                        className="flex items-center bg-white shadow-md rounded-lg p-4 border border-gray-200"
                    > 
                        {/* Profile Image */}
                        <img 
                            className="w-16 h-16 rounded-full object-cover border border-gray-300"
                            src={connection.profilePicture} 
                            alt={`${connection.firstName} ${connection.lastName}`} 
                        />

                        {/* User Info */}
                        <div className="ml-4 flex-1">
                            <h2 className="text-lg font-medium text-gray-900">{connection.firstName} {connection.lastName}</h2>
                            <p className="text-sm text-gray-500">Professional Connection</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                            <button className="px-4 py-1 text-sm font-medium border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100">
                                <Link to={"/chat/" + connection._id}>Chat</Link>
                            </button>
                            <button className="px-4 py-1 text-sm font-medium border border-blue-500 text-blue-600 rounded-md hover:bg-blue-100">
                                Call
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Connections;
