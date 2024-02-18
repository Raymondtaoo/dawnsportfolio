import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Recaptcha from "react-google-invisible-recaptcha";

const AboutContact = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  const Modal = ({ show, onClose }) => {
    if (!show) {
      return null;
    }
    return (
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Sent!
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Your message has been successfully sent, I will contact you
                soon.
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClick={onClose}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ReCAPTCHA
  const refRecaptcha = React.useRef(null);

  // EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Email sent");
            setShowModal(true);
            setFormValues({ from_name: "", reply_to: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again later.");
          }
        );
    }
  };

  // Form Validation
  const [formValues, setFormValues] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    // Validate name
    if (!formValues.from_name) {
      errors.from_name = "Name is required";
    }

    // Validate email
    if (!formValues.reply_to) {
      errors.reply_to = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.reply_to)) {
      errors.reply_to = "Email address is invalid";
    }

    // Validate message
    if (!formValues.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div className="container mx-auto p-5 pb-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        {/* Introduction Section */}
        <div className="text-center p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md">
          <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
          <p className="text-lg">
            I'm an animation artist graduating in 2024. I specialize in bringing
            animated worlds to life with a strong focus on character design.
          </p>
        </div>

        {/* Resume Section */}
        <div className="bg-white p-1 md:p-3 rounded-lg border border-gray-200 shadow-md">
          <div className="flex justify-center overflow-hidden">
            <img
              src=" /resume.webp"
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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg mx-auto"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* Name Field */}
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="from_name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="from_name"
                  id="from_name"
                  type="text"
                  placeholder="Your Name"
                  value={formValues.from_name}
                  onChange={handleInputChange}
                />
                {formErrors.from_name && (
                  <p className="text-red-500 text-xs italic error-message">
                    {formErrors.from_name}
                  </p>
                )}
              </div>
              {/* Email Field */}
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="reply_to"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="reply_to"
                  id="reply_to"
                  type="email"
                  placeholder="youremail@example.com"
                  value={formValues.reply_to}
                  onChange={handleInputChange}
                />
                {formErrors.reply_to && (
                  <p className="text-red-500 text-xs italic error-message">
                    {formErrors.reply_to}
                  </p>
                )}
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
                name="message"
                id="message"
                placeholder="Enter your message here..."
                rows="4"
                value={formValues.message}
                onChange={handleInputChange}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-xs italic error-message">
                  {formErrors.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                className="shadow bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
              <Recaptcha
                onResolved={() => console.log("Human detected.")}
                ref={refRecaptcha}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                badge="bottomright"
              />
              <Modal show={showModal} onClose={() => setShowModal(false)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
