// src/components/Projects.js
import React, { useState } from 'react';

const Projects = () => {
    const [showMore, setShowMore] = useState(false);

    const techColors = {
        "React": "bg-blue-100 text-blue-500",
        "Tailwind": "bg-teal-100 text-teal-500",
        "Node.js": "bg-green-100 text-green-500",
        "Vue.js": "bg-green-100 text-green-700",
        "Firebase": "bg-yellow-100 text-yellow-500",
        "JavaScript": "bg-yellow-100 text-yellow-600",
        "Angular": "bg-red-100 text-red-500",
        "TypeScript": "bg-blue-100 text-blue-500",
        "Express": "bg-gray-100 text-gray-600",
        "MongoDB": "bg-green-100 text-green-700",
        "Python": "bg-yellow-100 text-yellow-600",
        "Django": "bg-green-100 text-green-600",
        "PostgreSQL": "bg-indigo-100 text-indigo-600",
        "Java": "bg-red-100 text-red-500",
        "Spring Boot": "bg-green-100 text-green-600",
        "MySQL": "bg-blue-100 text-blue-600",
        "PHP": "bg-purple-100 text-purple-500",
        "Laravel": "bg-red-100 text-red-600",
    };

    const projectData = [
        {
            title: "Project 1",
            description: "A brief description of the project.",
            imageUrl: "/path/to/image1.jpg",
            projectUrl: "https://project1.example.com",
            repoUrl: "https://github.com/username/project1",
            technologies: ["React", "Tailwind", "Node.js"]
        },
        {
            title: "Project 2",
            description: "A brief description of the project.",
            imageUrl: "/path/to/image2.jpg",
            projectUrl: "https://project2.example.com",
            repoUrl: "https://github.com/username/project2",
            technologies: ["Vue.js", "Firebase", "JavaScript"]
        },
        {
            title: "Project 3",
            description: "A brief description of the third project, showcasing additional features and details.",
            imageUrl: "/path/to/image3.jpg",
            projectUrl: "https://project3.example.com",
            repoUrl: "https://github.com/username/project3",
            technologies: ["Angular", "TypeScript", "Express", "MongoDB"]
        },
        // Proyectos adicionales ocultos inicialmente
        {
            title: "Project 4",
            description: "This is a hidden project that becomes visible on clicking View More.",
            imageUrl: "/path/to/image4.jpg",
            projectUrl: "https://project4.example.com",
            repoUrl: "https://github.com/username/project4",
            technologies: ["Python", "Django", "PostgreSQL"]
        },
        {
            title: "Project 5",
            description: "Another additional project with hidden visibility initially.",
            imageUrl: "/path/to/image5.jpg",
            projectUrl: "https://project5.example.com",
            repoUrl: "https://github.com/username/project5",
            technologies: ["Java", "Spring Boot", "MySQL"]
        },
        {
            title: "Project 6",
            description: "Final additional project with cool features and design.",
            imageUrl: "/path/to/image6.jpg",
            projectUrl: "https://project6.example.com",
            repoUrl: "https://github.com/username/project6",
            technologies: ["PHP", "Laravel", "Vue.js"]
        }
    ];

    // Proyectos principales y adicionales
    const mainProjects = projectData.slice(0, 3);
    const additionalProjects = projectData.slice(3);

    return (
        <section id="projects" className="py-20 bg-white px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">Projects</h2>
                
                <p className="text-center text-gray-700 mb-8">
                    The following projects were developed and published by me.
                </p>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainProjects.map((project, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <div className="relative">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors">
                                        View
                                    </a>
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-blue-500 text-blue-500 px-4 py-2 font-semibold rounded hover:bg-blue-500 hover:text-white transition-colors">
                                        Repo
                                    </a>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                {/* Estilos de tecnologías */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className={`${techColors[tech] || "bg-gray-100 text-gray-500"} px-2 py-1 text-xs font-semibold rounded`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {showMore && additionalProjects.map((project, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <div className="relative">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors">
                                        View
                                    </a>
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-blue-500 text-blue-500 px-4 py-2 font-semibold rounded hover:bg-blue-500 hover:text-white transition-colors">
                                        Repo
                                    </a>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className={`${techColors[tech] || "bg-gray-100 text-gray-500"} px-2 py-1 text-xs font-semibold rounded`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="bg-blue-500 text-white px-6 py-2 font-semibold rounded hover:bg-blue-600 transition-colors"
                    >
                        {showMore ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;