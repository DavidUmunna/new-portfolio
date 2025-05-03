import React from "react";
import {motion} from "framer-motion"

const Navbar=()=>{
    return (

        <>
            <div>
              <nav className="container mx-auto px-6 py-4">
                  <div className="flex justify-between items-center ">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                      >
                        David Umunna
                      </motion.div>
                      <div className="hidden md:flex space-x-8">
                        <a href="#about" className="hover:text-pink-400 transition">About</a>
                        <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
                        <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
                        <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
                      </div>
                    </div>
              </nav>


            </div>
        </>
    )
}

export default Navbar