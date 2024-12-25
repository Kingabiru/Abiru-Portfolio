import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

function About() {
  return (
    <PageTransition>
      <div className="pt-20 px-4 sm:px-6 max-w-4xl mx-auto relative mb-12">
        {/* Double border for light mode */}
        <div className="absolute inset-0 border-4 border-accent-light dark:border-transparent m-4 hidden dark:hidden" />
        <div className="absolute inset-0 border-4 border-highlight-light dark:border-transparent m-8 hidden dark:hidden" />
        
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-accent-light dark:text-accent-dark">About Me</h1>
          
          <section className="mb-8">
            <div className="bg-accent-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-highlight-light dark:border-purple-500/20">
              <p className="text-lg sm:text-xl text-white dark:text-purple-200">
                Hi, I'm Abiru Samarasinghe, a 12-year-old student at Ananda College, Colombo 10, Sri Lanka. 
                I have a deep passion for space, science, and creative exploration.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Interests</h2>
            <div className="space-y-4">
              <div className="bg-highlight-light/90 dark:bg-secondary-dark/30 p-4 rounded-lg border-2 border-accent-light dark:border-purple-500/20">
                <h3 className="font-semibold mb-2 text-black dark:text-white">Space Exploration</h3>
                <p className="text-black dark:text-purple-200">Fascinated by Titan, Neptune, and the beauty of Saturn's rings.</p>
              </div>
              <div className="bg-accent-light/90 dark:bg-secondary-dark/30 p-4 rounded-lg border-2 border-highlight-light dark:border-purple-500/20">
                <h3 className="font-semibold mb-2 text-white dark:text-white">Game Design</h3>
                <p className="text-white dark:text-purple-200">I design games that blend strategy and imagination, including card games inspired by celestial objects.</p>
              </div>
              <div className="bg-highlight-light/90 dark:bg-secondary-dark/30 p-4 rounded-lg border-2 border-accent-light dark:border-purple-500/20">
                <h3 className="font-semibold mb-2 text-black dark:text-white">Writing and Storytelling</h3>
                <p className="text-black dark:text-purple-200">I craft stories about adventures on alien planets and exploring uncharted territories.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Skills</h2>
            <div className="bg-accent-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-highlight-light dark:border-purple-500/20">
              <ul className="list-disc list-inside space-y-2 text-white dark:text-purple-200">
                <li>Creative Writing: Experienced in writing engaging stories and world-building</li>
                <li>Game Mechanics Design: Skilled in creating unique gameplay systems</li>
                <li>Strategic Thinking: Excelling in games that require planning</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-accent-light dark:text-accent-dark">Fun Facts About Me</h2>
            <div className="bg-highlight-light/90 dark:bg-secondary-dark/30 p-6 rounded-xl border-2 border-accent-light dark:border-purple-500/20">
              <ul className="list-disc list-inside space-y-2 text-black dark:text-purple-200">
                <li>My birthday is on December 26, the day after Christmas</li>
                <li>My favorite moon is Titan</li>
                <li>I prefer Venus as a livable planet</li>
                <li>I love the cartoon SolarBalls</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;