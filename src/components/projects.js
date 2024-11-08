// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projectData = [
        {
            title: "Project 1",
            description: "A brief description of the project.",
            imageUrl: "/path/to/image1.jpg", // Reemplaza con la ruta de tu imagen
            projectUrl: "https://project1.example.com",
            repoUrl: "https://github.com/username/project1",
            technologies: ["React", "Tailwind CSS", "Node.js"]
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
            imageUrl: "/path/to/image3.jpg", // Reemplaza con la ruta de tu imagen
            projectUrl: "https://project3.example.com",
            repoUrl: "https://github.com/username/project3",
            technologies: ["Angular", "TypeScript", "Express", "MongoDB"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Projects</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                            {/* Header estilo Mac */}
                            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            {/* Imagen de vista previa */}
                            <div className="relative">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded">
                                        View Project
                                    </a>
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors">
                                        View Repo
                                    </a>
                                </div>
                            </div>

                            {/* Contenido de la tarjeta */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                {/* Badges de tecnologías */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-blue-100 text-blue-500 px-2 py-1 text-xs font-semibold rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;