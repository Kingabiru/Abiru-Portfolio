import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-secondary/95 backdrop-blur-sm p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="hover:text-accent transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-accent transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="hover:text-accent transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;