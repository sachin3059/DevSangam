import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-6">
        {/* Cover Photo */}
        <div className="relative">
          <img
            src="https://www.shutterstock.com/image-photo/web-development-concept-person-using-260nw-1890313726.jpg"
            alt="Cover"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          {/* Profile Photo */}
          <div className="absolute left-6 top-36">
            <img
              src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-500 mt-2">Web Developer | Tech Enthusiast</p>

          {/* Bio */}
          <div className="mt-6">
            <p className="text-gray-600 text-lg">
              A passionate developer with experience in creating web applications. Loves coding and exploring new technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <div className="flex flex-wrap justify-center mt-3 gap-3">
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">JavaScript</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">React</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">Node.js</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">HTML</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">CSS</span>
            </div>
          </div>

          {/* Followers, Following & Download Resume */}
          <div className="mt-6 flex justify-center gap-8 items-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">150</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800">75</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
            {/* Download Resume Button */}
            <div className="text-center">
              <a
                href="https://example.com/resume.pdf"  // Replace with actual resume link
                download="JohnDoe_Resume"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <FaDownload size={20} className="mr-2" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Achievements</h3>
            <ul className="list-disc pl-5 mt-3 text-gray-600">
              <li>Winner of XYZ Coding Challenge 2023</li>
              <li>Contributor to Open Source Projects</li>
              <li>Speaker at ABC Tech Conference</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Projects</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Project One</h4>
                  <p className="text-sm text-gray-600">A full-stack web app for e-commerce.</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Project Two</h4>
                  <p className="text-sm text-gray-600">A mobile app for task management.</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Project Three</h4>
                  <p className="text-sm text-gray-600">A social networking platform.</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Project Four</h4>
                  <p className="text-sm text-gray-600">An AI-based recommendation system.</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
