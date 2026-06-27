import React from "react";
import {motion} from "framer-motion"
import profileImg from "./assets/profile.jpg"


const About=()=>{
    return(
        <div>
            <section id="about" className="container mx-auto px-6 py-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:w-1/3"
                >
                  <div className="w-64 h-64 mx-auto rounded-full shadow-xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600">
                    <img
                      src={profileImg}
                      alt="David Umunna"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:w-2/3"
                >
                  <p className="text-lg text-gray-300 mb-6">
                    I'm a passionate developer with  experience creating web applications and Engineering end to end solutions
                    
                  </p>
                  <p className="text-lg text-gray-300 mb-6">
                    When I'm not coding, you can find me having a good read, doing some training,
                    or Gaming.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-gray-800 rounded-full">Web Development</div>
                    <div className="px-4 py-2 bg-gray-800 rounded-full">Backend Engineering</div>
                    <div className="px-4 py-2 bg-gray-800 rounded-full">Software architecture Design</div>
                    <div className="px-4 py-2 bg-gray-800 rounded-full">Software Testing</div>
                    <div className="px-4 py-2 bg-gray-800 rounded-full">Mobile Apps</div>
                  </div>
                </motion.div>
              </div>
            </section>

        </div>
    )

}

export default About