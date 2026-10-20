import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, } from "react-icons/fa";
import axios from "axios";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "http://13.207.0.74:5000/api/contacts",
        formData
      );
      alert("Message sent successfully");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className=" bg-[#FFFFE0] py-6 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Me
          </h1>
          <div className="w-40 h-1 bg-blue-500 mx-auto "></div>

          <div className="m-5">
            <p className="text-gray-600 mt-3">
            Feel free to contact me for opportunities or collaborations.
          </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Contact Information */}
          <div className="bg-gray-900 text-white rounded-2xl p-8">

            <h2 className="text-3xl !text-white font-bold mb-6">
              Get In Touch
            </h2>

            <div className="m-5"><p className="text-left text-gray-300 leading-7 mb-8">
              I am looking for entry-level opportunities as a MERN Stack
              Developer. If you have an opportunity or would like to
              collaborate, feel free to reach out.
            </p></div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className=" text-xl" />
              <div>
                <p className="text-gray-400 text-left text-sm">Email</p>
                <p>pradumsonkar3@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">
              <FaPhoneAlt className=" text-xl" />
              <div>
                <p className="text-gray-400 text-left text-sm">Phone</p>
                <p>+91 8127636924</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-white-400 text-xl" />
              <div>
                <p className="text-gray-400 text-left text-sm">Location</p>
                <p>Noida, Uttar Pradesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full
                           flex items-center justify-center
                           hover:bg-pink-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full
                           flex items-center justify-center
                           hover:bg-pink-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h2>

            <form className="space-y-2" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg
                             px-4 py-2 outline-none
                             focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-left  text-gray-700 font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg
                             px-4 py-2 outline-none
                             focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-lg
                             px-4 py-2 outline-none
                             focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-left text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg
                             px-4 py-2 outline-none resize-none
                             focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-900 text-white
                           py-3 rounded-lg font-semibold
                           hover:bg-gray-700 transition"
              >
                  {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Contact;