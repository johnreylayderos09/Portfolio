import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gray-900"
    >
      {/* Background gradient and blur circles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 bg-gray-800/90 backdrop-blur-md rounded-xl p-8 shadow-lg mx-4 max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-6 text-white">Connect With Me</h2>

        <p className="text-lg text-gray-300 mb-10 max-w-md mx-auto">
          Feel free to reach out or follow me on these platforms:
        </p>

        <div className="flex justify-center space-x-10 text-4xl text-gray-400">
          <a
            href="https://github.com/johnreylayderos09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/john-rey-layderos-bb4090381/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/j.r.layderos010902"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaFacebook />
          </a>

          <a
            href="mailto:johnreylayderos0109@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-400 transition-colors"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.instagram.com/dotenv_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="https://m.me/100032979323225?hash=AbYiqjyAqTcg7Z9M&source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Messenger"
            className="hover:text-indigo-400 transition-colors"
          >
            <FaFacebookMessenger />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
