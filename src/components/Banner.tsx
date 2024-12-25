import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import heroImage from '../assets/hero.png';

function Banner() {
  const { theme } = useTheme();
  
  return (
    <div className="relative h-[60vh] overflow-hidden mt-20 sm:mt-15 rounded-lg">
      {/* Static background */}
      <div 
        className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-[linear-gradient(135deg,#ff0000_50%,#ffd700_50%)]'
            : 'bg-gradient-to-br from-purple-900 via-blue-900 to-black'
        }`}
      />

      {/* Stars overlay (only visible in dark mode) */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50 dark:opacity-30 hidden dark:block" />

      {/* Profile section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
            <img
              src={heroImage}
              alt="Profile"
              className="rounded-full object-cover w-full h-full border-4 border-accent-light dark:border-purple-500 shadow-lg"
            />
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Abiru Samarasinghe
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-black dark:text-purple-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Exploring the Universe Through Creativity
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;