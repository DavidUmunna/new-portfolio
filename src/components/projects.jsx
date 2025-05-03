import React from "react";
import Projects from "./projects.json"
import {motion} from "framer-motion"
import { FiGithub, FiExternalLink, FiMail, FiLinkedin } from 'react-icons/fi';

const Projects_comp=()=>{
    return(
        <div>
         <section id="projects" className="container mx-auto px-6 py-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="h-48 bg-gradient-to-r from-purple-500/30 to-pink-600/30"></div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition"
                        >
                          <FiGithub className="mr-2" /> Code
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition"
                        >
                          <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

        </div>
    )
}

export default Projects_comp