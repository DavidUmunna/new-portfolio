import React from "react";
import {motion} from "framer-motion"
import { FiGithub, FiExternalLink, FiMail, FiLinkedin } from 'react-icons/fi';


const Contact=()=>{
    return(
        <div>
          <section id="contact" className="container mx-auto px-6 py-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-8">
              <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                >
                  {/* Hidden input to tell Netlify which form this is */}
                  <input type="hidden" name="form-name" value="contact" />
                
                  <div>
                    <label htmlFor="name" className="block mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
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
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium"
                  >
                    Send Message
                  </motion.button>
                </form>

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