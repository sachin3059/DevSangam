import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false); // Track search bar visibility

  return (
    <div className="navbar bg-base-300 px-4 sm:px-8 md:px-16 lg:px-20 py-2 shadow-md">
      {/* Logo Section */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case">devSangam</a>
      </div>

      {/* Right Section */}
      <div className={`flex items-center gap-4 ${showSearch ? "justify-end" : ""}`}>
        {/* Search Bar */}
        {showSearch ? (
          <div className="form-control flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full md:w-64"
              autoFocus
            />
          </div>
        ) : (
          <>
            {/* Search Icon for Small Screens */}
            <button
              className="btn btn-ghost btn-circle md:hidden"
              onClick={() => setShowSearch(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16.2 10.8a5.4 5.4 0 11-10.8 0 5.4 5.4 0 0110.8 0z"
                />
              </svg>
            </button>

            {/* Static Search Bar for Medium Screens and Larger */}
            <div className="hidden md:flex form-control">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-32 md:w-64"
              />
            </div>

            {/* User Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* Close Search Bar Button */}
        {showSearch && (
          <button
            className="btn btn-ghost btn-circle md:hidden"
            onClick={() => setShowSearch(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
