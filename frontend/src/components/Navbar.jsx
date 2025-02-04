import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };


  const toggleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-between items-center px-6 md:px-24 py-4 bg-white shadow-md">
      {/* Left Section - Logo */}
      <h1 className="text-2xl font-semibold text-gray-800">
        <Link to="/"> <span className="text-blue-600 ">Dev</span>Sangam</Link>
      </h1>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-gray-800 text-2xl" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Right Section - Navigation */}
      <div
        className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:flex items-center space-x-6 p-6 lg:p-0`}
      >
        {user ? (
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-gray-800 font-medium">
              <li>
                <Link to="/feed">Feed</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <img
                className="w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 transform hover:scale-105"
                src={user.profilePicture}
                alt="User Profile"
                onClick={toggleDropDown}
              />
              {dropDown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
                  <ul className="space-y-2 py-2 text-gray-800 text-sm font-medium">
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <Link to="/profile/edit">Edit Profile</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <Link to="/connections">Connections</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <Link to="/requests">Connection Requests</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <Link to="/premium">Premium</Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li
                      className="hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-gray-800 font-medium">
            <li>
              <Link className="hover:text-gray-500 transition-colors" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors" to="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
