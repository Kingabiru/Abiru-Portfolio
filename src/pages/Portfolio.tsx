import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import VideoPlayer from '../components/VideoPlayer';
import PageTransition from '../components/PageTransition';

function Portfolio() {
  const projects = [
    {
      title: "Cosmic Dungeons: Moons and Dwarf Planets",
      description: "A fantasy-adventure game featuring characters like Titanis and Luna, combining space exploration with mythical elements.",
      category: "Game Design"
    },
    {
      title: "The Treasures of the Sun",
      description: "An exciting adventure in Cosmic Dungeons, where a team of explorers and heroes uncover secrets of the solar system.",
      category: "Creative Writing"
    },
    {
      title: "Solar System Booklet",
      description: "A detailed guide to the planets, moons, and origins of the Solar System, written in a flowing, unified style.",
      category: "Educational"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20 px-4 sm:px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Portfolio</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-purple-200">Featured Video</h2>
            <div className="bg-accent-light/90 dark:bg-secondary-dark/30 p-4 rounded-xl border-2 border-highlight-light dark:border-purple-500/20">
              <VideoPlayer 
                videoUrl="https://www.youtube.com/watch?v=SO4eoWfH5zQ"
                title="Space Exploration Journey"
                description="A glimpse into my creative process and space-inspired projects."
              />
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-purple-200">Current Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <div key={index} className={`bg-${index % 2 === 0 ? 'accent' : 'highlight'}-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-${index % 2 === 0 ? 'highlight' : 'accent'}-light dark:border-purple-500/20`}>
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-black/10 dark:bg-purple-500/20 text-black dark:text-purple-200 mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-black dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-purple-200">Vision</h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-highlight-light dark:border-purple-500/20"
            >
              <p className="text-white dark:text-purple-200">
                To inspire others with the wonders of space and to create stories, games, and experiences 
                that bring the universe closer to everyone.
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default Portfolio;