
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section className="bg-[#FFFFE0] text-black py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          {/* <p className="text-blue-400 font-semibold text-lg">
            Get To Know Me
          </p> */}

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            About Me
          </h1>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              I'm <span className="text-blue-400">Pradum Sonkar</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-5">
              I am an MCA graduate and an aspiring MERN Stack Developer
              passionate about building modern, responsive and
              user-friendly web applications.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-5">
              I work with MongoDB, Express.js, React.js and Node.js.
              I also have experience with JavaScript, HTML, CSS,
              REST APIs, Git and GitHub.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              I enjoy learning new technologies and solving real-world
              problems through programming. My goal is to start my
              career as a MERN Stack Developer and contribute to
              building useful and scalable applications.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-6">

            {/* Education */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex items-start gap-5">

                <div className="bg-blue-600/20 p-4 rounded-lg">
                  <FaGraduationCap
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-xl !text-white font-bold mb-2">
                    Education
                  </h3>

                  <p className="text-gray-400">
                    Master of Computer Applications (MCA)
                  </p>

                  <p className="text-gray-500 mt-1">
                    Shri Ramswaroop Memorial University
                  </p>
                </div>

              </div>
            </div>

            {/* Development */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex items-start gap-5">

                <div className="bg-blue-600/20 p-4 rounded-lg">
                  <FaLaptopCode
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-xl !text-white font-bold mb-2">
                    MERN Stack Development
                  </h3>

                  <p className="text-gray-400">
                    React.js • Node.js • Express.js • MongoDB
                  </p>

                  <p className="text-gray-500 mt-1">
                    Building full-stack web applications
                  </p>
                </div>

              </div>
            </div>

            {/* Coding */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <div className="flex items-start gap-5">

                <div className="bg-blue-600/20 p-4 rounded-lg">
                  <FaCode
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-xl !text-white font-bold mb-2">
                    What I Do
                  </h3>

                  <p className="text-gray-400">
                    Responsive UI, REST APIs, CRUD applications,
                    authentication and database integration.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
