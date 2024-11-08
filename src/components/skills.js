// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiVisualstudiocode, SiPostgresql, SiJenkins, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const skillsData = {
        Frontend: [
            { name: "JavaScript", icon: <SiJavascript />, color: "bg-yellow-100 text-yellow-600" },
            { name: "React", icon: <FaReact />, color: "bg-blue-100 text-blue-500" },
            { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-teal-100 text-teal-500" },
            { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-purple-100 text-purple-600" },
        ],
        Backend: [
            { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-100 text-green-500" },
            { name: "Python", icon: <FaPython />, color: "bg-yellow-100 text-yellow-600" },
            { name: "Java", icon: <FaJava />, color: "bg-red-100 text-red-500" },
            { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-100 text-blue-500" },
        ],
        Databases: [
            { name: "MongoDB", icon: <SiMongodb />, color: "bg-green-100 text-green-700" },
            { name: "MySQL", icon: <SiMysql />, color: "bg-blue-100 text-blue-600" },
            { name: "Firebase", icon: <SiFirebase />, color: "bg-yellow-100 text-yellow-500" },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-indigo-100 text-indigo-600" },
        ],
        Tools: [
            { name: "Git", icon: <FaGitAlt />, color: "bg-red-100 text-red-500" },
            { name: "VSC", icon: <SiVisualstudiocode />, color: "bg-blue-100 text-blue-500" },
            { name: "Docker", icon: <FaDocker />, color: "bg-blue-100 text-blue-600" },
            { name: "Jenkins", icon: <SiJenkins />, color: "bg-gray-100 text-gray-700" },
        ],
    };

    return (
        <section id="skills" className="py-20 bg-gray-100 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Skills</h2>
                
                {/* Descripción de habilidades */}
                <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto">
                    Technologies and tools I've used in my projects.
                </p>

                {Object.keys(skillsData).map((category) => (
                    <div key={category} className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {skillsData[category].map((skill, index) => (
                                <div key={index} className={`p-4 rounded shadow ${skill.color} flex flex-col items-center`}>
                                    <div className="text-4xl mb-2">{skill.icon}</div>
                                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;