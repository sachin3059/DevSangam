const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-base-300 text-base-content py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-20">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* About Section */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-bold mb-4">devSangam</h2>
              <p className="text-sm">
                devSangam is a platform for developers to connect, learn, and grow together.
                Join our community to explore endless opportunities in tech.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-center font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-center">
                <li>
                  <a href="/about" className="link link-hover">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="link link-hover">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/events" className="link link-hover">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/contact" className="link link-hover">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex-1 text-center md:text-center">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex  text-center md:justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  {/* Facebook Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88V15.21H7.896v-3.21h2.542V9.772c0-2.514 1.492-3.89 3.774-3.89 1.094 0 2.238.194 2.238.194v2.46h-1.26c-1.242 0-1.629.772-1.629 1.562v1.86h2.773l-.443 3.21h-2.33v6.67C18.344 21.127 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  {/* Twitter Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.581c.013.176.013.353.013.53 0 5.42-4.122 11.663-11.663 11.663-2.31 0-4.452-.672-6.257-1.828.324.038.648.05.973.05 1.922 0 3.69-.648 5.105-1.738a4.107 4.107 0 01-3.835-2.854c.256.038.512.063.78.063.374 0 .748-.05 1.097-.138a4.1 4.1 0 01-3.285-4.026v-.05c.547.304 1.172.487 1.835.512a4.093 4.093 0 01-1.828-3.413c0-.748.202-1.45.547-2.051a11.662 11.662 0 008.457 4.29c-.062-.304-.1-.61-.1-.914a4.098 4.098 0 014.098-4.098c1.18 0 2.247.487 2.996 1.27a8.206 8.206 0 002.606-.993 4.1 4.1 0 01-1.797 2.258 8.157 8.157 0 002.36-.636 8.816 8.816 0 01-2.067 2.145z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  {/* Instagram Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84 0 3.204-.012 3.584-.07 4.85-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.625 2.163 15.245 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.345-2.633 1.32-3.608C4.528 2.508 5.795 2.225 7.16 2.163 8.426 2.175 8.806 2.163 12 2.163zm0-2.163C8.709 0 8.328.013 7.052.07 5.77.126 4.653.425 3.635 1.443 2.617 2.462 2.318 3.58 2.262 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-8 text-sm">
            <p>&copy; 2025 devSangam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
