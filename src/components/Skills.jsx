import React from "react";
import { motion } from "framer-motion"
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiPython,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
];

const Skills = () => {
  return (
    <div>
      <section id="skills" className="container mx-auto px-6 py-20 bg-gray-800/50 rounded-xl my-12">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 px-5 py-3 bg-gray-800 rounded-full border border-gray-700 hover:border-purple-500 transition"
                  >
                    <skill.icon size={22} style={{ color: skill.color }} />
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills