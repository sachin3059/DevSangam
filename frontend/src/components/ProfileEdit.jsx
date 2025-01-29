import React, { useState } from 'react';
import { FaSave, FaUpload, FaEdit } from 'react-icons/fa';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    bio: 'A passionate web developer and tech enthusiast.',
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    gender: 'Male',
    profilePicture: 'https://via.placeholder.com/150',
    coverPicture: 'https://via.placeholder.com/1200x400',
    projects: [
      { title: 'Project One', link: 'https://example.com' },
      { title: 'Project Two', link: 'https://example.com' },
    ],
    achievements: ['Winner of XYZ Coding Challenge', 'Speaker at ABC Tech Conference'],
    resume: 'https://example.com/resume.pdf',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: URL.createObjectURL(files[0]),
    }));
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    setProfile((prevState) => ({
      ...prevState,
      skills: value.split(',').map((skill) => skill.trim()),
    }));
  };

  const handleSave = () => {
    // In real application, here you'd send the updated profile data to the server
    alert('Profile saved successfully!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-6">
        {/* Cover Photo */}
        <div className="relative mb-6">
          <img
            src={profile.coverPicture}
            alt="Cover"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <label className="absolute right-4 top-4 text-white cursor-pointer">
            <FaUpload size={20} />
            <input
              type="file"
              name="coverPicture"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Profile Photo */}
        <div className="relative mb-6">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <label className="absolute right-4 bottom-4 text-white cursor-pointer">
            <FaUpload size={20} />
            <input
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Editable Fields */}
        <div className="mt-4 space-y-6">
          {/* First Name */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email (Non-Editable) */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              readOnly
              className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-200"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="skills">Skills (comma separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={profile.skills.join(', ')}
              onChange={handleSkillsChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Achievements */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="achievements">Achievements</label>
            <textarea
              id="achievements"
              name="achievements"
              value={profile.achievements.join(', ')}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Projects */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="projects">Projects (comma separated)</label>
            <input
              type="text"
              id="projects"
              name="projects"
              value={profile.projects.map((project) => project.title).join(', ')}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Resume */}
          <div>
            <label className="text-sm text-gray-600" htmlFor="resume">Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Save Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleSave}
              className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              <FaSave size={18} className="mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
