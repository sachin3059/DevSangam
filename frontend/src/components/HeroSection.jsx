import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeroSection = ({onHideHero}) => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
      onHideHero(); 
      navigate("/signup"); 
  };

  const handleLearnMore = () => {
      onHideHero(); 
      navigate("#about"); 
  };
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold sm:text-6xl md:text-7xl"
      >
        Welcome to <span className="text-blue-400">DevSangam</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        A hub for developers to collaborate, learn, and grow together. Join our community and start building the future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 flex space-x-4"
      >
        <Link
          to="/signup"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
          onClick={handleGetStarted}
        >
          Get Started
        </Link>
        <Link
          to="#learn-more"
          className="px-6 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all"
          onClick={handleLearnMore}
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;





