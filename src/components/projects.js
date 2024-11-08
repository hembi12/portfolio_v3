// src/components/projects.js
import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Proyectos</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 rounded shadow p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
                        <p className="mb-4">Descripción del proyecto.</p>
                        <a href="#" className="text-blue-500 hover:underline">Ver más</a>
                    </div>
                    {/* Añade más proyectos */}
                </div>
            </div>
        </section>
    );
}

export default Projects;