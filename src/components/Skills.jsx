import React from "react";
import {motion} from "framer-motion"

const Skills=()=>{
    const skills = [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDb", level: 75 },
        { name: "Express", level: 70 },
        { name: "Fastapi", level: 50 },
        { name: "Python", level: 70 }
      ];

    return (
        <div>
            <section id="skills" className="container mx-auto px-6 py-20 bg-gray-800/50 rounded-xl my-12">
              <h2 className="text-3xl font-bold mb-12 text-center">
                My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2"  >
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
        </div>
    )

}

export default Skills