import project1Img from '../../assets/images/project1.png';
import project2Img from '../../assets/images/project2.png';


function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 relative overflow-hidden px-6 py-24 flex justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 bg-gray-800/90 backdrop-blur-md rounded-xl p-8 shadow-lg mx-4 max-w-6xl w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-white">
          {/* Project 1: ExpenseGenie */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-purple-500/20 flex flex-col">
            <img
              src={project1Img}
              alt="ExpenseGenie"
              className="rounded-md mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-bold mb-2">
              ExpenseGenie <span className="text-sm text-cyan-400">(On-going)</span>
            </h3>
            <p className="mb-4">A smart personal finance tracker with AI-powered budgeting.</p>
            <div className="mt-auto flex gap-4">
              <a href="https://expensegenie.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Live Demo
                </button>
              </a>
              <a href="https://github.com/johnreylayderos09/expense-genie" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium border border-white/20">
                  GitHub Repo
                </button>
              </a>
            </div>
          </div>

          {/* Project 2: Agri-Cast */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-purple-500/20 flex flex-col">
            <img
              src={project2Img} 
              alt="Agri-Cast"
              className="rounded-md mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-bold mb-2">
              Agri-Cast <span className="text-sm text-green-400">(Finished)</span>
            </h3>
            <p className="mb-4">A weather-based forecasting system tailored for agriculture needs.</p>
            <div className="mt-auto flex gap-4">
              <a href="https://agri-cast-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Live Demo
                </button>
              </a>
              <a href="https://github.com/johnreylayderos09/AgriCast" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium border border-white/20">
                  GitHub Repo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
