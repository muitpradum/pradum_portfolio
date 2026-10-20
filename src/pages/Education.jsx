import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "Shri Ramswaroop Memorial University",
      location: "Lucknow, Uttar Pradesh",
      year: "2022 – 2024",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      university: "Maharishi University of Information Technology",
      location: "Lucknow, Uttar Pradesh",
      year: "2019 – 2022",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section className="bg-gray-850 py-6 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Education
          </h1>
          <div className="w-40 h-1 bg-blue-500 mx-auto mt-1"></div>

          <p className=" text-gray-600 mt-3">
            My academic journey
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8 ">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-6
                         flex flex-col md:flex-row gap-6
                         hover:-translate-y-1 transition duration-300"
            >

              {/* Icon */}
              <div
                className="w-16 h-16 flex-shrink-0
                           bg-black-100 text-black-600
                           rounded-full flex items-center
                           justify-center text-3xl"
              >
                {item.icon}
              </div>

              {/* Details */}
              <div>
                <h2 className="text-2xl !text-white font-bold text-gray-900">
                  {item.degree}
                </h2>

                <h3 className="text-lg font-semibold text-black-600 mt-2">
                  {item.university}
                </h3>

                <p className="text-gray-600 mt-2">
                  📍 {item.location}
                </p>

                <p className="text-gray-500 mt-1">
                  📅 {item.year}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Education Summary */}
        <div className="mt-10 bg-gray-900 text-white rounded-2xl p-8 text-center">

          <h2 className=" !text-white text-2xl font-bold mb-3">
            My Academic Background
          </h2>

          <p className="text-gray-300 leading-7">
            My education in computer applications has given me a strong
            foundation in programming, databases, web development and
            software development. I am currently focusing on MERN Stack
            development and building real-world web applications.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Education;