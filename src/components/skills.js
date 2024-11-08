// src/components/skills.js
import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-100 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Habilidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded shadow">
                        <h3 className="text-lg font-semibold">JavaScript</h3>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h3 className="text-lg font-semibold">React</h3>
                    </div>
                    {/* Añade más habilidades */}
                </div>
            </div>
        </section>
    );
}

export default Skills;