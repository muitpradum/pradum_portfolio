import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import image from '../assets/pradum.png'
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <section className=" bg-gray-850 text-white flex items-center pt-10">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="grid md:grid-cols-2 gap-6 items-center">

            {/* Left Content */}
            <div>

              <p className="text-blue-400 text-lg font-semibold mb-3">
                Hello, I'm
              </p>

              <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-bold mb-4">
                Pradum Sonkar
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
                MERN Stack Developer
              </h2>

              <div className="m-5">
                <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
                  I am an MCA graduate and aspiring MERN Stack Developer.
                  I build responsive and user-friendly web applications
                  using MongoDB, Express.js, React.js and Node.js.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <Link
                  to="/projects"
                  className="flex items-center gap-2 bg-blue-900 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition"
                >
                  View Projects
                  <FiArrowRight size={20} />
                </Link>

                <a
                  // 
                  href={`${import.meta.env.BASE_URL}Resume%20(3).pdf`}
                  download="Pradum-Sonkar-Resume.pdf"
                  className="flex items-center text-black gap-2 border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition"
                >
                  <FiDownload size={20} />
                  Download Resume
                </a>

              </div>

              {/* Social Links */}
              <div className="flex gap-5 mt-8">

                <Link
                  to="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaGithub size={27} />
                </Link>

                <Link
                  to="https://linkedin.com/in/pradumsonkar/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaLinkedin size={27} />
                </Link>

                <Link
                  to="mailto:pradumsonkar3@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  <FaEnvelope size={27} />
                </Link>

              </div>

            </div>

            {/* Right Profile Section */}
            <div className="flex justify-center">

              <div className="relative">

                {/* Profile Image */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl">

                  <img
                    src={image}
                    alt="Pradum Sonkar"
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* MERN Badge */}
                <div className="absolute -bottom-5 -right-5 bg-gray-800 border border-gray-700 px-5 py-3 rounded-xl shadow-lg">
                  <p className="text-blue-400 font-bold">
                    MERN Stack
                  </p>
                  <p className="text-gray-400 text-sm">
                    Developer
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default Home;

