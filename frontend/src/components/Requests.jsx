import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);

    

    const fetchRequest = async () => {
        try {
            const res = await axios.get("http://localhost:3000/user/request/received", {withCredentials: true});
            console.log(res?.data?.data);
            dispatch(addRequest(res?.data?.data));
        } catch (error) {
            console.error(error);
        }
    }

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(
                `http://localhost:3000/request/review/${status}/${_id}`,
                {},
                {withCredentials: true}
            );
            console.log(res);
            dispatch(removeRequest(_id));  
        } catch (error) {
            console.error(error);
        }
    }


    useEffect( () => {
        fetchRequest();
    }, []);

    if (!requests) return <div>No REQUEST</div>;
    if (requests.length === 0) return <h1 className="text-center text-gray-600 text-lg">No requests found</h1>;

    return (
        <div className="flex flex-col items-center py-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Connections Requests</h1>
            <div className="w-full max-w-2xl space-y-4">
                {requests.map((request) => (
                    <div 
                        key={request._id}
                        className="flex items-center bg-white shadow-md rounded-lg p-4 border border-gray-200"
                    > 
                        {/* Profile Image */}
                        <img 
                            className="w-16 h-16 rounded-full object-cover border border-gray-300"
                            src={request.fromUserId.profilePicture} 
                            alt={`${request.fromUserId.firstName} ${request.lastName}`} 
                        />

                        {/* User Info */}
                        <div className="ml-4 flex-1">
                            <h2 className="text-lg font-medium text-gray-900">{request.fromUserId.firstName} {request.fromUserId.lastName}</h2>
                            <p className="text-sm text-gray-500">Professional Request</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                            <button className="px-4 py-1 text-sm font-medium border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100"
                            onClick={() => reviewRequest("accepted", request._id)}
                            >
                                Accept Request
                            </button>
                            <button className="px-4 py-1 text-sm font-medium border border-red-500 text-red-600 rounded-md hover:bg-blue-100"
                            onClick={() => reviewRequest("rejected", request._id)}
                            >
                                Reject Request
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Requests