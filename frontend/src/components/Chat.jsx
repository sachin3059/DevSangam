import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchChat = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/chat/${targetUserId}`, { withCredentials: true });
      setMessages(res?.data?.messages || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChat();
  }, [targetUserId]);

  useEffect(() => {
    if (!userId || !targetUserId) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((prevMessages) => [...prevMessages, { firstName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return; // Prevent sending empty messages
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  if (!user) return <div> <h1>Loading...</h1> </div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg h-[80vh] flex flex-col border border-gray-300 shadow-md bg-white rounded-lg">
        <div className="p-4 text-lg font-semibold bg-blue-500 text-white rounded-t-lg sticky top-0">
          Chat with {targetUserId}
        </div>

        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message?.firstName === user.firstName ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-white ${
                  message?.firstName === user.firstName ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <p className="font-semibold">{message?.firstName}</p>
                <p>{message?.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 flex items-center border-t border-gray-300 bg-white rounded-b-lg">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <button
            onClick={sendMessage}
            className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
