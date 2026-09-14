import React, { useState } from "react";
import {motion} from "framer-motion"
import { FiGithub, FiExternalLink, FiMail, FiLinkedin } from 'react-icons/fi';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const EMPTY_FORM = { name: "", email: "", message: "", "bot-field": "" };

const Contact=()=>{
    const [values, setValues] = useState(EMPTY_FORM);
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    function handleChange(e) {
      const { name, value } = e.target;
      setValues((v) => ({ ...v, [name]: value }));
    }

    function handleSubmit(e) {
      e.preventDefault();
      setStatus("submitting");
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then((res) => {
          if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
          setStatus("success");
          setValues(EMPTY_FORM);
        })
        .catch(() => setStatus("error"));
    }

    return(
        <div>
          <section id="contact" className="container mx-auto px-6 py-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-8">
              {status === "success" ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-lg font-bold">
                    &#10003;
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Message sent</h3>
                  <p className="text-gray-400">Thanks for reaching out — I'll get back to you soon.</p>
                </div>
              ) : (
              <form
                  name="contact"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Honeypot field: kept off-screen, real users never fill it */}
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" value={values["bot-field"]} onChange={handleChange} />
                    </label>
                  </p>

                  <div>
                    <label htmlFor="name" className="block mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={values.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </motion.button>
                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong sending that. Please try again, or email me directly.
                    </p>
                  )}
                </form>
              )}

                <div className="mt-12 flex justify-center space-x-6">
                  <a href="mailto:chimarokeumunna98@gmail.com" className="text-gray-400 hover:text-white transition">
                    <FiMail size={24} />
                  </a>
                  <a href="https://github.com/DavidUmunna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FiGithub size={24} />
                  </a>
                  <a href="www.linkedin.com/in/david-umunna-2b6601229" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FiLinkedin size={24} />
                  </a>
                </div>
              </div>
            </section>

        </div>
    )
}

export default Contact