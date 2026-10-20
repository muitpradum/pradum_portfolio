
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
} from "react-icons/fa";


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://13.207.0.74:5000/api/projects"
      );

      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Unable to load projects");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#FFFFE0]">
        <h2 className="text-2xl font-semibold">
          Loading Projects...
        </h2>
      </div>
    );
  }

  return (
    <section className=" bg-[#FFFFE0] py-6 px-6">

      <div className="max-w-8xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            My Projects
          </h1>

          <div className="w-40 h-1 bg-blue-500 mx-auto mt-1"></div>

          <div className="m-5"><p className="text-gray-600 mt-3">
            Some of the projects I have worked on
          </p></div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-lg
                         overflow-hidden hover:-translate-y-2
                         transition duration-300"
            >

              {/* Image */}
              {project.image ? (
                <img
                  src={`http://13.207.0.74:5000${project.image}`}
                  alt={project.title}
                  className="w-full h-58 object-cover"
                />
              ) : (
                <div className="h-48 bg-gray-900
                                flex items-center justify-center">
                  <FaReact className="text-white text-6xl" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">

                <h2 className=" text-left text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>

                <p className=" text-left text-gray-600 mt-3">
                  {project.description}
                </p>
                <h3 className=" text-left font-semibold text-gray-900 mb-2">
                  Key Features
                </h3>

                <ul className="list-disc text-left list-inside text-gray-600 space-y-1">
                  {project.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-pink-700 !text-white
                                 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2
                                 bg-gray-900 text-white
                                 px-4 py-2 rounded-lg
                                 hover:bg-gray-700"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2
                                 bg-gray-700 text-white
                                 px-4 py-2 rounded-lg
                                 hover:bg-pink-600"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* No projects */}
        {projects.length === 0 && !error && (
          <p className="text-center text-gray-600">
            No projects found.
          </p>
        )}

      </div>
    </section>
  );
}

export default Projects;