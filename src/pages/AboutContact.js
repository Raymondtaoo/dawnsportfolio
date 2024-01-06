import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutContact = () => {
  return (
    <div className="container mx-auto p-5 pb-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        {/* Introduction Section */}
        <div className="text-center p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md">
          <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
          <p className="text-lg">
            I'm an aspiring animation artist graduating in 2024. Explore my work
            in the galleries!
          </p>
        </div>

        {/* Resume Section */}
        <div className="bg-white p-1 md:p-3 rounded-lg border border-gray-200 shadow-md">
          <div className="flex justify-center overflow-hidden">
            <img
              src="/resume.png"
              alt="Resume"
              className="w-full max-h-[836px] object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Social Links Section with Font Awesome Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://instagram.com/da.bokki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/dawn-kim-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:kimdawn@sheridancollege.ca">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        {/* Contact Section */}
        <div className="text-center p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md">
          <h2 className="text-3xl font-bold text-black mb-4">Contact Me</h2>
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* Name Field */}
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              {/* Email Field */}
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>
            {/* Message Field */}
            <div className="px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                placeholder="Enter your message here..."
                rows="4"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
                <button
                  className="shadow bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
