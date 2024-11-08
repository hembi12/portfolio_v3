// src/components/Resume.js
import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gray-100 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Resume</h2>
                <p className="text-gray-600 mb-6">View or download my resume for more details.</p>
                <div className="flex justify-center space-x-4">
                    {/* Botón para ver el resume */}
                    <a 
                        href="/Hector_Martil_CV.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded"
                    >
                        View
                    </a>
                    {/* Botón para descargar el resume */}
                    <a 
                        href="/Hector_Martil_CV.pdf" 
                        download 
                        className="border border-blue-500 text-blue-500 px-8 py-4 text-lg font-semibold rounded hover:bg-blue-500 hover:text-white transition-colors"
                    >
                        Download
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;