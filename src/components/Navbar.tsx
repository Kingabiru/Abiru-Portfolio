import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="bg-accent-light dark:bg-secondary-dark/80 backdrop-blur-sm fixed w-full z-10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-highlight-light dark:text-accent-dark">
            Abiru Samarasinghe
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white dark:text-white hover:text-highlight-light dark:hover:text-accent-dark transition-colors">Home</Link>
            <Link to="/about" className="text-white dark:text-white hover:text-highlight-light dark:hover:text-accent-dark transition-colors">About</Link>
            <Link to="/portfolio" className="text-white dark:text-white hover:text-highlight-light dark:hover:text-accent-dark transition-colors">Portfolio</Link>
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;