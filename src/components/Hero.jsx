import React from "react";
import {motion} from "framer-motion"

const Hero=()=>{
    return(
        <>
            <section className="container mx-auto px-6 py-20 md:py-32">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">David</span>
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
                  backend/fullstack Developer
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-400">
                "I build impactful digital solutions using modern technologies. 
                Currently focused on developing robust backend systems with Node.js and Express, 
                and creating seamless user interfaces with React."
                </p>
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    View Projects
                  </motion.a>
                </div>
              </motion.div>
           </section>
        </>
    )
}

export default Hero