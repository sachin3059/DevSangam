const Navbar = () => {
  return (
    <nav className="border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 py-4 flex justify-between items-center">
     
        <div className="text-xl font-bold">DevSangam</div>

        <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 items-center">
          <li>
            <a href="#about" className="px-2 py-1">
              About Us
            </a>
          </li>
          <li>
            <a href="#blog" className="px-2 py-1">
              Blog
            </a>
          </li>
          <li>
            <button className="px-4 py-1 border rounded-sm cursor-pointer">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
