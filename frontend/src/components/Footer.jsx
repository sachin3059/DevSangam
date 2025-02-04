import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-12 px-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        
        {/* DevSangam Info */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold text-black flex items-center justify-center lg:justify-start space-x-2">
            <span>DevSangam</span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-sm">
            DevSangam is a platform where developers can connect, learn, and grow together.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center mb-6 lg:mb-0">
          <ul className="text-gray-800 space-y-3">
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="hover:text-blue-500 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className="hover:text-blue-500 transition duration-300"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6 text-2xl">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Made with Love in India Section */}
      <div className="flex justify-center items-center space-x-2 mt-8 text-gray-700 text-sm">
        <FaHeart className="text-red-500" />
        <span>Made with Love in India</span>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4 text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} DevSangam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
