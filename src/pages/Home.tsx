import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import PageTransition from '../components/PageTransition';

function Home() {
  return (
    <PageTransition>
      <Banner />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div className="space-y-8">
          <div className="bg-accent-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-highlight-light dark:border-purple-500/20">
            <p className="text-xl mb-8 text-white dark:text-purple-200">
              Hi, I'm Abiru Samarasinghe, a 12-year-old student at Ananda College, Colombo 10, Sri Lanka. 
              I have a deep passion for space, science, chess and creative exploration.
            </p>
          </div>
          
          <div className="bg-highlight-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-accent-light dark:border-purple-500/20">
            <p className="text-xl text-black dark:text-purple-200">
              Whether it's imagining life on distant moons or designing unique games and stories, 
              I strive to bring the wonders of the universe closer to everyone.
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-accent-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-highlight-light dark:border-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">Quick Links</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-white dark:text-purple-200">
                <span className="text-2xl mr-3">🚀</span> Check out my space-inspired projects
              </li>
              <li className="flex items-center text-white dark:text-purple-200">
                <span className="text-2xl mr-3">♟️</span> Explore my chess adventures
              </li>
              <li className="flex items-center text-white dark:text-purple-200">
                <span className="text-2xl mr-3">📝</span> Read my creative stories
              </li>
              <li className="flex items-center text-white dark:text-purple-200">
                <span className="text-2xl mr-3">🎮</span> Discover my game designs
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export default Home;