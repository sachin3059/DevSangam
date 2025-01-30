import React from "react";
import { FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, profilePicture, skills, linkedIn, github } = user;

  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 w-full max-w-sm mx-auto hover:shadow-xl transition-shadow cursor-pointer">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <img
          src={profilePicture || "https://via.placeholder.com/80"}
          alt={`${firstName} ${lastName}`}
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />

        <div>
          <h2 className="text-xl font-bold text-gray-800">{firstName} {lastName}</h2>
          <p className="text-gray-500 text-sm">@{firstName.toLowerCase()}</p>
        </div>
      </div>

      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <div className="mt-4">
          <h3 className="text-gray-600 font-medium">Skills:</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Social Links */}
      <div className="mt-4 flex space-x-4">
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-700 text-2xl hover:text-gray-900 transition" />
          </a>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Send Request
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default UserCard;
