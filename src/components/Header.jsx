import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// ✅ Define this at the top (or inside the component)
const sections = ['home', 'projects', 'skills', 'contact'];

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-20">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
          My Portfolio
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`relative group transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-indigo-400'
                    : 'text-white hover:text-indigo-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-400 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block ${
                    activeSection === section
                      ? 'text-indigo-400'
                      : 'text-white hover:text-indigo-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
