
import pic1 from '../../assets/images/pic1.JPG';
import pic2 from '../../assets/images/pic2.JPG';
import pic3 from '../../assets/images/pic3.JPG';
import { useState, useEffect } from "react";

const aboutMeText = `I am a fresh graduate in Computer Engineering with a strong analytical mindset and a passion for deriving data-driven insights. I thrive in collaborative environments where I can learn from colleagues and continuously expand my knowledge.

Guided by a positive outlook and driven by a deep curiosity for technology, I am eager to explore new tools, concepts, and innovations that will sharpen my skills. My goal is to contribute meaningful solutions and create outputs that not only demonstrate my growth but also add value to the team and organization I work with.`;

const roles = [
  "COMPUTER ENGINEER",
  "SOFTWARE ENGINEER",
  "DATA ANALYST"
];

// Replace these with your actual image paths
const images = [pic1, pic2, pic3];

// Typing effect with glitch animation
function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (index < aboutMeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + aboutMeText[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // Trigger glitch effect occasionally
      const glitchInterval = setInterval(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
      }, 5000);
      return () => clearInterval(glitchInterval);
    }
  }, [index]);

  return (
    <div className="relative">
      <p className={`text-xl font-mono text-gray-300 leading-relaxed ${glitch ? 'glitch' : ''}`}>
        {displayedText}
        {index < aboutMeText.length && (
          <span className="inline-block w-3 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
        )}
      </p>
      <style>{`
        .glitch {
          animation: glitch-anim 0.2s infinite;
        }
        
        @keyframes glitch-anim {
          0% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          16% {
            text-shadow: none;
          }
          100% {
            text-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}

// Animated role carousel
function RoleCarousel({ role }) {
  return (
    <div className="relative h-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer"></div>
      <h2 
        key={role}
        className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slideUp"
      >
        {role}
      </h2>
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}

// Image gallery with sick transitions
function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-spin-slow p-1">
        <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
      </div>
      
      {/* Main image container */}
      <div className="absolute inset-2 rounded-xl overflow-hidden">
        {/* Background blur effect */}
        <div 
          className="absolute inset-0 scale-110 blur-2xl opacity-50"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Main image */}
        <img
          src={images[currentImage]}
          alt="Portfolio"
          className={`relative w-full h-full object-cover transition-all duration-500 ${
            isTransitioning ? 'scale-110 rotate-3 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        
        {/* Overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentImage 
                  ? 'w-8 bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'w-2 bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%) translateX(50px);
            opacity: 0;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id='home' className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-black text-white animate-fadeInUp">
                  Hello, I'm a
                </h1>
                <RoleCarousel role={roles[roleIndex]} />
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}></div>
              
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <TypingText />
              </div>
            </div>

            {/* Right content - Image Gallery */}
            <div className="flex-1 flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <ImageGallery />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Home;