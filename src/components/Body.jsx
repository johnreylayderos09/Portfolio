import Home from './BodyComponents/Home'
import Projects from './BodyComponents/Projects'
import Skills from './BodyComponents/Skills'
import Contact from './BodyComponents/Contact';

function Body() {
  return (
    <div className="dark:bg-gray-950 min-h-screen text-white">
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Body;
