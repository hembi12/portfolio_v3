// src/components/resume.js
import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gray-100 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Currículum</h2>
                <div className="flex justify-center">
                    <a href="/ruta/a/tu/curriculum.pdf" download className="bg-blue-500 text-white px-8 py-4 text-lg rounded">
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;