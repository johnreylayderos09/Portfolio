import { useEffect, useState } from 'react';

const sections = ['home', 'projects', 'skills', 'contact'];

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // adjust offset for header height

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
    handleScroll(); // Initial check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
        text-white shadow-md border-b border-gray-700
      `}
      style={{ fontFamily: 'Outfit, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
          My Portfolio
        </div>

        {/* Nav links with scrollspy */}
        <ul className="flex space-x-8 text-lg font-medium">
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
      </div>
    </nav>
  );
}

export default Header;
