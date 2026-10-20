
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiAxios,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "90%",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: "80%",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      level: "80%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "75%",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: "75%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "75%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "80%",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "75%",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "75%",
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      level: "75%",
    },
  ];

  return (
    <section className=" bg-gray-850 text-white py-4">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Skills
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>

           <div className="m-5"><p className="text-blue-400 text-lg font-semibold">
            My Technical Skills
          </p></div>

          
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-1 transition duration-300"
            >

              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-5">

                <div className="text-blue-400 text-3xl">
                  {skill.icon}
                </div>

                <h2 className="text-xl !text-white font-semibold">
                  {skill.name}
                </h2>

              </div>

              {/* Percentage */}
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">
                  Proficiency
                </span>

                <span className="text-blue-400">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">

                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>
          ))}

        </div>

        {/* MERN Stack */}
        <div className="mt-16 text-center">

          <h2 className="text-3xl font-bold mb-6">
            MERN Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <span className="px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg">
              MongoDB
            </span>

            <span className="px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg">
              Express.js
            </span>

            <span className="px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg">
              React.js
            </span>

            <span className="px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg">
              Node.js
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
