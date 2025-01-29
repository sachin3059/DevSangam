import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    skills: [],
    bio: "",
  });


  const skillsOptions = [
    "JavaScript",
    "React",
    "Node",
    "Machine Learning",
    "IoT",
    "Python",
    "C++",
    "Data Science",
    "Ruby",
    "Go",
    "CSS",
    "HTML",
    "Java",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "AWS",
    "GraphQL",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (skill) => {
    setFormData((prev) => {
      const updatedSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name and Last Name in one row */}
          <div className="flex space-x-6 mb-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          {/* Email and Password in one row */}
          <div className="flex space-x-6 mb-4">
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          {/* Skills Section with chips and search */}
          <div className="mb-4">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
              Skills
            </label>
            <div className="flex flex-wrap gap-3 mb-3">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  onClick={() => handleSkillChange(skill)}
                  className="cursor-pointer bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm border-2 border-gray-300 hover:border-gray-800"
                >
                  {skill} <span className="ml-1 text-xs">x</span>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsOptions.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() => handleSkillChange(skill)}
                  className={`${
                    formData.skills.includes(skill)
                      ? "bg-gray-300 border-2 border-gray-800"
                      : "bg-gray-200 border-2 border-gray-300"
                  } px-3 py-1 rounded-full text-sm hover:border-gray-800 focus:ring-2 focus:ring-gray-500 transition-all duration-200`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Select your skills by clicking.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Tell us about yourself"
              rows="2"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#login" className="text-gray-800 underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
