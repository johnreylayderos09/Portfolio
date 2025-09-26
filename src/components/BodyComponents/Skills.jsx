import { 
  FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, FaDatabase, 
  FaLinux, FaWindows, FaTools, FaBrain, FaLightbulb, FaGithub, FaCodeBranch
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiCplusplus, SiMongodb, SiVite 
} from 'react-icons/si';

function Skills() {
  // Tech stack with icons and labels
  const skills = [
    { icon: <FaReact className="text-cyan-400" />, label: "React.js" },
    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS" },
    { icon: <FaJava className="text-red-600" />, label: "Java" },
    { icon: <FaPython className="text-yellow-400" />, label: "Python" },
    { icon: <SiCplusplus className="text-blue-500" />, label: "C++" },
    // Combined SQL and Databases & APIs
    { icon: <FaDatabase className="text-indigo-400" />, label: "Databases & APIs (SQL)" },
    { icon: <SiMongodb className="text-green-500" />, label: "NoSQL (MongoDB)" },
    { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
    { icon: <SiVite className="text-pink-400" />, label: "Vite" },
    { icon: <FaBrain className="text-purple-400" />, label: "Prompt Engineering" },
    { icon: <FaLinux className="text-gray-400" />, label: "Linux OS" },
    { icon: <FaWindows className="text-blue-500" />, label: "Windows OS" },
    { icon: <FaTools className="text-yellow-500" />, label: "Hardware Troubleshooting" },
    { icon: <FaLightbulb className="text-purple-400" />, label: "Problem Solving" },
    { icon: <FaTools className="text-yellow-400" />, label: "Embedded Systems & Circuitry" },
    // New skills added here
    { icon: <FaGithub className="text-gray-300" />, label: "GitHub" },
    { icon: <FaCodeBranch className="text-green-400" />, label: "Version Control" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 flex justify-center relative overflow-hidden bg-gray-900"
    >
      {/* Background gradient and blur circles for consistency */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 bg-gray-800/90 backdrop-blur-md rounded-xl p-8 shadow-lg mx-4 max-w-5xl w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Skills & Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-2 bg-gray-700 px-5 py-4 rounded-lg shadow-md border border-purple-500/30 w-28 text-center text-white hover:bg-purple-700 transition"
            >
              <div className="text-4xl">{icon}</div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
