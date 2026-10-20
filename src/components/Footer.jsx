import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-6xl mx-auto px-6 py-6 pt-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold !text-white">
              Pradum Sonkar
            </h2>

            <p className="text-gray-400 mt-3 leading-6">
              MERN Stack Developer passionate about building
              modern, responsive and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                About
              </a>

              <a
                href="/skills"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Skills
              </a>

              <a
                href="/projects"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Projects
              </a>

              <a
                href="/contact"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800
                           flex items-center justify-center
                           hover:bg-pink-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/pradumsonkar/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800
                           flex items-center justify-center
                           hover:bg-pink-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800
                           flex items-center justify-center
                           hover:bg-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:pradumsonkar3@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800
                           flex items-center justify-center
                           hover:bg-pink-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pradum Sonkar. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Built with React.js & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;