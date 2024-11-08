// src/components/about.js
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white px-4">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Sobre Mí</h2>
                <p className="text-base md:text-lg">
                    [Aquí puedes agregar información sobre ti, tu experiencia, educación, etc.]
                </p>
            </div>
        </section>
    );
}

export default About;