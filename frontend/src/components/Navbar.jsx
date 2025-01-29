import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaSearch, FaInfoCircle, FaBlog } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // For mobile search bar toggle

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`,{},{ withCredentials: true});
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //console.log(user);

  return (
    <nav className="border-b border-gray-300 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 py-4 flex justify-between items-center">
        
        {/* Left Section (Brand + Search Bar for Logged-In Users) */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">
            <Link to="/"> DevSangam </Link>
          </div>

          {/* Search Bar (Visible on md+ Screens) */}
          {user && (
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-gray-400 outline-none w-60"
            />
          )}

          {/* Search Icon for Small Screens */}
          {user && (
            <button
              className="md:hidden p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              <FaSearch size={18} />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 items-center">
          <li>
            <Link to="/about" className="px-2 py-1 flex items-center">
              <FaInfoCircle className="block sm:hidden" size={18} /> 
              <span className="hidden sm:block">About Us</span> 
            </Link>
          </li>
          <li>
            <Link to="/blog" className="px-2 py-1 flex items-center">
              <FaBlog className="block sm:hidden" size={18} /> 
              <span className="hidden sm:block">Blog</span> 
            </Link>
          </li>

          {/* User Profile / Sign In Button */}
          {user ? (
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2">
                <img
                  src={user.data.profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border"
                />
                <span className="font-medium">{user.data.firstName}</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul className="py-2 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/profile/view"> Profile </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link to="/settings"> Settings </Link>
                    </li>
                    <li 
                      className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                    Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="px-4 py-1 border rounded-sm cursor-pointer">
              Sign In
            </button>
          )}
        </ul>
      </div>

      {/* Search Bar (Visible when toggled on small screens) */}
      {isSearchVisible && user && (
        <div className="md:hidden px-4 pb-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-gray-400 outline-none"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
