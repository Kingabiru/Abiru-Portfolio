import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-black dark:text-white transition-colors">
          <Navbar />
          <AnimatePresence mode="wait">
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </main>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;